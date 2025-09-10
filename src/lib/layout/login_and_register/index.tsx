import { useCustomStyles } from './style';
import { Container, Typography, Grid } from '@mui/material';
import React from 'react';
import SmallFooter from '../../components/Footer/smallFooter';
import Image from '../../../assets/userRegister_img.png';
import Notification from '../../components/Notification';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

interface Props {
  isLogin?: boolean;
  formComponent: React.ReactNode;
}

const LayoutRegisterOrLogin: React.FC<Props> = ({ isLogin, formComponent }) => {
  const style = useCustomStyles();

  // Acessa o estado do usuário
  const notification = useSelector((state: RootState) => state.notification);

  return (
    <>
      <Notification
        variant={notification.variant}
        severity={notification.severity}
        message={notification.message}
        visibility={notification.visibility}
      />

      <Grid container spacing={2} direction="row">
        <Grid item xs={6} sx={style.FormContainer}>
          <Grid item xs={7}>
            <Typography
              variant="h1"
              component="div"
              className="text-overlay"
              sx={style.Title}
            >
              {isLogin ? 'Entrar' : 'Cadastre-se'}
            </Typography>
            <Typography sx={style.SubTitle}>
              Preencha os campos{' '}
              {isLogin ? 'de email e senha' : 'com seus dados iniciais'}.
            </Typography>
            {formComponent}
          </Grid>
        </Grid>
        <Grid item xs={6} sx={style.ImageContainer}>
          <img
            alt="Fundo de tela do formulário de Login ou de Cadastro de Conta"
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

export default LayoutRegisterOrLogin;
