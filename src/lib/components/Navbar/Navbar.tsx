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
import { useTheme } from '@mui/material/styles';
import Logo from '../../../assets/logo.png';
import './styles.css';

const sections = ['Inicio', 'Sobre', 'Produtos', 'Parceiros', 'Depoimentos'];

const useroption = ['Login', 'Cadastro'];

export default function Navbar() {
  const theme = useTheme();
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

  const AppBarStyle = {
    backgroundColor: theme.customPalette.primary.background,
  };

  const BoxStyle1 = {
    flexGrow: 1,
    display: { xs: 'flex', sm: 'flex', md: 'none' },
    ml: 2,
  };

  const BoxStyle2 = {
    flexGrow: 1,
    display: { xs: 'none', sm: 'none', md: 'flex' },
    ml: 3,
  };
  const BoxStyle3 = {
    flexGrow: 0,
    display: { xs: 'flex', sm: 'flex', md: 'none' },
    justifyContent: 'flex-end',
  };
  const BoxStyle4 = {
    flexGrow: 1,
    display: { xs: 'none', sm: 'none', md: 'flex' },
    justifyContent: 'flex-end',
  };
  const IconButtonStyle = {
    color: theme.customPalette.primary.main,
  };
  const ButtonStyle = {
    my: 2,
    color: theme.customPalette.primary.black,

    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h8,
    '&:hover': {
      color: theme.customPalette.primary.main,
    },
  };
  const MenuStyle = {
    display: { xs: 'block', md: 'none' },
  };
  const MenuItemStyle = {
    '&:hover': {
      color: theme.customPalette.primary.main,
    },
    justifyContent: 'flex-start',
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h8,
  };

  return (
    <AppBar position="static" sx={AppBarStyle}>
      <Container maxWidth="lg">
        <Toolbar>
          <img src={Logo} id="Logo" alt="Logo" />
          <Box sx={BoxStyle1}>
            <IconButton
              size="large"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={IconButtonStyle}
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
              sx={MenuStyle}
            >
              {sections.map((section) => (
                <MenuItem
                  key={section}
                  onClick={handleCloseNavMenu}
                  sx={MenuItemStyle}
                >
                  {section}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={BoxStyle2}>
            {sections.map((section) => (
              <Button
                disableRipple
                key={section}
                onClick={handleCloseNavMenu}
                sx={ButtonStyle}
              >
                {section}
              </Button>
            ))}
          </Box>

          <Box sx={BoxStyle3}>
            <IconButton
              size="large"
              aria-haspopup="true"
              onClick={handleOpenNavUser}
              sx={IconButtonStyle}
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
              {useroption.map((useroptions) => (
                <MenuItem
                  key={useroptions}
                  onClick={handleCloseNavUser}
                  sx={MenuItemStyle}
                >
                  {useroptions}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={BoxStyle4}>
            {useroption.map((useroptions) => (
              <Button
                key={useroptions}
                onClick={handleCloseNavMenu}
                sx={ButtonStyle}
              >
                {useroptions}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
