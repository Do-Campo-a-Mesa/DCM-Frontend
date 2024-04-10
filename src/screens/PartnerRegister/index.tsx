import { useCustomStyles } from './style';
import { Container, Typography, Grid, Button } from '@mui/material';
import React from 'react';
import SmallFooter from '../../lib/components/Footer/smallFooter';
import BasicTimeline from './components/Timeline';
const PartnerRegister: React.FC = () => {
  const style = useCustomStyles();

  return (
    <>
      <Grid container spacing={2} direction="row" sx={style.ContainerStyle}>
        <Grid item xs={6} sx={style.FormContainer}>
          <Grid item xs={7} sx={style.FormGrid}>
            <Typography
              variant="h1"
              component="div"
              className="text-overlay"
              sx={style.Title}
            >
              Seja um Parceiro
            </Typography>
            <Typography sx={style.SubTitle}>
              Preencha os campos com os dados da sua empresa.
            </Typography>
            <Typography sx={style.SubTitle}>
              Já é um Parceiro?
              <Button href="entrar" sx={style.ButtonStyle}>
                Acessar minha conta
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} sx={style.FormContainer1}>
          <Grid item xs={7} sx={style.FormGrid}>
            <Typography
              variant="h1"
              component="div"
              className="text-overlay"
              sx={style.Title1}
            >
              Como firmar Parceria?
            </Typography>
            <Typography sx={style.SubTitle1}>
              tenha seus produtos na vitrine mais vista do Brasil.
            </Typography>
            <BasicTimeline />
          </Grid>
        </Grid>
      </Grid>
      <Container sx={style.SmallFooterStyles} maxWidth={false}>
        <SmallFooter />
      </Container>
    </>
  );
};

export default PartnerRegister;
