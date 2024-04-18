import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { LoginUserInput } from '../../lib/interfaces/User';
import { userLogIn } from '../../services/user';
import { useDispatch } from 'react-redux';
import { userState } from '../../lib/store/reducers/user';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserInput>();

  const dispatch = useDispatch();

  const onSubmit = async (formData: LoginUserInput) => {
    await userLogIn(formData)
      .then((response) => {
        if (response.status == 200) {
          dispatch(
            userState({
              id: response.data.user.id,
              first_name: response.data.user.first_name,
              last_name: response.data.user.last_name,
              email: response.data.user.email,
              token: response.data.token,
            })
          );
          // Redirecionamento usando o objeto de histórico do navegador
          window.location.href = '/'; // Redireciona para a rota '/'
        }
      })
      .catch((error) => {
        console.error('Erro na requisição de login:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('email', { required: true })}
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      {errors.email && <span>Este campo é obrigatório</span>}

      <TextField
        {...register('password', { required: true })}
        id="password"
        label="Senha"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
      />
      {errors.password && <span>Este campo é obrigatório</span>}

      <Button variant="contained" type="submit">
        ENVIAR MENSAGEM
      </Button>
    </form>
  );
};

export default LoginForm;
