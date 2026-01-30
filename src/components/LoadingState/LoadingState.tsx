import { Box, CircularProgress, Typography } from '@mui/material';
import type { LoadingStateProps } from './types';

export function LoadingState({ message }: LoadingStateProps) {
  return (
    <Box
      role="alert"
      aria-busy="true"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="200px"
    >
      <CircularProgress color="warning" aria-hidden="true" />

      <Typography mt={2} variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
}
