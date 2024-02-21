import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
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
interface Props {
  product: Product;
}
const CardProductsHome: React.FC<Props> = ({ product }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked); // Alternar entre true e false quando o ícone é clicado
  };
  const CardStyle = {
    textAlign: 'center',
    pt: 3,
    border: 1,
    borderColor: theme.customPalette.neutral.inactive,
    backgroundColor: theme.customPalette.primary.background,
    mb: 2,
    '&:hover': {
      borderColor: theme.customPalette.primary.main,
    },
  };
  const CardContentStyle = { flex: '1 0 auto' };
  const TitleCompanyStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h5,
    color: theme.customPalette.primary.black,
    '@media (max-width: 600px)': {
      typography: theme.customTypography.h6,
    },
  };
  const TitlePartnerStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h6,
    color: theme.customPalette.neutral.secondaryText,
    mb: 2,
  };
  const TitlePriceStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h4,
    color: theme.customPalette.primary.black,
    pt: 1,
  };
  const wishlistGridStyle = {
    textAlign: 'right',
    pr: 3,
  };
  const wishlistButtonStyle = {
    color: theme.customPalette.primary.main,
  };
  const buttonStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.button,
    color: theme.customPalette.primary.main,
    backgroundColor: theme.customPalette.primary.background,
    border: 1,
    borderColor: theme.customPalette.primary.main,
    mt: 2,
    '&:hover': {
      backgroundColor: theme.customPalette.primary.main,
      color: theme.customPalette.primary.background,
    },
  };
  return (
    <div>
      <Card sx={CardStyle}>
        <Grid container>
          <Grid item xs={12} sm={12} sx={wishlistGridStyle}>
            <IconButton
              sx={wishlistButtonStyle}
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
          <Grid item xs={12} sm={12}>
            <Swiper id="swiperProducts" spaceBetween={0} slidesPerView={1}>
              {product.photos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <img src={photo} alt={`Photo ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
        <Box>
          <CardContent sx={CardContentStyle}>
            <Typography component="div" sx={TitleCompanyStyle}>
              {product.name}
            </Typography>
            <Typography component="div" sx={TitlePartnerStyle}>
              {product.partner}
            </Typography>
            <Rating
              name="rating-read"
              defaultValue={product.review}
              precision={0.5}
              readOnly
            />
            <Typography component="div" sx={TitlePriceStyle}>
              R$ {product.price},00
            </Typography>
            <Button variant="contained" sx={buttonStyle}>
              COMPRAR
            </Button>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};
export default CardProductsHome;
