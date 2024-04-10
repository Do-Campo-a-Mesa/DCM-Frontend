import { Button, TextField } from '@mui/material';
//import { useCustomStyles } from '../style';
import { useForm } from 'react-hook-form';
import { CreateUserInput } from '../../lib/interfaces/User';

const UserRegisterForm: React.FC = () => {
  //const style = useCustomStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserInput>();

  const onSubmit = (formData: CreateUserInput) => {
    // Integração com a API ou qualquer outra lógica de submissão de formulário
    console.log('Dados do formulário:', formData);
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

      <TextField
        {...register('repeat_password', { required: true })}
        id="repeat_password"
        label="Repetir Senha"
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

export default UserRegisterForm;
