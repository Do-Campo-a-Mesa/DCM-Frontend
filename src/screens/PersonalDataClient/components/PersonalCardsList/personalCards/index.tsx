import { useCustomStyles } from './style';
import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
//import axios from 'axios'; // Para fazer solicitações HTTP
import cardPayment from '../../../../../tests/mock/cardPayment/index.json';
import { CardPayment } from '../../../../../lib/interfaces/CardPayment';

interface Props {
  userData: CardPayment;
}

const PersonalCards: React.FC<Props> = ({ userData }) => {
  const style = useCustomStyles();
  const [userDatas, setUserDatas] = useState<CardPayment[]>(cardPayment);
  const [editMode, setEditMode] = useState(false);

  /*useEffect(() => {
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
  }, []);*/

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDatas((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleEditClick = () => {
    setEditMode(true);
  };
  const handleEditAddress = () => {
    //implementar
  };
  const handleSaveClick = () => {
    // Implemente aqui a lógica para salvar as informações editadas no banco de dados
    console.log('Informações editadas:', userDatas);
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
      <Grid container spacing={2}>
        <Grid container item spacing={2} xs={6}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="APELIDO DO CARTÃO"
              name="apelido"
              value={userData.apelido}
              onChange={handleInputChange}
              disabled={!editMode}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="CPF DO TITULAR"
              name="CPF"
              value={userData.cpf}
              onChange={handleInputChange}
              disabled={!editMode}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="NÚMERO DO CARTÃO"
              name="numero"
              value={userData.numero}
              onChange={handleInputChange}
              disabled={!editMode}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="NOME IMPRESSO NO CARTÃO"
              name="nome"
              value={userData.nome}
              onChange={handleInputChange}
              disabled={!editMode}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="VALIDADE"
              name="validade"
              value={userData.validade}
              onChange={handleInputChange}
              disabled={!editMode}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="CÓDIGO DE SEGURANÇA"
              name="codigo"
              value={editMode ? userData.codigo : '***'}
              type={editMode ? 'text' : 'password'}
              onChange={handleInputChange}
              disabled={!editMode}
              InputLabelProps={{ shrink: true }}
              sx={style.TextFieldStyle}
            />
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={6}>
          <Grid item xs={12} sx={{ m: '2em' }}>
            <Typography sx={style.Subtitle}>Endereço de Fatura</Typography>
            <Typography sx={style.BodyAddress}>
              {[
                userData.endereco.rua,
                userData.endereco.numero,
                userData.endereco.complemento,
                userData.endereco.bairro,
                userData.endereco.cidade,
                userData.endereco.estado,
                userData.endereco.cep,
              ]
                .filter(Boolean)
                .join(', ')}
            </Typography>
            <Button
              variant="contained"
              onClick={handleEditAddress}
              sx={style.Button}
            >
              Editar
            </Button>
          </Grid>
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
        </Grid>
      </Grid>
    </div>
  );
};
export default PersonalCards;
