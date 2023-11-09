import {Router} from 'express';
import {signup, login}  from '../controllers/users.controllers.js'
import {emitToken} from '../middleware/emitToken.js'

const router = Router()

router.post("/login", emitToken, login);
router.post("/signup", signup);

export default router;
