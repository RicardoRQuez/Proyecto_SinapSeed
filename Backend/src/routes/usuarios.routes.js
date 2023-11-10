import {Router} from 'express';
import {signup, login, findAll, findAllUserId, updateUserById, deleteUserById}  from '../controllers/users.controllers.js'
import {emitToken} from '../middleware/emitToken.js'

const router = Router()

router.post("/login", emitToken, login);
router.post("/signup", signup);
router.get("/user", findAll)
router.get("/user/:id", findAllUserId)
router.patch("/user/:id", updateUserById)
router.delete("/user/:id", deleteUserById )

export default router;
