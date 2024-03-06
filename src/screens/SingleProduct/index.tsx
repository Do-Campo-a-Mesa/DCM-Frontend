import { useCustomStyles } from './style';
import { Container } from '@mui/material';
import Navbar from '../../lib/components/Navbar/Navbar';
import SmallFooter from '../../lib/components/Footer/smallFooter';
//import { Swiper, SwiperSlide } from 'swiper/react';
//import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Product } from '../../lib/interfaces/Product';
interface Props {
  product: Product;
}
const SingleProduct: React.FC<Props> = () => {
  const style = useCustomStyles();

  return (
    <>
      <Navbar isHomePage={false} />
      <Container sx={style.ContainerStyle}></Container>
      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
};
export default SingleProduct;
