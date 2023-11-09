import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; // Importa bcrypt
import User from "../models/users.models.js";

export const emitToken = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const usuario = await User.findOne({ email }, [
      "nombre",
      "rut",
      "email",
      "telefono",
      "region",
      "situacionLaboral",
      "password" // Asegúrate de incluir la contraseña en la búsqueda
    ]);

    if (!usuario) {
      return res
        .status(400)
        .json({ code: 400, message: "Error de autenticación." });
    }

    // Utiliza bcrypt.compare() para comparar la contraseña ingresada con la contraseña encriptada
    bcrypt.compare(password, usuario.password, (err, match) => {
      if (err || !match) {
        return res
          .status(400)
          .json({ code: 400, message: "Error de autenticación." });
      }

      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expira en 1 hora
          data: usuario,
        },
        process.env.SECRETPHRASE
      );

      req.token = token;
      next();
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ code: 500, message: "Error del servidor." });
  }
};