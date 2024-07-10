import express from "express";
import {  forgotPassword, getuser, loginUser, registerUser, resetPassword } from "../controllers/userController.js";
import authuMiddleware from "../Middleware/athuMiddleware.js";




const router = express.Router();

router.post("/register-user",registerUser);
router.post("/login-user",loginUser);
router.get("/get-user",authuMiddleware,getuser)
router.post("/forgot-password",forgotPassword)
router.post("/reset-password/:id/:token",resetPassword)

export default router;
