import express from 'express';
import { createCurso, uploadImagen, findAllCursos, editCurso, deleteCursoById, findAllCursoId } from '../controllers/cursos.controllers.js';
import {verifyToken} from '../middleware/verifyToken.js'
const router = express.Router();

router.post('/curso', uploadImagen, createCurso );
router.get('/curso', verifyToken, findAllCursos );
router.patch('/curso/:id', uploadImagen, editCurso );
router.delete('/curso/:id',  deleteCursoById );
router.get('/curso/:id',verifyToken, findAllCursoId );

export default router;
