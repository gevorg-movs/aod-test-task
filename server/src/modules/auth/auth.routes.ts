import express from "express";
import { login, register, verify } from "./auth.controller";
import { loginValidations, registerValidations } from "./auth.validations";

const router = express.Router();

router.post("/register", ...registerValidations, register);
router.post("/login", ...loginValidations, login);
router.get("/verify", verify);

export default router;