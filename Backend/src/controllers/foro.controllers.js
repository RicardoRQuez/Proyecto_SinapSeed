import Comment from "../models/foro.models.js";
import User from "../models/users.models.js";

// controlador para comentarios
export const comment = async (req, res) => {
  const { comentario } = req.body;
  const { nombre } = req.params;

  try {
    await Comment.create({
      nombre,
      comentario,
    });

    res.status(201).json({
      msg: "¡Comentario creado con éxito!",
      status: 201,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al publicar el comentario",
      status: 500,
    });
  }
};

export const findAllComment = async (req, res) => {
  try {
    // Obtener todos los usuarios
    const allComment = await Comment.find();
    res.json(allComment);
  } catch (error) {
    console.error("Error al obtener los comentarios:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

export const updateCommentById = async (req, res) => {
  const { id } = req.params;
  const { comentario } = req.body;

  try {
    // Verificamos si el comentario existe
    const updateComment = await Comment.findByIdAndUpdate(
      id,
      { comentario },
      { new: true }
    );

    console.log("Contenido Variable update Comment");
    console.log(updateComment);

    if (!updateComment) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }

    res.json({
      code: 200,
      message: "Comentario actualizado con éxito.",
      commentId: updateComment._id,
      token: req.token,
    });
  } catch (error) {
    console.log("Error en la actualización del Comentario", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

export const deleteCommentById = async (req, res) => {
  const { id } = req.params;

  try {
    // Verificar si el usuario existe
    const deleteComment = await Comment.findById(id);
    console.log("Contenido Variable delete Comment");
    console.log(deleteComment);
    if (!deleteComment) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }

    // Eliminar el usuario
    await deleteComment.deleteOne();

    res.json({
      message: "Comentario eliminado correctamente",
      token: req.token,
    });
  } catch (error) {
    console.error("Error al eliminar el comentario:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};
