import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { LoginUserInput } from '../../lib/interfaces/User';
import { userLogIn } from '../../services/user';
import { useDispatch } from 'react-redux';
import { userState } from '../../lib/store/reducers/user';
import { useNavigate } from 'react-router-dom';
import { notificationState } from '../../lib/store/reducers/notification';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginUserInput>();

  const dispatch = useDispatch();

  const navigate = useNavigate();

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
          dispatch(
            notificationState({
              variant: 'standard',
              severity: 'success',
              message: 'Usuário Logado com Sucesso',
              visibility: true,
            })
          );
          // Adiciona um pequeno atraso antes de redirecionar
          setTimeout(() => {
            navigate('/');
          }, 1000); // 1000 milissegundos = 1 segundo
        }
      })
      .catch(() => {
        dispatch(
          notificationState({
            variant: 'standard',
            severity: 'error',
            message: 'Credenciais inválidas. Por favor, tente novamente.',
            visibility: true,
          })
        );
        reset(); // Limpa os campos do formulário
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
      {/* Exibe a mensagem de erro, se houver */}
      <Button variant="contained" type="submit">
        ENVIAR MENSAGEM
      </Button>
    </form>
  );
};

export default LoginForm;
