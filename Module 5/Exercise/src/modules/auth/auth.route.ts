import { Router } from "express";

import { authenticate } from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validate.middleware";
import { authController } from "./auth.controller";
import { loginSchema } from "./auth.schema";

export const authRouter = Router();

authRouter.post("/login", validate(loginSchema), (req, res) => authController.login(req, res));
authRouter.get("/me", authenticate, (req, res) => authController.me(req, res));
