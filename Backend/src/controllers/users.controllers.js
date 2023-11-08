import User from "../models/users.models.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const {
    nombre,
    rut,
    correo,
    telefono,
    region,
    contraseña,
    situacionLaboral,
  } = req.body;

  if (
    !nombre ||
    !rut ||
    !correo ||
    !telefono ||
    !region ||
    !contraseña ||
    !situacionLaboral
  ) {
    return res.status(404).json({
      msg: "Todos los campos son requeridos",
      status: 404,
    });
  } 
  try {
    const passwordHash = await bcrypt.hash(contraseña, 12);

    await User.create({
      nombre,
      rut,
      correo,
      telefono,
      region,
      contraseña: passwordHash, //variable que contiene contraseña encriptada
      situacionLaboral
    });

    res.status(201).json({
      msg: "¡Usuario creado con éxito!",
      status: 201,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al crear el usuario",
      status: 500,
    });
  }
};
