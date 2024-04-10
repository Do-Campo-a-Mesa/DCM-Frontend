import { Button, TextField } from '@mui/material';
import { useCustomStyles } from './style';
import { useForm } from 'react-hook-form';
import { ContactForm } from '../../../../lib/interfaces/Contact';

const Form: React.FC = () => {
  const style = useCustomStyles();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = (formData: ContactForm) => {
    // Integração com a API ou qualquer outra lógica de submissão de formulário
    console.log('Dados do formulário:', formData);
    reset(); // Limpa os campos do formulário após a submissão
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('name', { required: true })}
        id="name"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        sx={style.TextFieldStyle}
      />
      {errors.name && <span>Este campo é obrigatório</span>}

      <TextField
        {...register('email', { required: true })}
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        sx={style.TextFieldStyle}
      />
      {errors.email && <span>Este campo é obrigatório</span>}

      <TextField
        {...register('subject', { required: true })}
        id="subject"
        label="Assunto"
        variant="outlined"
        fullWidth
        margin="normal"
        sx={style.TextFieldStyle}
      />
      {errors.subject && <span>Este campo é obrigatório</span>}

      <TextField
        {...register('message', { required: true })}
        id="message"
        label="Mensagem"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        sx={style.TextFieldStyle}
      />
      {errors.message && <span>Este campo é obrigatório</span>}

      <Button variant="contained" type="submit" sx={style.ButtonStyle}>
        ENVIAR MENSAGEM
      </Button>
    </form>
  );
};

export default Form;
