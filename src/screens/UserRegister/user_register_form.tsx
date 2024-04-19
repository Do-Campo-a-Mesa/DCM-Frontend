import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { CreateUserInput } from '../../lib/interfaces/User';
import { createUserAccount } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const UserRegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch, // Use o watch para monitorar o campo de repetir senha
  } = useForm<CreateUserInput>();

  const [errorMessage, setErrorMessage] = useState<string>(''); // Use o useState para armazenar a mensagem de erro

  const navigate = useNavigate();

  const password = watch('password'); // Obtém o valor do campo de senha
  const repeatPassword = watch('repeat_password'); // Obtém o valor do campo de repetir senha

  const onSubmit = async (formData: CreateUserInput) => {
    if (password !== repeatPassword) {
      setErrorMessage('As senhas precisam ser iguais.'); // Define a mensagem de erro
      return; // Aborta o envio do formulário se as senhas não forem iguais
    }

    await createUserAccount(formData)
      .then((response) => {
        if (response.status == 201) {
          // Redireciona para a rota de login
          navigate('/login');
        }
      })
      .catch(() => {
        setErrorMessage(
          'Houver um erro ao criar sua conta, por favor verificar os dados inseridos'
        ); // Define a mensagem de erro
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
      {errorMessage && <span>{errorMessage}</span>}{' '}
      {/* Exibe a mensagem de erro, se houver */}
      <Button variant="contained" type="submit">
        ENVIAR MENSAGEM
      </Button>
    </form>
  );
};

export default UserRegisterForm;
