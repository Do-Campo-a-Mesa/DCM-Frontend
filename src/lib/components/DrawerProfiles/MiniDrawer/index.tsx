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
import { Container, Typography } from '@mui/material';
import { useCustomStyles } from './style';
import { Link } from 'react-router-dom';

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
  const style = useCustomStyles();
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      onClose={onClose}
      sx={style.MiniDrawerProfile}
    >
      <Container>
        <List>
          {forwardButton && (
            <ListItem>
              <ListItemIcon sx={{ pb: '2em' }}>{forwardButton}</ListItemIcon>
            </ListItem>
          )}
          <Typography>Olá, User!</Typography>

          <ListItem key="dados-pessoais">
            <ListItemIcon>
              <Link
                to="/dados-pessoais"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <AccountCircleIcon />
              </Link>
            </ListItemIcon>
          </ListItem>

          <ListItem key="pedidos">
            <ListItemIcon>
              <Link
                to="/pedidos"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ShoppingCartIcon />
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem key="enderecos">
            <ListItemIcon>
              <Link
                to="/enderecos"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <LocationOnIcon />
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem key="cartoes">
            <ListItemIcon>
              <Link
                to="/cartoes"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <CreditCardIcon />
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem key="lista-de-desejos">
            <ListItemIcon>
              <Link
                to="/lista-de-desejos"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <FavoriteIcon />
              </Link>
            </ListItemIcon>
          </ListItem>
        </List>
      </Container>
    </Drawer>
  );
};

export default MiniDrawer;
