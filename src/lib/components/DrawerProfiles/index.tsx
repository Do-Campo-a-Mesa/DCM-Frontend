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
import { Container } from '@mui/material';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  backButton?: React.ReactNode;
}

const DrawerProfile: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  backButton,
}) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          position: 'relative',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 0,
        },
      }}
    >
      <Container>
        <List>
          {backButton && (
            <ListItem>
              <ListItemIcon>{backButton}</ListItemIcon>
            </ListItem>
          )}
          <ListItem key="dados-pessoais">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Dados Pessoais" />
          </ListItem>
          <ListItem key="pedidos">
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Pedidos" />
          </ListItem>
          <ListItem key="enderecos">
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Endereços" />
          </ListItem>
          <ListItem key="cartoes">
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary="Cartões" />
          </ListItem>
          <ListItem key="lista-de-desejos">
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Lista de Desejos" />
          </ListItem>
        </List>
      </Container>
    </Drawer>
  );
};

export default DrawerProfile;
