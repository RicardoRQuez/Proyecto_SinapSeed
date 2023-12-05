import express from 'express';
import { uploadImagen, createComment, findAllComment, updateCommentById, deleteCommentById } from '../controllers/foro.controllers.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/comment/:courseId/:userId', verifyToken, uploadImagen, createComment);
router.get('/comment', findAllComment);
router.put('/comment/:id', updateCommentById);
router.delete('/comment/:id', deleteCommentById);

export default router;
