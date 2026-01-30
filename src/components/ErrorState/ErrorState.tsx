import { Box, Button, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import type { ErrorStateProps } from './type';

export function ErrorState({
  message = 'Algo deu errado. Tente novamente.',
  onRetry,
}: ErrorStateProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="200px"
      textAlign="center"
      role="alert"
    >
      <ErrorOutlineIcon color="error" fontSize="large" />

      <Typography mt={2} variant="body1">
        {message}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={onRetry}
        disableRipple
        sx={{
          mt: 2,
          '&.Mui-focusVisible': {
            outline: '2px solid blue',
            backgroundColor: 'rgba(25, 118, 210, 0.08)',
          },
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.08)',
          },
        }}
      >
        Tentar novamente
      </Button>
    </Box>
  );
}
