import {
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import { useCustomStyles } from './style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
interface SideMenuProps {
  selectedItem: string;
  handleItemClick: (key: string) => void;
}

export default function SideMenu({
  selectedItem,
  handleItemClick,
}: SideMenuProps) {
  const style = useCustomStyles();

  return (
    <>
      <Grid container item xs={12} sm={12} md={3} sx={style.Content}>
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
    </>
  );
}
