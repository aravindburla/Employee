import express from 'express';
import { getUser, Login, register } from '../controllers/user.js';
import { extractJwt } from '../middlewares/jwt.js';
const router = express.Router();


router.post("/register",register)
router.post("/login",Login)
router.get("/get",extractJwt,getUser)

export default router