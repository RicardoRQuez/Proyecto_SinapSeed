import {Router} from 'express';
import {signup, login, findAll, findAllUserId, updateUserById, deleteUserById}  from '../controllers/users.controllers.js'
import {emitToken} from '../middleware/emitToken.js'
import { verificarExistencia } from '../middleware/verifyEmailRut.js';
const router = Router()

router.post("/login", emitToken, login);
router.post("/signup", signup);
router.get("/user", findAll)
router.post("/verificar", verificarExistencia, findAll)

router.get("/user/:id", findAllUserId)
router.patch("/user/:id", updateUserById)
router.delete("/user/:id", verifyToken, deleteUserById )

export default router;
