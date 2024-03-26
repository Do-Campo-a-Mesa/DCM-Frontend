import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Slider, Typography } from '@mui/material';
import { Product } from '../../interfaces/Product';
import { formatProductPrice } from '../../../utils';
import { useCustomStyles } from './style';

interface Props {
  products: Product[];
  onFilterChange: (priceRange: number[]) => void;
}

const PriceSearchCard: React.FC<Props> = ({ products, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100);

  useEffect(() => {
    if (products.length > 0) {
      const prices = products.map((product) => product.price);
      const initialMinPrice = Math.min(...prices);
      const initialMaxPrice = Math.max(...prices);
      setMinPrice(initialMinPrice);
      setMaxPrice(initialMaxPrice);
      setPriceRange([initialMinPrice, initialMaxPrice]);
    }
  }, []);

  const handlePriceRangeChange = (
    _event: Event,
    newValue: number | number[]
  ) => {
    setPriceRange(newValue as number[]);
  };

  const handleFilterChange = () => {
    onFilterChange(priceRange);
  };
  const style = useCustomStyles();
  return (
    <Card sx={style.cardStyle}>
      <CardContent>
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Typography id="price-range-slider" gutterBottom>
              min
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Typography id="price-range-slider" gutterBottom>
              máx
            </Typography>
          </Grid>
        </Grid>

        <Slider
          value={priceRange}
          onChange={handlePriceRangeChange}
          valueLabelDisplay="auto"
          aria-labelledby="price-range-slider"
          min={minPrice}
          max={maxPrice}
          onChangeCommitted={handleFilterChange}
          sx={style.sliderStyle}
        />
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Typography id="price-range-slider" gutterBottom>
              {formatProductPrice(minPrice)}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Typography id="price-range-slider" gutterBottom>
              {formatProductPrice(maxPrice)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PriceSearchCard;
