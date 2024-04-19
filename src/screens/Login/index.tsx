import LoginForm from './loginForm';
import LayoutRegisterOrLogin from '../../lib/layout/login_and_register';

const Login: React.FC = () => {
  return <LayoutRegisterOrLogin isLogin formComponent={<LoginForm />} />;
};

export default Login;
