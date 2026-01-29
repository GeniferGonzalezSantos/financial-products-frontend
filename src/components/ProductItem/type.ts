import type { FinancialProduct } from '@/types/Product';
export interface ProductItemProps {
  product: FinancialProduct;
  onSelect: (product: FinancialProduct) => void;
  onToggleStatus: (productId: string) => void;
}
