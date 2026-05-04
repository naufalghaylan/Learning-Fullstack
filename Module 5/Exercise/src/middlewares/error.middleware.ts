import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

import { ApiError } from "../types/api";
import { errorResponse } from "../utils/api-response";

export const notFoundHandler = (_req: Request, res: Response) => {
  return res.status(404).json(errorResponse("Route not found"));
};

export const errorHandler = (
  error: Error | ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof ZodError) {
    return res.status(400).json(
      errorResponse("Validation failed", {
        details: error.flatten()
      })
    );
  }

  const statusCode = "statusCode" in error && typeof error.statusCode === "number" ? error.statusCode : 500;
  const details = "details" in error ? error.details : undefined;

  return res.status(statusCode).json(errorResponse(error.message || "Internal server error", details));
};
