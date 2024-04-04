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
          maxWidth={'1200px'}
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <img src={about} />
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
