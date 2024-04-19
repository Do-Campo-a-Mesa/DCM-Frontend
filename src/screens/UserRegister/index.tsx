import LayoutRegisterOrLogin from '../../lib/layout/login_and_register';
import UserRegisterForm from './user_register_form';

const UserRegister: React.FC = () => {
  return <LayoutRegisterOrLogin formComponent={<UserRegisterForm />} />;
};

export default UserRegister;
