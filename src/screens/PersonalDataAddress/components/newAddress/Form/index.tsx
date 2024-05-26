import React, { useState } from 'react';
import { useCustomStyles } from './style';
import { Button, Card, Grid, TextField, Typography } from '@mui/material';
//import address from '../../../../tests/mock/Address/index.json';
import { Address } from '../../../../../lib/interfaces/Address';
//import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const FormNewAddress: React.FC = () => {
  const style = useCustomStyles();
  const [userDatas, setUserDatas] = useState<Address>({
    id: uuidv4(),
    userId: '',
    apelido: '',
    cep: '',
    rua: '',
    numero: '',
    cidade: '',
    estado: '',
    bairro: '',
    complemento: '',
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDatas((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitClick = () => {
    // Aqui você pode adicionar a lógica para salvar o endereço
    // Depois de salvar, você pode redirecionar o usuário para outra página
    console.log('Formulário enviado:', userDatas);
  };
  return (
    <>
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
            Cadastrar Endereço
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Card sx={{ p: '2em' }}>
            <TextField
              fullWidth
              label="APELIDO"
              name="apelido"
              value={userDatas.apelido}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />
            <TextField
              fullWidth
              label="CEP"
              name="cep"
              value={userDatas.cep}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />

            <TextField
              fullWidth
              label="Rua"
              name="rua"
              value={userDatas.rua}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />

            <TextField
              fullWidth
              label="Número"
              name="numero"
              value={userDatas.numero}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />

            <TextField
              fullWidth
              label="Cidade"
              name="cidade"
              value={userDatas.cidade}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />

            <TextField
              fullWidth
              label="Estado"
              name="estado"
              value={userDatas.estado}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />

            <TextField
              fullWidth
              label="Bairro"
              name="bairro"
              value={userDatas.bairro}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />

            <TextField
              fullWidth
              label="Complemento"
              name="complemento"
              value={userDatas.complemento}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />
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
    </>
  );
};

export default FormNewAddress;
