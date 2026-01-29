import { loginUser, logoutUser, registerUser, verifyUser } from "../controllers/AuthControllers.js";
import protect from "../middlewares/auth.js";
import express from "express";

const AuthRouter = express.Router();

AuthRouter.post('/register', registerUser)
AuthRouter.post('/login', loginUser)
AuthRouter.get('/verify', protect, verifyUser)
AuthRouter.post('/logout', protect, logoutUser)

export default AuthRouter
