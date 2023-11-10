import express from 'express';
import { createCurso, uploadImagen, findAllCursos, editCurso, deleteCursoById } from '../controllers/cursos.controllers.js';

const router = express.Router();

router.post('/curso', uploadImagen, createCurso );
router.get('/curso', findAllCursos );
router.patch('/curso/:id', uploadImagen, editCurso );
router.delete('/curso/:id',  deleteCursoById );


export default router;
