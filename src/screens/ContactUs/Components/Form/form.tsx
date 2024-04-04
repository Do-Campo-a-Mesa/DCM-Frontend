import { Button, TextField } from '@mui/material';
import { useCustomStyles } from './style';

const Form: React.FC = () => {
  const style = useCustomStyles();

  return (
    <form style={{ textAlign: 'center' }}>
      <TextField
        required
        id="name"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        sx={style.TextFieldStyle}
      />
      <TextField
        required
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
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
        sx={style.TextFieldStyle}
      />
      <Button variant="contained" sx={style.ButtonStyle}>
        ENVIAR MENSAGEM
      </Button>
    </form>
  );
};

export default Form;
