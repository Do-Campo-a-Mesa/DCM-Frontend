import { ChangeEvent } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useCustomStyles } from './style';
import debounce from 'lodash/debounce';
import { Link, useLocation } from 'react-router-dom';
interface SearchBarProps {
  onSearch: (term: string) => void;
  search_string: string;
  isHomePage?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  search_string,
  isHomePage,
}) => {
  const handleSearch = debounce((event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  }, 300);

  const style = useCustomStyles(isHomePage);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search');

  return (
    <TextField
      autoFocus={false}
      fullWidth
      placeholder={'Busque o seu produto...'}
      defaultValue={searchTerm ?? ''}
      onChange={handleSearch}
      sx={style.textFieldStyle}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={style.inputStyle}>
            <Link to={`/buscar?search=${search_string}`}>
              <IconButton>
                <SearchIcon sx={style.searchIconStyle} />
              </IconButton>
            </Link>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
