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



//-----------------------------
export const verificarDatos = async (req, res) => {
  const { nombre, rut, email, telefono } = req.body;

  try {
    // Lógica para buscar al usuario con los datos proporcionados en la base de datos
    const usuarioEncontrado = await User.findOne({ nombre, rut, email, telefono });
    console.log("Usuarios encontrados!", usuarioEncontrado)

    if (!usuarioEncontrado) {
      return res.status(404).json({ mensaje: 'Datos incorrectos' });
    }

    const newPassword = generarPasswordAleatoria();

    return res.status(200).json({ mensaje: 'Datos verificados', newPassword });

  } catch (error) {
    console.error('Error al verificar los datos:', error);
    res.status(500).json({ mensaje: 'Error del servidor', error });
  }
};


    // Generar una contraseña (este es solo un ejemplo, puedes usar tu lógica real para generar una contraseña)
const generarPasswordAleatoria = () => {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let newPassword = '';
  let longitud = 8;
  
  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    newPassword += caracteres.charAt(randomIndex);
  }
        
  return newPassword;
};

//Actualizar contraseña-------------------------------------
// Controlador para actualizar contraseña
export const actualizarContrasena = async (req, res) => {
  const { userId, nuevaContrasena } = req.body;

  try {
    // Encuentra al usuario por su ID
    const usuario = await User.findById(userId);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Aquí debes actualizar el campo de la contraseña correctamente
    usuario.password = nuevaContrasena;
    await usuario.save();

    return res.status(200).json({ mensaje: 'Contraseña actualizada exitosamente' });
  } catch (error) {
    console.error('Error al actualizar la contraseña:', error);
    return res.status(500).json({ mensaje: 'Error del servidor' });
  }
};


//-------------------------------------------------------------------

//Obtener ID del usuario----------------------------------------------------
// Controlador en tu backend para obtener el ID del usuario por su correo electrónico

export const obtenerIdUsuario = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    return res.status(200).json({ userId: user._id });
  } catch (error) {
    console.error('Error al obtener el usuario por correo electrónico:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

//----------------------------------------------------
