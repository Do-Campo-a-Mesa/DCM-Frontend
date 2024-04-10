import SmallFooter from '../../lib/components/Footer/smallFooter';
import { Container } from '@mui/material';
import { useCustomStyles } from './style';
import LoginForm from './components/loginForm';

const Login: React.FC = () => {
  const style = useCustomStyles();

  return (
    <>
      <Container>
        <LoginForm />
      </Container>
      <Container sx={style.SmallFooterStyles} maxWidth={false}>
        <SmallFooter />
      </Container>
    </>
  );
};

export default Login;
