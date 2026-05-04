import { Router } from "express";

import { authenticate } from "../../middlewares/auth.middleware";
import { requireAnyRole } from "../../middlewares/rbac.middleware";
import { validate } from "../../middlewares/validate.middleware";
import { orderController } from "./order.controller";
import { createOrderSchema } from "./order.schema";

export const orderRouter = Router();

orderRouter.post("/", authenticate, requireAnyRole("visitor", "admin"), validate(createOrderSchema), (req, res, next) => {
  orderController.create(req, res).catch(next);
});
