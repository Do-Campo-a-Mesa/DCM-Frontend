import React, { useEffect, useState } from 'react';
import { useCustomStyles } from './style';
import { Grid, Typography } from '@mui/material';
//import { Order } from '../../../../lib/interfaces/Order';
import PersonalOrder from '../personalOrder';
//import { Link } from 'react-router-dom';
import { Order, getOrdersByUserId } from '../../../../services/order/mock'; // Importe o arquivo de mock com os dados do pedido
const PersonalOrdersList: React.FC = () => {
  const style = useCustomStyles();
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrdersByUserId(); // Obter os pedidos
        setOrders(response.data); // Definir os pedidos no estado
      } catch (error) {
        console.error('Erro ao buscar os pedidos:', error);
      }
    };

    fetchOrders();
  }, []);
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
        <Typography variant="h5" gutterBottom sx={style.Title}>
          PEDIDOS
        </Typography>
        <Grid
          container
          alignItems="top"
          justifyContent="flex-start"
          item
          spacing={3}
          md={12}
        >
          <Grid item>
            <Typography variant="h5" gutterBottom sx={style.Subtitle}>
              TODOS
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" gutterBottom sx={style.Subtitle}>
              RECORRENTES
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {orders.map((userData: Order) => (
          <Grid item xs={12} key={userData.id}>
            <PersonalOrder />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PersonalOrdersList;
