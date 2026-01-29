import { ProductList } from '@/components/ProductList/ProductList';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import type { FinancialProduct } from '@/types/Product';
import { Box } from '@mui/material';
import { useMemo, useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { ProductDetailsModal } from '@/components/ProductDetailsModal/ProductDetailsModal';

export function ProductsPage() {
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] =
    useState<FinancialProduct | null>(null);

  const { products, toggleProductStatus } = useProducts();

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  const hasError = search.length > 0 && filteredProducts.length === 0;

  return (
    <Box>
      <SearchInput
        value={search}
        onChange={setSearch}
        error={hasError}
        helperText={hasError ? 'Nenhum produto encontrado' : undefined}
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
