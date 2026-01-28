import { ProductItem } from '@/components/ProductItem/productItem';
import { useProducts } from '@/hooks/useProducts';
import { Grid } from '@mui/material';

export function ProductsPage() {
  const { products, toggleProductStatus } = useProducts();

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12 }}
    >
      {products.map((product) => (
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
          <ProductItem
            key={product.id}
            product={product}
            onToggleStatus={toggleProductStatus}
          />
        </Grid>
      ))}
    </Grid>
  );
}
