import { Grid } from '@mui/material';
import { ProductItem } from '@/components/ProductItem/ProductItem';
import type { ProductListProps } from './types';

export function ProductList({
  products,
  onSelectProduct,
  onToggleStatus,
}: ProductListProps) {
  return (
    <Grid
      container
      spacing={{ xs: 1, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12 }}
    >
      {products.map((product) => (
        <Grid size={{ xs: 2, sm: 4, md: 4 }} key={product.id}>
          <ProductItem
            product={product}
            onSelect={onSelectProduct}
            onToggleStatus={onToggleStatus}
          />
        </Grid>
      ))}
    </Grid>
  );
}
