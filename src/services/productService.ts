import productsData from '../mocks/products.json';
import type { FinancialProduct } from '../types/Product';

export const getProducts = async (): Promise<FinancialProduct[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return productsData.products as FinancialProduct[];
};
