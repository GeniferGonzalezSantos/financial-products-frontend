import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import type { ProductDetailsModalProps } from './types';

export function ProductDetailsModal({
  product,
  open,
  onClose,
}: ProductDetailsModalProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Typography variant="body1">
            <strong>Tipo:</strong> {product.type}
          </Typography>

          <Typography variant="body1">
            <strong>Descrição:</strong> {product.description}
          </Typography>

          {product.interestRate !== undefined && (
            <Typography variant="body1">
              <strong>Taxa de juros:</strong> {product.interestRate}%
            </Typography>
          )}

          <Typography variant="body1">
            <strong>Criado em:</strong>{' '}
            {new Date(product.createdAt).toLocaleDateString()}
          </Typography>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
          variant="contained"
          disableRipple
          sx={{
            '&.Mui-focusVisible': {
              outline: '2px solid blue',
              backgroundColor: 'rgba(25, 118, 210, 0.9 )',
            },
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.9)',
            },
          }}
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
