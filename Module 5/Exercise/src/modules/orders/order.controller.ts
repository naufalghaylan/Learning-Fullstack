import { Request, Response } from "express";

import { ApiError } from "../../types/api";
import { successResponse } from "../../utils/api-response";
import { orderService } from "./order.service";

export class OrderController {
  async create(req: Request, res: Response) {
    if (!req.user) {
      throw new ApiError(401, "Authentication is required");
    }

    const order = await orderService.createOrder(req.body, req.user.userId);
    return res.status(201).json(successResponse("Order scaffold created", order));
  }
}

export const orderController = new OrderController();
