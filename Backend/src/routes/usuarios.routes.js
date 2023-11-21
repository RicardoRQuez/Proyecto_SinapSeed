import {Router} from 'express';
import {uploadImagen, signup, login, findAll, findAllUserId, updateUserById, deleteUserById, verificarDatos, actualizarContrasena, obtenerIdUsuario}  from '../controllers/users.controllers.js'
import {emitToken} from '../middleware/emitToken.js'
import { verificarExistencia } from '../middleware/verifyEmailRut.js';
import {verifyToken} from '../middleware/verifyToken.js'
const router = Router()

router.post("/login", emitToken, login);
router.post("/signup", signup);
router.get("/user", verifyToken, findAll)
router.post("/verificar", verificarExistencia, findAll)

router.get("/user/:id", findAllUserId)
router.patch("/user/:id", uploadImagen, updateUserById)
router.delete("/user/:id", verifyToken, deleteUserById )

router.post("/verificar-datos", verificarDatos);
router.patch("/actualizar-contrasena/:id", actualizarContrasena)
router.get("/obtener-id-usuario", obtenerIdUsuario)

export default router;