import { useState } from 'react';
import { useCustomStyles } from './style';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Product } from '../../../interfaces/Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import '../Card/styles.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { formatProductPrice } from '../../../../utils';
import { ProductCategory } from '../../../interfaces/Categories';
import { Partner } from '../../../interfaces/Partner';

interface Props {
  product: Product;
  categories: ProductCategory[];
  partner: Partner[];
}
const CardProductsHome: React.FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked); // Alternar entre true e false quando o ícone é clicado
  };
  const style = useCustomStyles();
  return (
    <Card sx={style.cardStyle}>
      <Grid container>
        <Grid item xs={12} sm={12} sx={style.wishlistGridStyle}>
          <IconButton
            sx={style.wishlistButtonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
          >
            {isHovered || isClicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Link
            to={`/produto/${product.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Grid item xs={12} sm={12}>
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

            <CardContent sx={style.cardContentStyle}>
              <Typography component="div" sx={style.titleCompanyStyle}>
                {product.name}
              </Typography>
              <Typography component="div" sx={style.titlePartnerStyle}>
                <div key={product.partner.id}>
                  {product.partner.companyName}
                </div>
              </Typography>
              <Rating
                name="rating-read"
                defaultValue={product.review}
                precision={0.5}
                readOnly
              />
              <Typography component="div" sx={style.titlePriceStyle}>
                {formatProductPrice(product.price)}
              </Typography>
            </CardContent>
          </Link>
          <Link
            to={`/carrinho/${product.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Button variant="contained" sx={style.buttonStyle}>
              COMPRAR
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
};
export default CardProductsHome;
