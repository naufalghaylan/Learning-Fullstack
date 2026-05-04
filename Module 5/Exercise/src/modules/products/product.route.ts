import { Router } from "express";

import { authenticate } from "../../middlewares/auth.middleware";
import { requireRole } from "../../middlewares/rbac.middleware";
import { validate } from "../../middlewares/validate.middleware";
import { productController } from "./product.controller";
import { createProductSchema } from "./product.schema";

export const productRouter = Router();

productRouter.get("/", (req, res, next) => {
  productController.list(req, res).catch(next);
});

productRouter.post("/", authenticate, requireRole("admin"), validate(createProductSchema), (req, res, next) => {
  productController.create(req, res).catch(next);
});
