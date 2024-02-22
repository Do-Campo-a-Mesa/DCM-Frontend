import { Grid } from '@mui/material';
import { Product } from '../../../interfaces/Product';
import CardProductsHome from '../Card/card';
import { useMediaQuery, useTheme } from '@mui/material';
interface Props {
  products: Product[];
}

const ProductsList: React.FC<Props> = ({ products }) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const renderProductCards = (products: Product[]) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let rowCount = 0;

    return products.map((product, index) => {
      if (isMediumScreen || index < 4 * 3) {
        if (!isMediumScreen && index % 3 === 0) {
          rowCount++;
        }
        return (
          <Grid key={product.id} item xs={12} sm={isMediumScreen ? 4 : 3}>
            <CardProductsHome product={product} />
          </Grid>
        );
      }
      return null;
    });
  };

  return (
    <Grid container spacing={3}>
      {renderProductCards(products)}
    </Grid>
  );
};

export default ProductsList;
