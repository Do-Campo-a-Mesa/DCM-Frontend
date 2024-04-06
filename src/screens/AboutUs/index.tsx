import { useCustomStyles } from './style';
import { Container, Typography, Grid } from '@mui/material';
import Navbar from '../../lib/components/Navbar/Navbar';
import React from 'react';
import BigFooter from '../../lib/components/Footer/bigFooter';
import SmallFooter from '../../lib/components/Footer/smallFooter';
import about from '../../assets/aboutus_img.png';
const AboutUs: React.FC = () => {
  const style = useCustomStyles();

  return (
    <>
      <Navbar isHomePage={true} />
      <Container sx={style.ContainerStyle}>
        <Grid
          container
          maxWidth={'lg'}
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="center"
          paddingLeft="3em"
          paddingRight="3em"
        >
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h1"
              component="div"
              className="text-overlay"
              sx={style.Title}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={style.GridImgStyle}>
            <img src={about} style={{ maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Container>
      <Container sx={style.BigFooterStyles}>
        <BigFooter />
      </Container>
      <Container sx={style.SmallFooterStyles} maxWidth={false}>
        <SmallFooter />
      </Container>
    </>
  );
};

export default AboutUs;
