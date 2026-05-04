import { ApiErrorResponse, ApiSuccessResponse } from "../types/api";

export const successResponse = <T>(message: string, data?: T): ApiSuccessResponse<T> => ({
  success: true,
  message,
  data
});

export const errorResponse = (message: string, details?: unknown): ApiErrorResponse => ({
  success: false,
  message,
  details
});
