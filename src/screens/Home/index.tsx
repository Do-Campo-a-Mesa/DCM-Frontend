import './style.css';
import Navbar from '../../lib/components/Navbar/Navbar.tsx';
import MyCarousel from '../../lib/components/Carousel/carousel.tsx';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

function Home() {
  const theme = useTheme();
  return (
    <>
      <Navbar />
      <MyCarousel />
      <Typography
        className="banner-inicial"
        sx={{
          color: theme.customPalette.primary.background,
          fontFamily: theme.customTypography.fontFamily,
          typography: theme.customTypography.h1,
        }}
      >
        Do campo direto na mesa
      </Typography>
    </>
  );
}

export default Home;
