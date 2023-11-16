import Curso from "../models/cursos.models.js";
import multer from 'multer';

export const uploadImagen = multer().single('imagen'); // Middleware para manejar la carga de imágenes

export const createCurso = async (req, res) => {
  const { titulo, descripcion, resumen, precio, puntaje } = req.body;
  const imagen = req.file ? req.file.buffer : undefined;
  
  try {
    await Curso.create({ 
        titulo, 
        descripcion, 
        resumen,
        precio,
        puntaje
    });

    res.status(201).json({ message: "Curso creado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

export const findAllCursos = async (req, res) => {
    try {

      const allCursos = await Curso.find();
      res.json(allCursos);
    } catch (error) {
      console.error('Error al obtener los cursos:', error);
      res.status(500).json({ error: 'Error del servidor' });
    }
  };


  export const editCurso = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, resumen, precio, puntaje } = req.body;
  
    try {
      let updateFields = { titulo, descripcion, resumen, precio, puntaje };
  
      // Verificar si se ha cargado una nueva imagen
      if (req.file) {
        const imagen = req.file.buffer;
        updateFields = { ...updateFields };
      }
  
      // Actualizar el curso en la base de datos
      const updateCurso = await Curso.findByIdAndUpdate(
        id,
        updateFields,
        { new: true }
      );
  
      if (!updateCurso) {
        return res.status(404).json({ error: "Curso no encontrado" });
      }
  
      res.json({
        code: 200,
        message: "Curso actualizado con éxito.",
        CursoId: updateCurso._id,
        token: req.token,
      });
    } catch (error) {
      console.log("Error en la actualización del Curso", error);
      res.status(500).json({ error: "Error del servidor" });
    }
  };
  

  export const deleteCursoById = async (req, res) => {
    const { id } = req.params;
  
    try {
        // Verificar si el usuario existe
        const deleteCurso = await Curso.findById(id);
   
        if (!deleteCurso) {
            return res.status(404).json({ error: 'Curso no encontrado' });
        }
  
        // Eliminar el usuario
        await deleteCurso.deleteOne();
  
        res.json({ message: 'Curso eliminado correctamente', token: req.token  });
    } catch (error) {
        console.error('Error al eliminar el curso:', error);
        res.status(500).json({ error: 'Error del servidor' });
    }
  };

  export const findAllCursoId = async (req, res) => {

    const cursosId = req.params.id

      try {

        const cursosById = await Curso.findById(cursosId);
        if (!cursosById) {
          // Si no se encuentra un usuario con el ID proporcionado, devolver un error 404
          return res.status(404).json({ error: 'Curso no encontrado' });
        }
        res.json(cursosById);

      } catch (error) {
        console.error('Error al obtener el curso:', error);
        res.status(500).json({ error: 'Error del servidor' });
      }
    };