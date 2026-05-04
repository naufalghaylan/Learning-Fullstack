import { supabase } from "../../config/supabase";

export class ProductService {
  async listProducts() {
    return {
      source: "supabase",
      connected: Boolean(supabase)
    };
  }

  async createProduct(input: { name: string; price: number; stock: number }) {
    return {
      ...input,
      message: "Product creation scaffold is ready"
    };
  }
}

export const productService = new ProductService();
