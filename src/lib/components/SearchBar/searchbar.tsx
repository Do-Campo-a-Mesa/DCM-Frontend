import { ChangeEvent } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useCustomStyles } from './style';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  const style = useCustomStyles();

  return (
    <TextField
      autoFocus={false}
      fullWidth
      placeholder="Busque o seu produto..."
      onChange={handleSearch}
      sx={style.textFieldStyle}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={style.inputStyle}>
            <IconButton>
              <SearchIcon sx={style.searchIconStyle} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
