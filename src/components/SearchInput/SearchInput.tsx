import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import type { SearchInputProps } from './types';

export function SearchInput({
  value,
  onChange,
  error = false,
  helperText,
}: SearchInputProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        my: 2,
      }}
    >
      <TextField
        type="search"
        label="Buscar produto"
        placeholder="Digite o nome do produto"
        sx={{
          m: 5,
          width: '50%',
          '& input::-webkit-search-decoration, & input::-webkit-search-cancel-button, & input::-webkit-search-results-button, & input::-webkit-search-results-decoration':
            {
              display: 'none',
            },
        }}
        value={value}
        error={error}
        helperText={helperText}
        onChange={(e) => onChange(e.target.value)}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon data-testid="search-icon" />
              </InputAdornment>
            ),
          },
          htmlInput: {
            'aria-label': 'Buscar produto pelo nome',
            'aria-invalid': error ? 'true' : 'false',
          },
          formHelperText: {
            role: 'alert',
            'aria-live': 'assertive',
          },
        }}
      />
    </Box>
  );
}
