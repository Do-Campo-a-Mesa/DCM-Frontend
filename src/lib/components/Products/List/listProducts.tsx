import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { Product } from '../../../interfaces/Product';
import CardProductsHome from '../Card/card';
import { useMediaQuery } from '@mui/material';
import { useCustomStyles } from './style';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ResultsInfo from '../../../../screens/UserSearchProducts/Components/resultsInfo';
import React from 'react';

interface Props {
  products: Product[];
}

const ProductsList: React.FC<Props> = ({ products }) => {
  const style = useCustomStyles();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isMediumScreen = useMediaQuery(
    style.theme.breakpoints.between('sm', 'md')
  );
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };
  const renderProductCards = (products: Product[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    return currentProducts.map((product) => (
      <Grid key={product.id} item xs={12} sm={isMediumScreen ? 4 : 3}>
        <CardProductsHome product={product} />
      </Grid>
    ));
  };

  return (
    <Grid container spacing={3}>
      {!isHomePage && (
        <Grid container sx={{ pl: '24px', pt: 2 }}>
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            <ResultsInfo currentPage={0} itemsPerPage={0} totalItems={0} />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Typography>ordenar por:</Typography>
            <FormControl
              sx={{
                m: 1,
                minWidth: 120,
              }}
            >
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ backgroundColor: style.theme.customPalette.primary.main }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      )}

      {renderProductCards(products)}
      <Grid item xs={12} sx={style.gridButtonStyle}>
        {isHomePage && (
          <Link to={`/buscar`} style={{ textDecoration: 'none' }}>
            <Button sx={style.buttonStyle}>ver mais</Button>
          </Link>
        )}
        {!isHomePage && (
          <Pagination
            count={Math.ceil(products.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            sx={style.paginationStyle}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default ProductsList;
