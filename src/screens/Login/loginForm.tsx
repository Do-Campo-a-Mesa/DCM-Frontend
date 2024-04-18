import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { LoginUserInput } from '../../lib/interfaces/User';
import { userLogIn } from '../../services/user';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserInput>();

  const onSubmit = async (formData: LoginUserInput) => {
    await userLogIn(formData)
      .then((response) => {
        // lógica de manipulação da resposta aqui
        console.log(response);
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
