import React from 'react';
import { useCustomStyles } from './style';
import { Button, Grid, Typography } from '@mui/material';
import PersonalAddress from './personalAddress';
import address from '../../../../tests/mock/Address/index.json';
import { Address } from '../../../../lib/interfaces/Address';
//import { Link } from 'react-router-dom';

const PersonalAddressList: React.FC = () => {
  const style = useCustomStyles();

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
        <Grid
          container
          alignItems="top"
          justifyContent="flex-start"
          item
          spacing={3}
          md={12}
        >
          <Grid item>
            <Typography variant="h5" gutterBottom sx={style.Title}>
              ENDEREÇOS
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" sx={style.Button}>
              Novo endereço
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {address.map((userData: Address, index: number) => (
          <Grid item xs={6} key={index}>
            <PersonalAddress userData={userData} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PersonalAddressList;
