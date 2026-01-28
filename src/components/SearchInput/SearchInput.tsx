import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import type { SearchInputProps } from './types';

export function SearchInput({ value, onChange }: SearchInputProps) {
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
        sx={{ m: 5, width: '50%' }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          },
          htmlInput: {
            'aria-label': 'Buscar produto pelo nome',
          },
        }}
      />
    </Box>
  );
}
