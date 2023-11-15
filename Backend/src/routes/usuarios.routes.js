import {Router} from 'express';
import {signup, login, findAll, findAllUserId, updateUserById, deleteUserById}  from '../controllers/users.controllers.js'
import {emitToken} from '../middleware/emitToken.js'
import {verifyToken} from '../middleware/verifyToken.js'

const router = Router()

router.post("/login", emitToken, login);
router.post("/signup", signup);
router.get("/user", verifyToken, findAll)
router.get("/user/:id",  findAllUserId)
router.patch("/user/:id", updateUserById)
router.delete("/user/:id", verifyToken, deleteUserById )

export default router;
