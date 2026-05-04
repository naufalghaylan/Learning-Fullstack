import jwt from "jsonwebtoken";

import { env } from "../../config/env";
import { Role } from "../../types/auth";

type LoginInput = {
  email: string;
  password: string;
};

export class AuthService {
  login(input: LoginInput) {
    const role: Role = input.email.includes("admin") ? "admin" : "visitor";

    return {
      token: jwt.sign({ role }, env.JWT_SECRET, {
        subject: input.email,
        expiresIn: "1d"
      }),
      role
    };
  }
}

export const authService = new AuthService();
