import { useCustomStyles } from './style';
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import axios from 'axios'; // Para fazer solicitações HTTP

interface UserData {
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  genero: string;
}

const PersonalInfo: React.FC = () => {
  const style = useCustomStyles();
  const [userData, setUserData] = useState<UserData>({
    nome: 'Teste',
    email: 'Teste1',
    telefone: 'Teste2',
    dataNascimento: 'Teste3',
    genero: 'Teste4',
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
        DADOS PESSOAIS
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nome"
            name="nome"
            value={userData.nome}
            onChange={handleInputChange}
            disabled={!editMode}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            disabled={!editMode}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Telefone"
            name="telefone"
            value={userData.telefone}
            onChange={handleInputChange}
            disabled={!editMode}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Data de Nascimento"
            name="dataNascimento"
            value={userData.dataNascimento}
            onChange={handleInputChange}
            disabled={!editMode}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Gênero"
            name="genero"
            value={userData.genero}
            onChange={handleInputChange}
            disabled={!editMode}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          {!editMode ? (
            <Button
              variant="contained"
              onClick={handleEditClick}
              sx={style.Button}
            >
              Editar
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleSaveClick}
              sx={style.Button}
            >
              Salvar
            </Button>
          )}
          <Button
            variant="contained"
            onClick={handleSaveClick}
            sx={style.Button}
          >
            Senha
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default PersonalInfo;
