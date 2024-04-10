import { useCustomStyles } from './style';
import { Container, Typography, Grid } from '@mui/material';
import React from 'react';
import SmallFooter from '../../lib/components/Footer/smallFooter';
import Image from '../../assets/userRegister_img.png';
const UserRegister: React.FC = () => {
  const style = useCustomStyles();

  return (
    <>
      <Grid container spacing={2} direction="row">
        <Grid item xs={6} sx={style.FormContainer}>
          <Grid item xs={7}>
            <Typography
              variant="h1"
              component="div"
              className="text-overlay"
              sx={style.Title}
            >
              Cadastre-se
            </Typography>
            <Typography sx={style.SubTitle}>
              Preencha os campos com seus dados inicias.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} sx={style.ImageContainer}>
          <img
            src={Image}
            title="UserRegister Image"
            style={{ maxWidth: '100%' }}
          />
        </Grid>
      </Grid>
      <Container sx={style.SmallFooterStyles} maxWidth={false}>
        <SmallFooter />
      </Container>
    </>
  );
};

export default UserRegister;
