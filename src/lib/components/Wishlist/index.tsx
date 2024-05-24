import React from 'react';
import { Container, Grid } from '@mui/material';
import { Product } from '../../interfaces/Product';
//import CardProductsHome from '../Products/Card/card';
import products from '../../../tests/mock/products/index.json';
import { useFavorites } from './favoritesContext';
import ProductsList from '../Products/List/listProducts';
const Wishlist: React.FC = () => {
  const { favorites } = useFavorites();
  const favoriteProducts: Product[] = products.filter((product: Product) =>
    favorites.includes(product.id)
  );
  return (
    <Container>
      <Grid item sm={12} md={12}>
        <ProductsList products={favoriteProducts} />
      </Grid>
    </Container>
  );
};

export default Wishlist;
