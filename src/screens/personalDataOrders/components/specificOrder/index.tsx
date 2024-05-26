import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Order } from '../../../../services/order/mock'; // Importe o arquivo de mock com os dados do pedido
import { useCustomStyles } from './style';
import SideMenu from '../../../../lib/components/SideMenu';
import Navbar from '../../../../lib/components/Navbar/Navbar';
import SmallFooter from '../../../../lib/components/Footer/smallFooter';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../../services/order';
const SpecificOrder: React.FC = () => {
  const style = useCustomStyles();
  const [orders, setOrders] = useState<Order | null>(null);
  const [expanded, setExpanded] = useState(false);
  const { id } = useParams();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    const fetchOrders = async () => {
      if (!id) return;
      const orderId = parseInt(id) - 1;
      const response = await getOrderById(orderId);
      if (response) {
        setOrders(response.data[orderId]);
      } else {
        console.error('Product not found');
      }
    };
    fetchOrders();
  }, [id]);
  if (!orders) {
    return null; // Retorna null se não houver pedido
  }
  return (
    <>
      <Navbar isHomePage={false} />
      <Grid container sx={style.Content}>
        <SideMenu />
        <Grid container item xs={12} sm={12} md={9} sx={style.ContainerStyle}>
          <Grid container key={orders.id}>
            <Grid item xs={12}>
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
};

export default SpecificOrder;
