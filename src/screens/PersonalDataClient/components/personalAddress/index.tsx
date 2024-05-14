import { useCustomStyles } from './style';
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import axios from 'axios'; // Para fazer solicitações HTTP

interface UserData {
  rua: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
}

const PersonalAddress: React.FC = () => {
  const style = useCustomStyles();
  const [userData, setUserData] = useState<UserData>({
    rua: 'Teste',
    cep: 'Teste1',
    bairro: 'Teste2',
    cidade: 'Teste3',
    estado: 'Teste4',
  });
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    // Aqui você faria uma solicitação HTTP para obter os dados do usuário do banco de dados
    // Suponha que a API retorne um objeto com os dados do usuário
    axios
      .get('sua-url-api')
      .then((response) => {
        const userDataFromApi = response.data;
        setUserData(userDataFromApi);
      })
      .catch((error) => {
        console.error('Erro ao obter dados do usuário:', error);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleEditClick = () => {
    setEditMode(true);
  };
  const handleSaveClick = () => {
    // Implemente aqui a lógica para salvar as informações editadas no banco de dados
    console.log('Informações editadas:', userData);
    // Por exemplo, você poderia fazer uma solicitação PUT para uma API para atualizar os dados do usuário
    // axios.put('sua-url-api', userData)
    //   .then(response => {
    //     console.log('Dados atualizados com sucesso:', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Erro ao atualizar dados do usuário:', error);
    //   });
    setEditMode(false);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom sx={style.Title}>
        ENDEREÇOS
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Rua"
            name="Rua"
            value={userData.rua}
            onChange={handleInputChange}
            disabled={!editMode}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="CEP"
            name="CEP"
            value={userData.cep}
            onChange={handleInputChange}
            disabled={!editMode}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Estado"
            name="Estado"
            value={userData.estado}
            onChange={handleInputChange}
            disabled={!editMode}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Cidade"
            name="Cidade"
            value={userData.cidade}
            onChange={handleInputChange}
            disabled={!editMode}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Bairro"
            name="Bairro"
            value={userData.bairro}
            onChange={handleInputChange}
            disabled={!editMode}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          {!editMode ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditClick}
            >
              Editar
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveClick}
            >
              Salvar
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
export default PersonalAddress;
