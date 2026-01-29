import { useState } from 'react';
import type { FinancialProduct } from '@/types/Product';
import { productService } from '@/services/productService';

type RequestStatus = 'idle' | 'loading' | 'success' | 'error';

export function useProducts() {
  const [products, setProducts] = useState<FinancialProduct[]>([]);
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setStatus('loading');
      setError(null);

      const data = await productService.getProducts();
      setProducts(data);

      setStatus('success');
    } catch {
      setError('Não foi possível carregar os produtos.');
      setStatus('error');
    }
  };

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
    status,
    error,
    fetchProducts,
    toggleProductStatus,
  };
}
