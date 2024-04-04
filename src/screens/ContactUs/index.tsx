import { useCustomStyles } from './style';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import Navbar from '../../lib/components/Navbar/Navbar';

import React from 'react';
import BigFooter from '../../lib/components/Footer/bigFooter';
import SmallFooter from '../../lib/components/Footer/smallFooter';

const ContactUs: React.FC = () => {
  const style = useCustomStyles();

  return (
    <>
      <Navbar isHomePage={true} />
      <Container sx={style.ContainerStyle}>
        <Grid
          container
          maxWidth={'1600px'}
          minHeight={'100vh'}
          sx={style.GridStyle}
        >
          <Grid item xs={12} sx={style.GridTitle}>
            <Typography
              variant="h1"
              component="div"
              className="text-overlay"
              sx={style.Title}
            >
              Contate-nos
            </Typography>
          </Grid>
          <Grid item xs={12} sx={style.GridTitle}>
            <Grid item xs={5} sx={style.GridSubTitle}>
              <Typography sx={style.SubTitle}>
                Teve alguma dúvida? Envie-nos uma mensagem, estamos aguardando
                para respondê-lo.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <form style={{ textAlign: 'center' }}>
              <TextField
                required
                id="name"
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={style.TextFieldStyle}
              />
              <TextField
                required
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={style.TextFieldStyle}
              />
              <TextField
                required
                id="message"
                label="Mensagem"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                sx={style.TextFieldStyle}
              />
              <Button variant="contained" sx={style.ButtonStyle}>
                ENVIAR MENSAGEM
              </Button>
            </form>
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

export default ContactUs;
