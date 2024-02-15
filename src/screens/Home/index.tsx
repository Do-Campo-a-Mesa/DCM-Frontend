import './style.css';
import { useState } from 'react';
import Navbar from '../../lib/components/Navbar/Navbar.tsx';
import MyCarousel from '../../lib/components/Carousel/carousel.tsx';
import { Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchBar from '../../lib/components/SearchBar/searchbar.tsx';
import PartnersCarousel from '../../lib/components/PartnersCarousel/partnerscarousel.tsx';

export default function Home() {
  const theme = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const partners = [
    {
      companyName: 'Youtube',
      business: 'Site de vídeos',
      logotipo: '../../assets/logo.png',
    },
    {
      companyName: 'Linkedin',
      business: 'Rede social',
      logotipo: '../../assets/logo.png',
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
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
          },
          '@media (min-width: 600px) and (max-width: 1024px)': {
            top: '17%',
            width: '50%',
            typography: theme.customTypography.h3,
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
          },
        }}
      >
        Encontre queijos, frutas, legumes, verduras, todo tipo de alimento em
        nosso catálogo
      </Typography>
      <Container
        sx={{
          typography: theme.customTypography.h1,
          fontFamily: theme.customTypography.fontFamily,
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40%',
          textAlign: 'center',
          color: theme.customPalette.primary.background,
          lineHeight: '150%',
          padding: '10px',
          borderRadius: '5px',
          '@media (max-width: 600px)': {
            top: '15%',
            width: '90%',
            typography: theme.customTypography.h9,
          },
          '@media (min-width: 600px) and (max-width: 1024px)': {
            top: '37%',
            width: '50%',
            typography: theme.customTypography.subtitle1,
          },
        }}
      >
        <SearchBar onSearch={handleSearch} />
      </Container>
      <Container>
        <Typography
          sx={{
            typography: theme.customTypography.h3,
            fontFamily: theme.customTypography.fontFamily,
            color: theme.customPalette.primary.black,
            textAlign: 'center',
            margin: '2em',
          }}
        >
          Parceiros
        </Typography>
        <PartnersCarousel partners={partners} />
      </Container>
    </>
  );
}
