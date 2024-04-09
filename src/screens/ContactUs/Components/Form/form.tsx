import { Button, TextField } from '@mui/material';
import { useCustomStyles } from './style';
import { useState } from 'react';
import { ContactForm } from '../../../../lib/interfaces/Contact';

const Form: React.FC = () => {
  const style = useCustomStyles();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Integração com a API
    console.log('Dados do formulário:', formData);

    setFormData({
      name: '',
      email: '',
      message: '',
      subject: '',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        required
        id="name"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleChange}
        sx={style.TextFieldStyle}
      />
      <TextField
        required
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleChange}
        sx={style.TextFieldStyle}
      />

      <TextField
        required
        id="subject"
        label="Assunto"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.subject}
        onChange={handleChange}
        sx={style.TextFieldStyle}
      />

      <TextField
        required
        id="message"
        label="Mensagem"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        value={formData.message}
        onChange={handleChange}
        sx={style.TextFieldStyle}
      />
      <Button variant="contained" type="submit" sx={style.ButtonStyle}>
        ENVIAR MENSAGEM
      </Button>
    </form>
  );
};

export default Form;
