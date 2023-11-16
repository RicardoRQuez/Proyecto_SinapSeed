import User from "../models/users.models.js";
import bcrypt from "bcrypt";
import multer from 'multer';

export const uploadImagen = multer().single('imagen'); // Middleware para manejar la carga de imágenes

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
  const user = req.user;

  res.json({
    code: 200,
    message: "Login correcto",
    token: req.token,
    isAdmin: user.isAdmin,
  });
};

export const findAll = async (req, res) => {
  try {
    // Obtener todos los usuarios
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

export const findAllUserId = async (req, res) => {

const userId = req.params.id

  try {

    const userById = await User.findById(userId);
    if (!userById) {
      // Si no se encuentra un usuario con el ID proporcionado, devolver un error 404
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(userById);
    
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

export const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, telefono, region, situacionLaboral, password } = req.body;
  let updateFields = {
    nombre,
    email,
    telefono,
    region,
    situacionLaboral,
    password,
  };

  // Verificar si se está enviando una nueva imagen en la solicitud
  if (req.file) {
    updateFields.imagen = req.file.buffer; // Acceder a la nueva imagen cargada
  }

  try {
    // Verificar si el usuario existe
    const updateUser = await User.findByIdAndUpdate(
      id,
      updateFields,
      { new: true }
    );

    if (!updateUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json({ code: 200, message: "Usuario actualizado con éxito" });
  } catch (error) {
    console.log("Error en la actualización de un usuario", error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};


export const deleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
      // Verificar si el usuario existe
      const deleteUser = await User.findById(id);
      console.log("Contenido Variable deleteUser");
      console.log(deleteUser);
      if (!deleteUser) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      // Eliminar el usuario
      await deleteUser.deleteOne();

      res.json({ message: 'Usuario eliminado correctamente', token: req.token  });
  } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      res.status(500).json({ error: 'Error del servidor' });
  }
};