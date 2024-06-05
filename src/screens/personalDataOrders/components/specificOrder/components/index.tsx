import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Order } from '../../../../../services/order/mock'; // Importe o arquivo de mock com os dados do pedido
import { useCustomStyles } from './style';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../../../services/order';
const SpecificOrder: React.FC = () => {
  const style = useCustomStyles();
  const [orders, setOrders] = useState<Order | null>(null);
  const [expandedInfo, setExpandedInfo] = useState(false);
  const [expandedProd, setExpandedProd] = useState(false);
  const { id } = useParams();
  const handleExpandInfoClick = () => {
    setExpandedInfo(!expandedInfo);
  };
  const handleExpandProdClick = () => {
    setExpandedProd(!expandedProd);
  };
  function shippingFree(orders: Order): string {
    if (orders.shipping_price === '0.00') {
      orders.shipping_price = 'Grátis';
    }
    return orders.shipping_price;
  }
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
  shippingFree(orders);
  return (
    <div>
      <Grid container key={orders.id}>
        <Grid container spacing={3} item xs={9}>
          <Grid item>
            <Typography variant="h5" gutterBottom sx={style.Title}>
              PEDIDO Nº {orders.id}
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" sx={style.Button1}>
              Ajuda
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" sx={style.Button1}>
              Avaliação
            </Button>
          </Grid>
        </Grid>
        <Grid container item xs={3}>
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
        <Grid item xs={12}>
          <Accordion sx={style.Accordion}>
            <AccordionSummary sx={style.AccordionSummary}>
              <Grid container>
                <Grid
                  container
                  xs={6}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h5" gutterBottom sx={style.Label}>
                      Informações Gerais
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container xs={6} justifyContent="flex-end">
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={handleExpandInfoClick}
                      sx={style.Button}
                    >
                      {expandedInfo ? 'Recolher' : 'Ver mais'}
                      <ExpandMoreIcon
                        sx={{
                          transform: expandedInfo ? 'rotate(180deg)' : 'none',
                        }}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails sx={style.AccordionDetails}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Grid container>
                    <Grid container xs={12} justifyContent="flex-start">
                      <Grid item>
                        <Typography variant="h5" gutterBottom sx={style.Label}>
                          Forma de Pagamento:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h5" gutterBottom sx={style.Text}>
                          {orders.type_of_payment}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container xs={12} justifyContent="space-between">
                      <Grid container item xs={6} justifyContent="flex-start">
                        <Grid item>
                          <Typography
                            variant="h5"
                            gutterBottom
                            sx={style.Label}
                          >
                            Data do Pedido:
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h5" gutterBottom sx={style.Text}>
                            {orders.order_date}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container item xs={6} justifyContent="flex-start">
                        <Grid item>
                          <Typography
                            variant="h5"
                            gutterBottom
                            sx={style.Label}
                          >
                            Data da Entrega:
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h5" gutterBottom sx={style.Text}>
                            {orders.expected_delivery_date}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container xs={12} justifyContent="flex-start">
                      <Grid item>
                        <Typography variant="h5" gutterBottom sx={style.Label}>
                          Entregue em:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="h5"
                          gutterBottom
                          sx={style.Text}
                        ></Typography>
                      </Grid>
                    </Grid>
                    <Grid container xs={12} justifyContent="space-between">
                      <Grid container item xs={6} justifyContent="flex-start">
                        <Grid item>
                          <Typography
                            variant="h5"
                            gutterBottom
                            sx={style.Label}
                          >
                            Subtotal:
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h5" gutterBottom sx={style.Text}>
                            {orders.total_value_of_products}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container item xs={6} justifyContent="flex-start">
                        <Grid item>
                          <Typography
                            variant="h5"
                            gutterBottom
                            sx={style.Label}
                          >
                            Frete:
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h5" gutterBottom sx={style.Text}>
                            {orders.shipping_price}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container item xs={6} justifyContent="flex-start">
                        <Grid item>
                          <Typography
                            variant="h5"
                            gutterBottom
                            sx={style.Label}
                          >
                            Total:
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h5" gutterBottom sx={style.Text}>
                            {orders.total_amount}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12}>
          <Accordion sx={style.Accordion}>
            <AccordionSummary sx={style.AccordionSummary}>
              <Grid container>
                <Grid container xs={6} justifyContent="flex-start">
                  <Grid item>
                    <Typography variant="h5" gutterBottom sx={style.Label}>
                      Nome da Loja
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={style.Text1}>
                      ramo
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container xs={6} justifyContent="flex-end">
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={handleExpandProdClick}
                      sx={style.Button}
                    >
                      {expandedProd ? 'Recolher' : 'Produtos'}
                      <ExpandMoreIcon
                        sx={{
                          transform: expandedProd ? 'rotate(180deg)' : 'none',
                        }}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails sx={style.AccordionDetails}>
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
                          <Typography variant="h5" gutterBottom sx={style.Text}>
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
                          <Typography variant="h5" gutterBottom sx={style.Text}>
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
                          <Typography variant="h5" gutterBottom sx={style.Text}>
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
    </div>
  );
};

export default SpecificOrder;
