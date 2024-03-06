import { useCustomStyles } from './style';
import { Container, Grid, Typography } from '@mui/material';
import Navbar from '../../lib/components/Navbar/Navbar';
import SmallFooter from '../../lib/components/Footer/smallFooter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../lib/interfaces/Product';
import { getProductById } from '../../services/products/mock';

const SingleProduct: React.FC = () => {
  const style = useCustomStyles();
  const { id } = useParams();
  const [fetchedProduct, setFetchedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      const productId = parseInt(id, 10);
      const product = await getProductById(productId);
      if (product) {
        setFetchedProduct(product);
      } else {
        console.error('Product not found');
      }
    };
    fetchProduct();
  }, [id]);
  if (fetchedProduct === null) {
    return (
      <>
        <Navbar isHomePage={false} />
        <Container sx={style.ContainerStyle}>
          <Typography>Loading...</Typography>
        </Container>
        <Container sx={style.SmallFooterStyle}>
          <SmallFooter />
        </Container>
      </>
    );
  }
  return (
    <>
      <Navbar isHomePage={false} />
      <Container sx={style.ContainerStyle}>
        <Grid container>
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
              {fetchedProduct.photos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <img src={photo} alt={`Photo ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item xs={10}>
              <Typography sx={style.Title}>{fetchedProduct.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography sx={style.Title}>{fetchedProduct.name}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
};

export default SingleProduct;
