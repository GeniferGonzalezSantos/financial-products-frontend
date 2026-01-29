import { Box, CircularProgress, Typography } from '@mui/material';
import type { LoadingStateProps } from './types';

export function LoadingState({ message = 'Carregando...' }: LoadingStateProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="200px"
      aria-busy="true"
    >
      <CircularProgress color='warning'/>
      <Typography mt={2} variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
}
