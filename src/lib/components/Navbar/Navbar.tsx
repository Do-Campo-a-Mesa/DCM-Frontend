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

const sections = ['Inicio', 'Sobre', 'Produtos', 'Parceiros', 'Depoimentos'];

const useroption = ['Login', 'Cadastro'];

export default function Navbar() {
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

  return (
    <AppBar position="static" sx={style.appBarStyle}>
      <Container maxWidth="lg">
        <Toolbar>
          <img src={Logo} className="LogoNav" alt="Logo" />
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
                  key={section}
                  onClick={handleCloseNavMenu}
                  sx={style.menuItemStyle}
                >
                  {section}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={style.boxStyle2}>
            {sections.map((section) => (
              <Button
                disableRipple
                key={section}
                onClick={handleCloseNavMenu}
                sx={style.buttonStyle}
              >
                {section}
              </Button>
            ))}
          </Box>

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
              {useroption.map((useroptions) => (
                <MenuItem
                  key={useroptions}
                  onClick={handleCloseNavUser}
                  sx={style.menuItemStyle}
                >
                  {useroptions}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={style.boxStyle4}>
            {useroption.map((useroptions) => (
              <Button
                key={useroptions}
                onClick={handleCloseNavMenu}
                sx={style.buttonStyle}
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
