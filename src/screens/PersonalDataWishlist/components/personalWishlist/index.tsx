import { useCustomStyles } from './style';
import React from 'react';
import { Typography } from '@mui/material';
import Wishlist from '../../../../lib/components/Wishlist';
import { FavoritesProvider } from '../../../../lib/components/Wishlist/favoritesContext';

const PersonalWishlist: React.FC = () => {
  const style = useCustomStyles();

  return (
    <div>
      <FavoritesProvider>
        <Typography variant="h5" gutterBottom sx={style.Title}>
          LISTA DE DESEJOS
        </Typography>
        <Wishlist />
      </FavoritesProvider>
    </div>
  );
};
export default PersonalWishlist;
