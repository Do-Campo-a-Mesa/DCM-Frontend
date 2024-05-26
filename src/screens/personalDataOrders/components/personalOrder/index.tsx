import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Order, getOrdersByUserId } from '../../../../services/order/mock'; // Importe o arquivo de mock com os dados do pedido
import { useCustomStyles } from './style';

const PersonalOrder: React.FC = () => {
  const style = useCustomStyles();
  const [orders, setOrders] = useState<Order | null>(null);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
      <Grid container key={orders.id}>
        <Grid item xs={12}>
          <Card variant="outlined" sx={style.Card}>
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
                      Data do Pedido:
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
                      {orders.order_date}
                    </Typography>
                  </Grid>
                  <Grid item sx={{ ml: '1em' }}>
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
                      Previsão de Entrega:
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
                      {orders.expected_delivery_date}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Accordion sx={style.Accordion}>
                <AccordionSummary>
                  <Grid container>
                    <Grid container xs={4} justifyContent="flex-start">
                      <Grid item>
                        <Typography variant="h5" gutterBottom sx={style.Label}>
                          Nome da Loja
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={style.Text1}>
                          ramo
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container xs={4} justifyContent="flex-end">
                      <Grid item>
                        <Typography variant="h5" gutterBottom sx={style.Label}>
                          Pedido Nº:
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
                          {orders.id}
                        </Typography>
                      </Grid>
                      <Grid item sx={{ ml: '1em' }}>
                        <Typography variant="h5" gutterBottom sx={style.Label}>
                          Total:
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
                          {orders.total_amount}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container xs={4} justifyContent="flex-end">
                      <Grid item>
                        <Button
                          variant="contained"
                          onClick={handleExpandClick}
                          sx={style.Button}
                        >
                          {expanded ? 'Recolher' : 'Produtos'}
                          <ExpandMoreIcon
                            sx={{
                              transform: expanded ? 'rotate(180deg)' : 'none',
                            }}
                          />
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container direction="column" spacing={1}>
                    <Typography variant="h5" gutterBottom sx={style.Title1}>
                      Produtos
                    </Typography>
                    {orders.products.map((product, i) => (
                      <Grid item key={i}>
                        <Grid container>
                          <Grid container xs={6} justifyContent="flex-start">
                            <Grid item>
                              <Typography
                                variant="h5"
                                gutterBottom
                                sx={style.Label}
                              >
                                {product.product.name}
                              </Typography>
                              <Typography
                                variant="h5"
                                gutterBottom
                                sx={style.Text1}
                              >
                                categoria
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container xs={2} justifyContent="center">
                            <Grid item>
                              <Typography
                                variant="h5"
                                gutterBottom
                                sx={style.Label}
                              >
                                Quantidade
                              </Typography>
                              <Typography
                                variant="h5"
                                gutterBottom
                                sx={style.Text}
                              >
                                {product.quantity}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container xs={2} justifyContent="center">
                            <Grid item sx={{ ml: '1em' }}>
                              <Typography
                                variant="h5"
                                gutterBottom
                                sx={style.Label}
                              >
                                Valor Unitário
                              </Typography>
                              <Typography
                                variant="h5"
                                gutterBottom
                                sx={style.Text}
                              >
                                {product.price}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container xs={2} justifyContent="center">
                            <Grid item>
                              <Typography
                                variant="h5"
                                gutterBottom
                                sx={style.Label}
                              >
                                Total
                              </Typography>
                              <Typography
                                variant="h5"
                                gutterBottom
                                sx={style.Text}
                              >
                                {product.total_value}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalOrder;
