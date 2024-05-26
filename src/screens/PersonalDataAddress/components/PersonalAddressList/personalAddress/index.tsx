import { useCustomStyles } from './style';
import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Card } from '@mui/material';
//import axios from 'axios'; // Para fazer solicitações HTTP
import { Address } from '../../../../../lib/interfaces/Address';
//import address from '../../../../../tests/mock/Address/index.json';
interface Props {
  userData: Address;
}

const PersonalAddress: React.FC<Props> = ({ userData }) => {
  const style = useCustomStyles();
  const [userDatas, setUserDatas] = useState<Address>(userData);
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
  const handleSaveClick = () => {
    // Implemente aqui a lógica para salvar as informações editadas no banco de dados
    console.log('Informações editadas:', userDatas);
    // Por exemplo, você poderia fazer uma solicitação PUT para uma API para atualizar os dados do usuário
    /*axios
      .put('sua-url-api', userData)
      .then((response) => {
        console.log('Dados atualizados com sucesso:', response.data);
      })
      .catch((error) => {
        console.error('Erro ao atualizar dados do usuário:', error);
      });*/
    setEditMode(false);
  };

  return (
    <div>
      <Card sx={style.Card}>
        <Grid container spacing={2}>
          {!editMode ? (
            <Grid item xs={12} sx={{ m: '2em' }}>
              <Typography sx={style.TitleAddress}>
                {userDatas.apelido}
              </Typography>
              <Typography sx={style.BodyAddress}>
                {[
                  userDatas.rua,
                  userDatas.numero,
                  userDatas.complemento,
                  userDatas.bairro,
                  userDatas.cidade,
                  userDatas.estado,
                  userDatas.cep,
                ]
                  .filter(Boolean)
                  .join(', ')}
              </Typography>
              <Button
                variant="contained"
                onClick={handleEditClick}
                sx={style.Button}
              >
                Editar
              </Button>
            </Grid>
          ) : (
            <Grid item xs={12} sx={{ m: '2em' }}>
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
                onClick={handleSaveClick}
                sx={style.Button}
              >
                Salvar
              </Button>
            </Grid>
          )}
        </Grid>
      </Card>
    </div>
  );
};
export default PersonalAddress;
