export class OrderService {
  async createOrder(input: { productId: string; quantity: number }, userId: string) {
    return {
      orderBy: userId,
      ...input,
      message: "Order scaffold is ready"
    };
  }
}

export const orderService = new OrderService();
