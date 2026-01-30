import { Button, Stack, Modal, Box, Typography, Divider } from '@mui/material';
import type { ProductDetailsModalProps } from './types';

export function ProductDetailsModal({
  product,
  open,
  onClose,
}: ProductDetailsModalProps) {
  if (!product) return null;

  const descriptionId = 'product-details-description';

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-describedby={descriptionId}
      aria-labelledby="product-details-title"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          borderRadius: 4,
          width: '100%',
          maxWidth: 520,
          boxShadow: 24,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Conteúdo */}
        <Box sx={{ p: 3 }}>
          <Stack spacing={2} id={descriptionId}>
            <Typography
              id="product-details-title"
              variant="h6"
              fontWeight={600}
              letterSpacing={0.2}
            >
              {product.name}
            </Typography>

            <Divider />

            <Typography variant="body1" color="text.secondary">
              <strong>Tipo:</strong> {product.type}
            </Typography>

            <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
              <strong>Descrição:</strong> {product.description}
            </Typography>

            {product.interestRate !== undefined && (
              <Typography variant="body1" color="text.secondary">
                <strong>Taxa de juros:</strong> {product.interestRate}%
              </Typography>
            )}

            <Typography variant="body1" color="text.secondary">
              <strong>Criado em:</strong>{' '}
              {new Date(product.createdAt).toLocaleDateString()}
            </Typography>
          </Stack>
        </Box>

        <Box
          sx={{
            px: 3,
            py: 2,
            display: 'flex',
            justifyContent: 'flex-end',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Button
            onClick={onClose}
            autoFocus
            variant="contained"
            disableRipple
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              '&.Mui-focusVisible': {
                outline: '2px solid',
                outlineColor: 'primary.main',
                outlineOffset: 2,
              },
            }}
          >
            Fechar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
