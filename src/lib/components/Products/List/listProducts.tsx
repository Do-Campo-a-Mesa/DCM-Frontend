import { Grid } from '@mui/material';
import { Product } from '../../../interfaces/Product';
import CardProductsHome from '../Card/card';

interface Props {
  products: Product[];
}

const ProductsList: React.FC<Props> = ({ products }) => {
  const renderProductCards = (products: Product[]) => {
    return products.map((product) => (
      <Grid key={product.id} item xs={12} sm={3}>
        <CardProductsHome product={product} />
      </Grid>
    ));
  };

  return (
    <Grid container spacing={3}>
      {renderProductCards(products)}
    </Grid>
  );
};

export default ProductsList;
