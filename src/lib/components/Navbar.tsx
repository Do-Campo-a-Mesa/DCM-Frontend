import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
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
import Logo from '../../assets/logo.png';

const sections = ['Inicio', 'Sobre', 'Produtos', 'Parceiros', 'Depoimentos'];

const useroption = ['Login', 'Cadastro'];

function Navbar() {
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

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.customPalette.primary.background }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <img src={Logo} alt="Logo" style={{ height: '40px' }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: theme.customPalette.primary.main }}
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sections.map((section) => (
                <MenuItem key={section} onClick={handleCloseNavMenu}>
                  <Typography textAlign="left">{section}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sections.map((section) => (
              <Button
                key={section}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: theme.customPalette.primary.black,
                  display: 'block',
                }}
              >
                {section}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-haspopup="true"
              onClick={handleOpenNavUser}
              sx={{ color: theme.customPalette.primary.main }}
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
                <MenuItem key={useroptions} onClick={handleCloseNavUser}>
                  <Typography textAlign="center">{useroptions}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
