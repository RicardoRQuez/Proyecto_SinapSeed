import {Router} from 'express';
import {signup}  from '../controllers/users.controllers.js'

const router = Router()

router.post("/login" );
router.post("/signup", signup);

export default router;
