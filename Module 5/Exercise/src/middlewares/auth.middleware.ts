import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import { env } from "../config/env";
import { Role, TokenPayload } from "../types/auth";
import { ApiError } from "../types/api";

const parseBearerToken = (authorizationHeader?: string): string => {
  if (!authorizationHeader) {
    throw new ApiError(401, "Authorization header is required");
  }

  const [scheme, token] = authorizationHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    throw new ApiError(401, "Authorization header must use the Bearer scheme");
  }

  return token;
};

const isValidRole = (role: unknown): role is Role => role === "visitor" || role === "admin";

export const authenticate = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const token = parseBearerToken(req.headers.authorization);
    const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload;

    if (typeof decoded.sub !== "string" || !isValidRole(decoded.role)) {
      throw new ApiError(401, "Invalid token payload");
    }

    req.user = {
      userId: decoded.sub,
      role: decoded.role
    } satisfies TokenPayload;

    next();
  } catch (error) {
    if (error instanceof ApiError) {
      return next(error);
    }

    return next(new ApiError(401, "Invalid or expired token"));
  }
};
