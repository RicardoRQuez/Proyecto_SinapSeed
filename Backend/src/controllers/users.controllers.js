import User from "../models/users.models.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const {
    nombre,
    rut,
    email,
    telefono,
    region,
    password,
    situacionLaboral,
  } = req.body;

  if (
    !nombre ||
    !rut ||
    !email ||
    !telefono ||
    !region ||
    !password ||
    !situacionLaboral
  ) {
    return res.status(404).json({
      msg: "Todos los campos son requeridos",
      status: 404,
    });
  }
  try {
    const passwordHash = await bcrypt.hash(password, 12);

    await User.create({
      nombre,
      rut,
      email,
      telefono,
      region,
      password: passwordHash, //variable que contiene contraseña encriptada
      situacionLaboral,
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

export const login = async (req, res) => {
  res.json({
    code: 200,
    message: "Login correcto",
    token: req.token,
  });
};
