import React, { useState } from 'react';
import { useCustomStyles } from './style';
import {
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { CardPayment } from '../../../../../lib/interfaces/CardPayment';
import address from '../../../../../tests/mock/address/index.json';
const FormNewCards: React.FC = () => {
  const style = useCustomStyles();
  const navigate = useNavigate();
  const [userDatas, setUserDatas] = useState<CardPayment>({
    id: uuidv4(),
    apelido: '',
    cpf: '',
    numero: '',
    nome: '',
    validade: '',
    codigo: '',
    endereco: {
      id: '',
      userId: '',
      apelido: '',
      cep: '',
      rua: '',
      numero: '',
      cidade: '',
      estado: '',
      bairro: '',
      complemento: '',
    },
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDatas((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleAddressChange = (addressId: string) => {
    const selectedAddress = address.find((address) => address.id === addressId);
    if (selectedAddress) {
      setUserDatas((prevData) => ({
        ...prevData,
        endereco: selectedAddress,
      }));
    }
  };
  const handleSubmitClick = () => {
    // Aqui você pode adicionar a lógica para salvar o endereço
    // Depois de salvar, você pode redirecionar o usuário para outra página
    console.log('Formulário enviado:', userDatas);
    navigate('/perfil/cartoes/');
  };
  return (
    <div>
      <Grid
        container
        sx={{
          alignItems: 'top',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}
      >
        <Grid item md={12}>
          <Typography variant="h5" gutterBottom sx={style.Title}>
            Cadastrar Cartão
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Card sx={{ p: '2em' }}>
            <TextField
              fullWidth
              label="APELIDO DO CARTÃO"
              name="apelido"
              value={userDatas.apelido}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />
            <TextField
              fullWidth
              label="CPF DO TITULAR"
              name="CPF"
              value={userDatas.cpf}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />
            <TextField
              fullWidth
              label="NÚMERO DO CARTÃO"
              name="numero"
              value={userDatas.numero}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />
            <TextField
              fullWidth
              label="NOME IMPRESSO NO CARTÃO"
              name="nome"
              value={userDatas.nome}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />

            <TextField
              fullWidth
              label="VALIDADE"
              name="validade"
              value={userDatas.validade}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />

            <TextField
              fullWidth
              label="CÓDIGO DE SEGURANÇA"
              name="codigo"
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />
            <FormControl fullWidth>
              <InputLabel
                id="select-endereco-label"
                sx={style.InputLabelSelect}
              >
                ENDEREÇO
              </InputLabel>
              <Select
                labelId="select-endereco-label"
                value={userDatas.endereco.id}
                onChange={(e) => handleAddressChange(e.target.value as string)}
                label="ENDEREÇO"
                sx={style.SelectStyle}
              >
                {address.map((address) => (
                  <MenuItem key={address.id} value={address.id}>
                    {address.apelido}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmitClick}
              sx={style.Button}
            >
              Cadastrar
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormNewCards;
