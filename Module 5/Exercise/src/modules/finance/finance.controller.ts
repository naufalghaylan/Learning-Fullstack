import { Request, Response } from "express";

import { successResponse } from "../../utils/api-response";
import { financeService } from "./finance.service";

export class FinanceController {
  async history(_req: Request, res: Response) {
    const history = await financeService.getHistory();
    return res.status(200).json(successResponse("Financial history scaffold is ready", history));
  }
}

export const financeController = new FinanceController();
