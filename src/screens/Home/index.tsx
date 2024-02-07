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
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40%',
          textAlign: 'center',
          color: 'white',
          lineHeight: '150%',
          padding: '10px',
          borderRadius: '5px',
          '@media (max-width: 600px)': {
            top: '10%',
            width: '90%',
            lineHeight: '40%',
            typography: theme.customTypography.h6,
            //fontSize: '0.8rem',
          },
          '@media (min-width: 600px) and (max-width: 1024px)': {
            top: '17%',
            width: '50%',
            typography: theme.customTypography.h3,
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
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40%',
          textAlign: 'center',
          lineHeight: '150%',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          '@media (max-width: 600px)': {
            top: '15%',
            width: '90%',
            typography: theme.customTypography.h9,
          },
          '@media (min-width: 600px) and (max-width: 1024px)': {
            top: '27%',
            width: '50%',
            typography: theme.customTypography.subtitle1,
            //fontSize: '0.8rem',
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
