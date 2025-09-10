import { useCustomStyles } from './style';
import {
  Container,
  Grid,
  IconButton,
  Rating,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import Navbar from '../../lib/components/Navbar/Navbar';
import SmallFooter from '../../lib/components/Footer/smallFooter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Product } from '../../lib/interfaces/Product';
import { getProductById } from '../../services/products';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { formatProductPrice } from '../../utils';
import React from 'react';

const SingleProduct: React.FC = () => {
  const style = useCustomStyles();
  const { id } = useParams();
  const [fetchedProduct, setFetchedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      const productId = parseInt(id) - 1;
      const product = await getProductById(productId);
      if (product) {
        console.log(productId);
        setFetchedProduct(product.data[productId]);
      } else {
        console.error('Product not found');
      }
    };
    fetchProduct();
  }, [id]);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  function getStatusEstoque(quantidade: number) {
    if (quantidade > 0) {
      return 'Em estoque';
    } else {
      return 'Estoque indisponível';
    }
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar isHomePage={false} />
      <Container sx={style.ContainerStyle}>
        {fetchedProduct ? (
          <Grid container spacing={2} sx={style.ContainerStyle}>
            <Grid item xs={12} md={6}>
              <Swiper
                id="swiperProducts"
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
              >
                {fetchedProduct.photos?.map((photo, index) => (
                  <SwiperSlide key={photo}>
                    <img src={photo} alt={`${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={11} md={11} sx={style.GridTitle}>
                  <Typography sx={style.Title}>
                    {fetchedProduct.name}
                  </Typography>
                </Grid>
                <Grid item xs={1} md={1} sx={style.WishlistGridStyle}>
                  <IconButton
                    sx={style.WishlistButtonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleClick}
                  >
                    {isHovered || isClicked ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Produto vendido e enviado por{' '}
                    <Link
                      to={`/parceiro/${fetchedProduct.store.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      {fetchedProduct.store.name}
                      <img src={fetchedProduct.store.logo} />
                    </Link>
                  </Typography>

                  <Grid item xs={12}>
                    <Typography>
                      {getStatusEstoque(fetchedProduct.quantity)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={8}>
                  <Typography>
                    {formatProductPrice(fetchedProduct.price)}
                  </Typography>
                </Grid>
                <Grid item xs={4} sx={style.RatingStyle}>
                  <Rating
                    name="rating-read"
                    defaultValue={fetchedProduct.review}
                    precision={0.5}
                    readOnly
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Quantidade</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Calcule o frete</Typography>
                </Grid>
                <Grid item xs={12} sx={style.GridTabsStyle}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="product tabs"
                    variant="scrollable"
                    scrollButtons="auto"
                    TabIndicatorProps={{
                      sx: {
                        backgroundColor: style.Theme.customPalette.primary.main,
                      },
                    }}
                  >
                    <Tab sx={style.TabStyle} label="Descrição" />
                    <Tab sx={style.TabStyle} label="Detalhes" />
                    <Tab sx={style.TabStyle} label="Dúvidas" />
                  </Tabs>

                  {value === 0 && (
                    <Typography sx={{ mt: 3 }}>
                      {fetchedProduct.description}
                    </Typography>
                  )}
                  {value === 1 && (
                    <Typography sx={{ mt: 3 }}>
                      {fetchedProduct.unit_of_measurement}
                    </Typography>
                  )}
                  {value === 2 && (
                    <Typography sx={{ mt: 3 }}>
                      formulario de perguntas
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Container>
      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
};

export default SingleProduct;
