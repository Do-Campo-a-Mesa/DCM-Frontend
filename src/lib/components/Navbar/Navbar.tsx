import React from 'react';
import {
  AppBar,
  Toolbar,
  MenuItem,
  IconButton,
  Box,
  Menu,
  Container,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { useCustomStyles } from './style';
import Logo from '../../../assets/logo.png';
import './styles.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { sections, user_no_login_options } from './items';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/searchbar';

interface Props {
  isHomePage: boolean;
}

const Navbar: React.FC<Props> = ({ isHomePage }) => {
  // Acessa o estado do usuário
  const user = useSelector((state: RootState) => state.user);

  // Verifica se o usuário está logado
  const isLoggedIn = !!user.id;

  const style = useCustomStyles();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavUser = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavUser = () => {
    setAnchorElUser(null);
  };

  const [searchProduct, setSearchProduct] = React.useState<string>('');

  const handleSearch = (term: string) => {
    setSearchProduct(term);
  };

  return (
    <AppBar position="static" sx={style.appBarStyle}>
      <Container sx={isHomePage ? { maxWidth: 'lg' } : style.containerStyle}>
        <Toolbar>
          {!isHomePage ? (
            <Link to="/">
              <img src={Logo} className="LogoNav" alt="Logo" />
            </Link>
          ) : (
            <img src={Logo} className="LogoNav" alt="Logo" />
          )}
          {isHomePage ? (
            <>
              <Box sx={style.boxStyle1}>
                <IconButton
                  size="large"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={style.iconButtonStyle}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={style.menuStyle}
                >
                  {sections.map((section) => (
                    <MenuItem
                      key={section.label}
                      onClick={handleCloseNavMenu}
                      sx={style.menuItemStyle}
                    >
                      {section.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={style.boxStyle2}>
                {sections.map((section) => (
                  <Link to={section.path} key={section.path}>
                    <Button
                      disableRipple
                      onClick={handleCloseNavMenu}
                      sx={style.buttonStyle}
                    >
                      {section.label}
                    </Button>
                  </Link>
                ))}
              </Box>
            </>
          ) : (
            <SearchBar onSearch={handleSearch} search_string={searchProduct} />
          )}
          {!isLoggedIn ? (
            <>
              <Box sx={style.boxStyle3}>
                <IconButton
                  size="large"
                  aria-haspopup="true"
                  onClick={handleOpenNavUser}
                  sx={style.iconButtonStyle}
                >
                  <PersonIcon />
                </IconButton>

                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseNavUser}
                >
                  {user_no_login_options.map((user_option) => (
                    <MenuItem
                      key={user_option.label}
                      onClick={handleCloseNavUser}
                      sx={style.menuItemStyle}
                    >
                      {user_option.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={style.boxStyle4}>
                {user_no_login_options.map((user_option) => (
                  <Button
                    key={user_option.label}
                    onClick={handleCloseNavMenu}
                    sx={style.buttonStyle}
                  >
                    {user_option.label}
                  </Button>
                ))}
              </Box>
            </>
          ) : (
            <></>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
