import { useCustomStyles } from './style';
import { Container, Grid, Typography } from '@mui/material';
import Navbar from '../../lib/components/Navbar/Navbar';
import SmallFooter from '../../lib/components/Footer/smallFooter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct: React.FC = () => {
  const style = useCustomStyles();
  const { id } = useParams();
  const productId = id ? parseInt(id, 10) : undefined;
  useEffect(() => {
    console.log({ productId });
  });
  return (
    <>
      <Navbar isHomePage={false} />
      <Container sx={style.ContainerStyle}>
        {/*<Grid container>
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
              {product.photos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <img src={photo} alt={`Photo ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>            
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item xs={10}>
              <Typography sx={style.Title}>{product.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography sx={style.Title}>{product.name}</Typography>
            </Grid>
          </Grid>
        </Grid>*/}
      </Container>
      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
};

export default SingleProduct;
