import { ProductList } from '@/components/ProductList/ProductList';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import type { FinancialProduct } from '@/types/Product';
import { Box } from '@mui/material';
import { useMemo, useState } from 'react';
import { useProducts } from '@/hooks/useProducts';

export function ProductsPage() {
  const [search, setSearch] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedProduct, setSelectedProduct] =
    useState<FinancialProduct | null>(null);

  const { products, toggleProductStatus } = useProducts();

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  return (
    <Box>
      <SearchInput value={search} onChange={setSearch} />

      <ProductList
        products={filteredProducts}
        onSelectProduct={setSelectedProduct}
        onToggleStatus={toggleProductStatus}
      />
    </Box>
  );
}
