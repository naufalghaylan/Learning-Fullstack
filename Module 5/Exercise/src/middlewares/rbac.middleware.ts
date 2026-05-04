import { NextFunction, Request, Response } from "express";

import { Role } from "../types/auth";
import { ApiError } from "../types/api";

export const requireRole = (role: Role) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new ApiError(401, "Authentication is required"));
    }

    if (req.user.role !== role) {
      return next(new ApiError(403, "You do not have permission to access this resource"));
    }

    return next();
  };
};

export const requireAnyRole = (...roles: Role[]) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new ApiError(401, "Authentication is required"));
    }

    if (!roles.includes(req.user.role)) {
      return next(new ApiError(403, "You do not have permission to access this resource"));
    }

    return next();
  };
};
