import { Request, Response } from "express";

import { successResponse } from "../../utils/api-response";
import { productService } from "./product.service";

export class ProductController {
  async list(req: Request, res: Response) {
    const products = await productService.listProducts();
    return res.status(200).json(successResponse("Products endpoint scaffold is ready", products));
  }

  async create(req: Request, res: Response) {
    const product = await productService.createProduct(req.body);
    return res.status(201).json(successResponse("Product scaffold created", product));
  }
}

export const productController = new ProductController();
