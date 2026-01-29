import type { FinancialProduct } from '@/types/Product';

export interface ProductListProps {
  products: FinancialProduct[];
  onSelectProduct: (product: FinancialProduct) => void;
  onToggleStatus: (id: string) => void;
}
