import express from 'express';
import { comment, findAllComment, updateCommentById, deleteCommentById } from '../controllers/foro.controllers.js';

const router = express.Router();

router.post('/comment/:nombre', comment);
router.get('/comment', findAllComment);
router.put('/comment/:id', updateCommentById);
router.delete('/comment/:id', deleteCommentById);

export default router;
