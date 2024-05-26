import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Order, getOrdersByUserId } from '../../../../services/order/mock'; // Importe o arquivo de mock com os dados do pedido
import { useCustomStyles } from './style';
const PersonalOrder: React.FC = () => {
  const style = useCustomStyles();
  const [orders, setOrders] = useState<Order | null>(null);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrdersByUserId(); // Obter os pedidos
        if (response.data.length > 0) {
          // Define o primeiro pedido do array como o pedido atual
          setOrders(response.data[0]);
        }
      } catch (error) {
        console.error('Erro ao buscar os pedidos:', error);
      }
    };

    fetchOrders();
  }, []);
  if (!orders) {
    return null; // Retorna null se não houver pedido
  }
  return (
    <div>
      <Grid container xs={12} md={12} key={orders.id}>
        <Card variant="outlined" sx={{ width: '100%' }}>
          <CardContent>
            <Grid container>
              <Grid container xs={4} justifyContent="flex-start">
                <Grid item>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      typography: style.Theme.customTypography.body3,
                      fontFamily: style.Theme.customTypography.fontFamily,
                      color: style.Theme.customPalette.primary.black,
                      lineHeight: 'none',
                    }}
                  >
                    status:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      typography: style.Theme.customTypography.body4,
                      fontFamily: style.Theme.customTypography.fontFamily,
                      color: style.Theme.customPalette.primary.black,
                      pl: '0.5em',
                      lineHeight: 'none',
                    }}
                  >
                    {orders.status}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container xs={8} justifyContent="flex-end">
                <Typography variant="subtitle1" gutterBottom>
                  Data do Pedido: {orders.order_date}
                </Typography>
              </Grid>
            </Grid>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Produtos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction="column" spacing={1}>
                  {orders.products.map((product, i) => (
                    <Grid item key={i}>
                      <Typography>
                        Nome do Produto: {product.product.name}
                      </Typography>
                      <Typography>Quantidade: {product.quantity}</Typography>
                      <Typography>
                        Preço Unitário: R$ {product.price}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default PersonalOrder;
