import { useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';

import { useProducts } from '@/hooks/useProducts';
import { ProductList } from '@/components/ProductList/ProductList';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { ProductDetailsModal } from '@/components/ProductDetailsModal/ProductDetailsModal';
import { LoadingState } from '@/components/LoadingState/LoadingState';
import { ErrorState } from '@/components/ErrorState/ErrorState';

import type { FinancialProduct } from '@/types/Product';

export function ProductsPage() {
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] =
    useState<FinancialProduct | null>(null);

  const { products, status, error, fetchProducts, toggleProductStatus } =
    useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  const hasSearchError = search.length > 0 && filteredProducts.length === 0;

  if (status === 'loading') {
    return <LoadingState message="Carregando produtos..." />;
  }

  if (status === 'error') {
    return <ErrorState message={error ?? undefined} onRetry={fetchProducts} />;
  }

  return (
    <Box>
      <SearchInput
        value={search}
        onChange={setSearch}
        error={hasSearchError}
        helperText={hasSearchError ? 'Nenhum produto encontrado' : undefined}
      />

      <ProductList
        products={filteredProducts}
        onSelectProduct={setSelectedProduct}
        onToggleStatus={toggleProductStatus}
      />

      <ProductDetailsModal
        product={selectedProduct}
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </Box>
  );
}
