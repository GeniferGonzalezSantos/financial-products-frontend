import type { FinancialProduct } from '@/types/Product';
import { financialProductsMock } from '@/mocks/financialProducts.mock';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const productService = {
  async getProducts(): Promise<FinancialProduct[]> {
    await delay(1500);

    return financialProductsMock;
  },
};

// test retry
// export const productService = {
//   async getProducts() {
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     throw new Error('Erro forçado para testar retry');
//   },
// };
