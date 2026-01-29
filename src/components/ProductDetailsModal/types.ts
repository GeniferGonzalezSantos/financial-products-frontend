import type { FinancialProduct } from '@/types/Product';

export interface ProductDetailsModalProps {
  product: FinancialProduct | null;
  open: boolean;
  onClose: () => void;
}
