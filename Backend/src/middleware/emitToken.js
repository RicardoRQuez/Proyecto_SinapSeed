import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
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
      "password", 
      "administrador"
    ]);

    if (!usuario) {
      return res
        .status(400)
        .json({ code: 400, message: "Error de autenticación." });
    }

    bcrypt.compare(password, usuario.password, (err, match) => {
      if (err || !match) {
        return res
          .status(400)
          .json({ code: 400, message: "Error de autenticación." });
      }

      // Agrega la propiedad isAdmin a la información del usuario
      const userWithAdmin = { ...usuario.toObject(), isAdmin: usuario.administrador };

      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expira en 1 hora
          data: userWithAdmin, // Usa la información actualizada del usuario con la propiedad isAdmin
        },
        process.env.SECRETPHRASE
      );
      req.user = userWithAdmin;
      req.token = token;
      next();
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ code: 500, message: "Error del servidor." });
  }
};
