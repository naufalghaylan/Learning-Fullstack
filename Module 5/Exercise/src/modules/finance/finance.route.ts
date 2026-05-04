import { Router } from "express";

import { authenticate } from "../../middlewares/auth.middleware";
import { requireRole } from "../../middlewares/rbac.middleware";
import { financeController } from "./finance.controller";

export const financeRouter = Router();

financeRouter.get("/", authenticate, requireRole("admin"), (req, res, next) => {
  financeController.history(req, res).catch(next);
});
