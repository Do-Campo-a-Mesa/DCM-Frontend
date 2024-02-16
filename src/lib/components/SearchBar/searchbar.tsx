import { ChangeEvent } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  const theme = useTheme();

  const textFieldStyle = {
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
  };

  const InputStyle = {
    '& .MuiButtonBase-root': {
      border: '2px solid',
      borderColor: theme.customPalette.primary.main,
      backgroundColor: theme.customPalette.primary.main,
      '&:hover': {
        backgroundColor: theme.customPalette.secondary.main,
      },
    },
  };

  const SearchIconStyle = {
    color: theme.customPalette.primary.background,
    '&hover': {
      color: theme.customPalette.primary.background,
    },
  };

  return (
    <TextField
      autoFocus={false}
      fullWidth
      placeholder="Busque o seu produto..."
      onChange={handleSearch}
      sx={textFieldStyle}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={InputStyle}>
            <IconButton>
              <SearchIcon sx={SearchIconStyle} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
