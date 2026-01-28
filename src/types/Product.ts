export type ProductStatus = 'active' | 'inactive';

export interface FinancialProduct {
  id: string;
  name: string;
  type: string;
  status: ProductStatus;
}
