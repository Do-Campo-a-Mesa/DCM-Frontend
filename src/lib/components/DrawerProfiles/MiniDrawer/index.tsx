import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Container } from '@mui/material';

interface MiniDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  forwardButton?: React.ReactNode;
}

const MiniDrawer: React.FC<MiniDrawerProps> = ({
  isOpen,
  onClose,
  forwardButton,
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
          {forwardButton && (
            <ListItem>
              <ListItemIcon>{forwardButton}</ListItemIcon>
            </ListItem>
          )}
          <ListItem key="dados-pessoais">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem key="pedidos">
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem key="enderecos">
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem key="cartoes">
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem key="lista-de-desejos">
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Container>
    </Drawer>
  );
};

export default MiniDrawer;
