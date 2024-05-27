import React from 'react';
import { Grid, Container } from '@mui/material';
import { useCustomStyles } from './style';
import SideMenu from '../../../../lib/components/SideMenu';
import Navbar from '../../../../lib/components/Navbar/Navbar';
import SmallFooter from '../../../../lib/components/Footer/smallFooter';
import SpecificOrder from './components';
const SpecificOrderPage: React.FC = () => {
  const style = useCustomStyles();
  return (
    <div>
      <Navbar isHomePage={false} />
      <Grid container sx={style.Content}>
        <SideMenu />
        <Grid container item xs={12} sm={12} md={9} sx={style.ContainerStyle}>
          <SpecificOrder />
        </Grid>
      </Grid>
      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </div>
  );
};

export default SpecificOrderPage;
