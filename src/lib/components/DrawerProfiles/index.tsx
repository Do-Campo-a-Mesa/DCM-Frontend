import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Container, ListItemButton, Typography } from '@mui/material';
import { useCustomStyles } from './style';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  backButton?: React.ReactNode;
  onItemClick?: (key: string) => void;
}

const DrawerProfile: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  backButton,
  onItemClick,
}) => {
  const handleItemClick = (key: string) => {
    if (onItemClick) {
      onItemClick(key);
    }
  };
  const style = useCustomStyles();
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      onClose={onClose}
      sx={style.DrawerProfile}
    >
      <Container>
        <List>
          {backButton && (
            <ListItem>
              <ListItemIcon sx={{ pb: '2em' }}>{backButton}</ListItemIcon>
            </ListItem>
          )}
          <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
            Olá, User!
          </Typography>
          <ListItemButton onClick={() => handleItemClick('dados-pessoais')}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Dados Pessoais" />
          </ListItemButton>
          <ListItemButton onClick={() => handleItemClick('pedidos')}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Pedidos" />
          </ListItemButton>
          <ListItemButton onClick={() => handleItemClick('enderecos')}>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Endereços" />
          </ListItemButton>
          <ListItemButton onClick={() => handleItemClick('cartoes')}>
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary="Cartões" />
          </ListItemButton>
          <ListItemButton onClick={() => handleItemClick('lista-de-desejos')}>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Lista de Desejos" />
          </ListItemButton>
        </List>
      </Container>
    </Drawer>
  );
};

export default DrawerProfile;
