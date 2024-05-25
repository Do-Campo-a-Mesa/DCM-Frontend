import {
  Container,
  Grid,
  //IconButton,
  List,
  //ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import { useCustomStyles } from './style';
import SmallFooter from '../../lib/components/Footer/smallFooter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Navbar from '../../lib/components/Navbar/Navbar';
//import DrawerProfile from '../../lib/components/DrawerProfiles';
import { useState } from 'react';
//import ArrowNextIcon from '@mui/icons-material/ArrowForward';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//import MiniDrawer from '../../lib/components/DrawerProfiles/MiniDrawer';
import PersonalInfo from './components/personalData';
import PersonalAddress from './components/personalAddress';
import PersonalWishlist from './components/personalWishlist';
import PersonalCardsList from './components/PersonalCardsList';
export default function PersonalDataClient() {
  const style = useCustomStyles();

  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  const [showPersonalAddress, setShowPersonalAddress] = useState(false);
  const [showPersonalCards, setShowPersonalCards] = useState(false);
  const [showPersonalWishlist, setShowPersonalWishlist] = useState(false);
  const [selectedItem, setSelectedItem] = useState('dados-pessoais');
  /*const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isMiniDrawerOpen, setIsMiniDrawerOpen] = useState(false);
  const openDrawer = () => {
    setIsDrawerOpen(true);
    setIsMiniDrawerOpen(false);
  };

  const openMiniDrawer = () => {
    setIsDrawerOpen(false);
    setIsMiniDrawerOpen(true);
  };
  const [gridSize, setGridSize] = useState({ sm: 4, md: 4 });
  const [gridItemSize, setGridItemSize] = useState({ sm: 8, md: 8 });
  const toggleGridSize = () => {
    setGridSize((gridSize) => ({
      sm: gridSize.sm === 4 ? 3 : 4,
      md: gridSize.md === 4 ? 3 : 4,
    }));
  };
  const toggleGridItemSize = () => {
    setGridItemSize((gridItemSize) => ({
      sm: gridItemSize.sm === 8 ? 6 : 8,
      md: gridItemSize.md === 8 ? 6 : 8,
    }));
  };*/
  const handleItemClick = (key: string) => {
    setSelectedItem(key);
    if (key === 'dados-pessoais') {
      setShowPersonalInfo(true);
      setShowPersonalAddress(false);
      setShowPersonalCards(false);
      setShowPersonalWishlist(false);
    } else if (key === 'enderecos') {
      setShowPersonalInfo(false);
      setShowPersonalAddress(true);
      setShowPersonalCards(false);
      setShowPersonalWishlist(false);
    } else if (key === 'cartoes') {
      setShowPersonalInfo(false);
      setShowPersonalAddress(false);
      setShowPersonalCards(true);
      setShowPersonalWishlist(false);
    } else if (key === 'wishlist') {
      setShowPersonalInfo(false);
      setShowPersonalAddress(false);
      setShowPersonalCards(false);
      setShowPersonalWishlist(true);
    }
  };
  /*<Grid
            item
            xs={12}
            sm={gridItemSize.sm}
            md={gridItemSize.sm}
            sx={style.Item}
          >
            {isDrawerOpen && (
              <DrawerProfile
                isOpen={true}
                onClose={openMiniDrawer}
                onItemClick={handleItemClick}
                backButton={
                  <IconButton
                    onClick={() => {
                      openMiniDrawer();
                      toggleGridSize();
                      toggleGridItemSize();
                    }}
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                      position: 'absolute',
                      right: '0',
                      zIndex: '1',
                    }}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                }
              />
            )}
            {isMiniDrawerOpen && (
              <MiniDrawer
                isOpen={true}
                onClose={openDrawer}
                forwardButton={
                  <IconButton
                    onClick={() => {
                      openDrawer();
                      toggleGridSize();
                      toggleGridItemSize();
                    }}
                    color="inherit"
                    aria-label="menu"
                    sx={{ position: 'absolute', right: '0', zIndex: '1' }}
                  >
                    <ArrowNextIcon />
                  </IconButton>
                }
              />
            )}</Grid>*/
  return (
    <>
      <Navbar isHomePage={false} />
      <Grid container sx={style.Content}>
        <Grid container item xs={12} sm={12} md={3} sx={style.Content1}>
          <List sx={style.ListStyle}>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                typography: style.Theme.customTypography.h4,
                fontFamily: style.Theme.customTypography.fontFamily,
                pb: '1em',
              }}
            >
              Olá, User!
            </Typography>
            <ListItemButton
              onClick={() => handleItemClick('dados-pessoais')}
              selected={selectedItem === 'dados-pessoais'}
            >
              <ListItemIcon>
                <AccountCircleIcon
                  sx={{
                    color:
                      selectedItem === 'dados-pessoais'
                        ? style.Theme.customPalette.primary.yellow
                        : style.Theme.customPalette.primary.background,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color:
                    selectedItem === 'dados-pessoais'
                      ? style.Theme.customPalette.primary.yellow
                      : style.Theme.customPalette.primary.background,
                }}
                primary="Dados Pessoais"
              />
            </ListItemButton>
            <ListItemButton
              onClick={() => handleItemClick('pedidos')}
              selected={selectedItem === 'pedidos'}
            >
              <ListItemIcon>
                <ShoppingCartIcon
                  sx={{
                    color:
                      selectedItem === 'pedidos'
                        ? style.Theme.customPalette.primary.yellow
                        : style.Theme.customPalette.primary.background,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color:
                    selectedItem === 'pedidos'
                      ? style.Theme.customPalette.primary.yellow
                      : style.Theme.customPalette.primary.background,
                }}
                primary="Pedidos"
              />
            </ListItemButton>
            <ListItemButton
              onClick={() => handleItemClick('enderecos')}
              selected={selectedItem === 'enderecos'}
            >
              <ListItemIcon>
                <LocationOnIcon
                  sx={{
                    color:
                      selectedItem === 'enderecos'
                        ? style.Theme.customPalette.primary.yellow
                        : style.Theme.customPalette.primary.background,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color:
                    selectedItem === 'enderecos'
                      ? style.Theme.customPalette.primary.yellow
                      : style.Theme.customPalette.primary.background,
                }}
                primary="Endereços"
              />
            </ListItemButton>
            <ListItemButton
              onClick={() => handleItemClick('cartoes')}
              selected={selectedItem === 'cartoes'}
            >
              <ListItemIcon>
                <CreditCardIcon
                  sx={{
                    color:
                      selectedItem === 'cartoes'
                        ? style.Theme.customPalette.primary.yellow
                        : style.Theme.customPalette.primary.background,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color:
                    selectedItem === 'cartoes'
                      ? style.Theme.customPalette.primary.yellow
                      : style.Theme.customPalette.primary.background,
                }}
                primary="Cartões"
              />
            </ListItemButton>
            <ListItemButton
              onClick={() => handleItemClick('wishlist')}
              selected={selectedItem === 'wishlist'}
            >
              <ListItemIcon>
                <FavoriteIcon
                  sx={{
                    color:
                      selectedItem === 'wishlist'
                        ? style.Theme.customPalette.primary.yellow
                        : style.Theme.customPalette.primary.background,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color:
                    selectedItem === 'wishlist'
                      ? style.Theme.customPalette.primary.yellow
                      : style.Theme.customPalette.primary.background,
                }}
                primary="Lista de Desejos"
              />
            </ListItemButton>
          </List>
        </Grid>
        {showPersonalInfo && (
          <Grid container item xs={12} sm={12} md={9} sx={style.ContainerStyle}>
            <PersonalInfo />
          </Grid>
        )}
        {showPersonalAddress && (
          <Grid container item xs={12} sm={12} md={9} sx={style.ContainerStyle}>
            <PersonalAddress />
          </Grid>
        )}
        {showPersonalCards && (
          <Grid container item xs={12} sm={12} md={9} sx={style.ContainerStyle}>
            <PersonalCardsList />
          </Grid>
        )}
        {showPersonalWishlist && (
          <Grid container item xs={12} sm={12} md={9} sx={style.ContainerStyle}>
            <PersonalWishlist />
          </Grid>
        )}
      </Grid>
      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
}
