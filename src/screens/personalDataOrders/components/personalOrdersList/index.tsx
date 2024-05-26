import React, { useEffect, useState } from 'react';
import { useCustomStyles } from './style';
import { Grid, Typography, Tabs, Tab } from '@mui/material';
//import { Order } from '../../../../lib/interfaces/Order';
import PersonalOrder from '../personalOrder';
import { Link } from 'react-router-dom';
import { Order, getOrdersByUserId } from '../../../../services/order/mock'; // Importe o arquivo de mock com os dados do pedido
const PersonalOrdersList: React.FC = () => {
  const style = useCustomStyles();
  const [orders, setOrders] = useState<Order[]>([]);
  const [tabIndex, setTabIndex] = useState(0);
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
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
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
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            TabIndicatorProps={{
              sx: {
                backgroundColor: style.Theme.customPalette.primary.main,
              },
            }}
            sx={{ ml: '1.5em' }}
          >
            <Tab sx={style.Tabs} label="TODOS" />
            <Tab sx={style.Tabs} label="RECORRENTES" />
          </Tabs>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: '1em' }}>
        {tabIndex === 0 &&
          orders.map((order) => (
            <Grid item xs={12} key={order.id}>
              <Link
                to={`/perfil/pedidos/id=${order.id}`}
                style={{ textDecoration: 'none' }}
              >
                <PersonalOrder />
              </Link>
            </Grid>
          ))}
        {tabIndex === 1 &&
          orders
            .filter((order) => order.isRecurring)
            .map((order) => (
              <Grid item xs={12} key={order.id}>
                <Link
                  to={`/perfil/pedidos/id=${order.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <PersonalOrder />
                </Link>
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

export default PersonalOrdersList;
