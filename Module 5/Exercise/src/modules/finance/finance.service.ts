export class FinanceService {
  async getHistory() {
    return {
      revenue: 0,
      transactions: []
    };
  }
}

export const financeService = new FinanceService();
