import './style.css';
import Navbar from '../../lib/components/Navbar/Navbar.tsx';
import MyCarousel from '../../lib/components/Carousel/carousel.tsx';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
function Home() {
  const theme = useTheme();
  return (
    <>
      <Navbar />
      <MyCarousel />
      <Typography
        variant="h1"
        component="div"
        className="text-overlay"
        sx={{
          typography: theme.customTypography.h1,
          fontFamily: theme.customTypography.fontFamily,
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          textAlign: 'center',
          color: 'white',
          lineHeight: '150%',
          padding: '10px',
          borderRadius: '5px',
          '@media (max-width: 600px)': {
            top: '15%',
            typography: theme.customTypography.h4,
            //fontSize: '0.8rem',
          },
        }}
      >
        O melhor do campo direto na mesa
      </Typography>
      <Typography
        variant="h1"
        component="div"
        className="text-overlay"
        sx={{
          typography: theme.customTypography.subtitle1,
          fontFamily: theme.customTypography.fontFamily,
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          textAlign: 'center',
          color: 'white',

          padding: '10px',
          borderRadius: '5px',
          '@media (max-width: 600px)': {
            top: '25%',
            typography: theme.customTypography.h9,
          },
        }}
      >
        Encontre queijos, frutas, legumes, verduras, todo tipo de alimento em
        nosso catálogo
      </Typography>
    </>
  );
}

export default Home;
