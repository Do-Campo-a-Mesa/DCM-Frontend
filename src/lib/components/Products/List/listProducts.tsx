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

import React from 'react';
import ResultsInfo from '../../../../screens/UserSearchProducts/Components/searchInfo/resultsInfo';

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
  const [itemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };
  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };
  const renderProductCards = (products: Product[]) => {
    const sortedProducts = [...products];

    if (sortBy === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'ascRating') {
      sortedProducts.sort((a, b) => {
        const ratingA = a.review !== undefined ? a.review : 0;
        const ratingB = b.review !== undefined ? b.review : 0;
        return ratingA - ratingB;
      });
    } else if (sortBy === 'descRating') {
      sortedProducts.sort((a, b) => {
        const ratingA = a.review !== undefined ? a.review : 0;
        const ratingB = b.review !== undefined ? b.review : 0;
        return ratingB - ratingA;
      });
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = sortedProducts.slice(startIndex, endIndex);

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
          <Grid item xs={12} sm={6} sx={style.resultsStyle}>
            <ResultsInfo
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={products.length}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={style.orderStyle}>
            <Typography sx={style.sortFontStyle}>ordenar por:</Typography>
            <FormControl
              sx={{
                m: 1,
                minWidth: 120,
              }}
              size="small"
            >
              <Select
                value={sortBy}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={style.selectStyle}
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: style.theme.customPalette.primary.main,
                      color: style.theme.customPalette.primary.background,
                      borderRadius: '15px',
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Nenhum</em>
                </MenuItem>
                <MenuItem value="asc">Preço (crescente)</MenuItem>
                <MenuItem value="desc">Preço (decrescente)</MenuItem>
                <MenuItem value="ascRating">Avaliação (crescente)</MenuItem>
                <MenuItem value="descRating">Avaliação (decrescente)</MenuItem>
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
            sx={style.paginationStyle}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default ProductsList;
