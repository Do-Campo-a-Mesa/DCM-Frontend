import { useCustomStyles } from './style';
import { Container } from '@mui/material';
import Navbar from '../../lib/components/Navbar/Navbar';

import React from 'react';
import BigFooter from '../../lib/components/Footer/bigFooter';

const SingleProduct: React.FC = () => {
  const style = useCustomStyles();

  return (
    <>
      <Navbar isHomePage={false} />
      <Container sx={style.ContainerStyle}></Container>
      <Container>
        <BigFooter />
      </Container>
    </>
  );
};

export default SingleProduct;
