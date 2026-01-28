import type { FinancialProduct } from '@/types/Product';

export interface ProductItemProps {
  product: FinancialProduct;
  onToggleStatus: (productId: string) => void;
}
