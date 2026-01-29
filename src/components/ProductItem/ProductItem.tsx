import {
  Card,
  CardContent,
  Typography,
  Chip,
  Switch,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import type { ProductItemProps } from './type';

export function ProductItem({
  product,
  onToggleStatus,
  onSelect,
}: ProductItemProps) {
  const isActive = product.status === 'active';

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexDirection: 'row-reverse',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              mt: 1,
              flexDirection: 'column',
            }}
          >
            <Chip
              label={isActive ? 'Ativo' : 'Inativo'}
              color={isActive ? 'warning' : 'default'}
              size="small"
            />

            <Switch
              checked={isActive}
              onChange={() => onToggleStatus(product.id)}
              color="warning"
            />
          </Box>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body1" color="text.secondary">
              {product.type}
            </Typography>
            <CardActions>
              <Button
                size="small"
                color="primary"
                sx={{ marginLeft: -1 }}
                onClick={() => onSelect(product)}
              >
                Saiba Mais
              </Button>
            </CardActions>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
