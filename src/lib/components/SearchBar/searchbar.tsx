import { ChangeEvent } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';
import { useTheme } from '@mui/material/styles';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  const theme = useTheme();
  return (
    <TextField
      autoFocus={false}
      fullWidth
      placeholder="Busque o seu produto..."
      onChange={handleSearch}
      sx={{
        '& .MuiInputBase-root': {
          backgroundColor: 'rgba(229, 255, 233, 0.1)',
          borderRadius: '20px',
          borderColor: theme.customPalette.primary.main,
          color: theme.customPalette.primary.background,
          typography: theme.customTypography.h7,
          fontFamily: theme.customTypography.fontFamily,
          '&:hover fieldset': {
            borderColor: theme.customPalette.secondary.main,
          },
          '& fieldset': {
            border: '2px solid',
            borderColor: theme.customPalette.primary.main,
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.customPalette.secondary.main,
          },
        },
        '& .MuiInputBase-input': {
          '&::placeholder': {
            opacity: 1,
            color: theme.customPalette.neutral.inactive,
            typography: theme.customTypography.h7,
          },
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            sx={{
              '& .MuiButtonBase-root': {
                border: '2px solid',
                borderColor: theme.customPalette.primary.main,
                backgroundColor: theme.customPalette.primary.main,
                '&:hover': {
                  backgroundColor: theme.customPalette.secondary.main,
                },
              },
            }}
          >
            <IconButton>
              <SearchIcon
                sx={{
                  color: theme.customPalette.primary.background,
                  '&hover': {
                    color: theme.customPalette.primary.background,
                  },
                }}
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
