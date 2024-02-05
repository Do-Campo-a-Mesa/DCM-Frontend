import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import background from '../lib/theme';
import { useTheme } from '@mui/system';

const sections = ['Inicio', 'Sobre', 'Produtos', 'Parceiros', 'Depoimentos', 'Login', 'Cadastro'];

function ResponsiveAppBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.}}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;
