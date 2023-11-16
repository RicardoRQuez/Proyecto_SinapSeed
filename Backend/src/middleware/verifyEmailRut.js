import User from "../models/users.models.js";

export const verificarExistencia = async (req, res, next) => {
  try {
        
            const filtroRut = { ["rut"]: req.body.rut };
            const rutExistente = await User.findOne(filtroRut);
            console.log(rutExistente)

            const filtroEmail = { ["email"]: req.body.email };
            const EmailExistente =await User.findOne(filtroEmail);
            console.log(EmailExistente)
        
    
    if (rutExistente || EmailExistente) {
      return res
        .status(200)
        .json({ existeCampo: true, message: `El usuario ya está registrado` });
    }

    // Campo no existe
    return res.status(200).json({ existeCampo: false });
    next();
  } catch (error) {
    console.error("Error al verificar existencia:", error);
    return { error: "Error en el servidor" };
  }
};
