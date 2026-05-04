import { Request, Response } from "express";

import { successResponse } from "../../utils/api-response";
import { authService } from "./auth.service";

export class AuthController {
  login(req: Request, res: Response) {
    const result = authService.login(req.body);

    return res.status(200).json(successResponse("Login scaffold executed", result));
  }

  me(req: Request, res: Response) {
    return res.status(200).json(successResponse("Authenticated user fetched", req.user));
  }
}

export const authController = new AuthController();
