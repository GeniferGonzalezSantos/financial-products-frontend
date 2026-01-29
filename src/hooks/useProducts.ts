import { useState } from 'react';
import type { FinancialProduct } from '@/types/Product';
import { financialProductsMock } from '@/mocks/financialProducts.mock';

type RequestStatus = 'idle' | 'loading' | 'success' | 'error';


export function useProducts() {
  const [products, setProducts] = useState<FinancialProduct[]>(financialProductsMock);
  const [status, setStatus] = useState<RequestStatus>('idle');


  const toggleProductStatus = async (productId: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? {
              ...product,
              status: product.status === 'active' ? 'inactive' : 'active',
            }
          : product,
      ),
    );
  };

  return {
    products,
    toggleProductStatus,
  };
}
