import { Router } from 'express';
import { findAllUsers, createUser } from '../controllers/usuarios.controllers.js'
import upload from 'express-fileupload'

const router = Router();

router.get('/', findAllUsers)
router.post('/',upload(), createUser)

export default router;

