import { Router } from "express";

import { authRouter } from "../modules/auth/auth.route";
import { financeRouter } from "../modules/finance/finance.route";
import { orderRouter } from "../modules/orders/order.route";
import { productRouter } from "../modules/products/product.route";
import { successResponse } from "../utils/api-response";

export const apiRouter = Router();

apiRouter.get("/health", (_req, res) => {
  return res.status(200).json(
    successResponse("Mini Grocery API is healthy", {
      uptime: process.uptime()
    })
  );
});

apiRouter.use("/auth", authRouter);
apiRouter.use("/products", productRouter);
apiRouter.use("/orders", orderRouter);
apiRouter.use("/finance", financeRouter);
