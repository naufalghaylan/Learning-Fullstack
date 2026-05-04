import { NextFunction, Request, Response } from "express";
import { ZodSchema, ZodTypeAny } from "zod";

type ValidationSchema = {
  body?: ZodSchema;
  params?: ZodSchema;
  query?: ZodSchema;
};

export const validate = (schema: ValidationSchema | ZodTypeAny) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      if ("safeParse" in schema) {
        req.body = schema.parse(req.body);
        return next();
      }

      if (schema.body) {
        req.body = schema.body.parse(req.body);
      }

      if (schema.params) {
        req.params = schema.params.parse(req.params) as Request["params"];
      }

      if (schema.query) {
        req.query = schema.query.parse(req.query) as Request["query"];
      }

      return next();
    } catch (error) {
      return next(error);
    }
  };
};
