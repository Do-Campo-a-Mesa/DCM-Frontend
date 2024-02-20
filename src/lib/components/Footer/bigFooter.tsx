import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@mui/material/styles';
import Logo from '../../../assets/logobig.png';
import './styles.css';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const BigFooter: React.FC = () => {
  const theme = useTheme();
  const linksUteis = [
    { text: 'Produtos', href: '#' },
    { text: 'Depoimentos', href: '#' },
    { text: 'Sobre nós', href: '#' },
    { text: 'Login', href: '#' },
    { text: 'Cadastro', href: '#' },
  ];
  const linksAjuda = [
    { text: 'Pagamento', href: '#' },
    { text: 'Produto impróprio', href: '#' },
    { text: 'Entregas', href: '#' },
    { text: 'Suporte', href: '#' },
    { text: 'Contato', href: '#' },
  ];
  const Categorias = [
    { text: 'Doces', href: '#' },
    { text: 'Legumes', href: '#' },
    { text: 'Grãos', href: '#' },
    { text: 'Frutas', href: '#' },
    { text: 'Queijos', href: '#' },
  ];

  const item = {
    textAlign: 'left',
    padding: theme.spacing(2),
    '@media (max-width: 600px)': {
      textAlign: 'center',
    },
  };
  const icons = {
    color: theme.customPalette.primary.main,
    '& .css-i4bv87-MuiSvgIcon-root': {
      fontSize: '2rem',
    },
  };
  const titleStyle = {
    color: theme.customPalette.primary.black,
    pb: 2,
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h7,
  };
  const GridLinkStyle = {
    pt: 1,
  };
  const LinkStyle = {
    typography: theme.customTypography.body4,
    fontFamily: theme.customTypography.fontFamily,
    color: theme.customPalette.neutral.secondaryText,
    textDecoration: 'none',
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} sx={item}>
        <Box>
          <img src={Logo} className="Logo" alt="Logo" />
        </Box>
        <Box sx={{ p: 3 }}>
          <IconButton
            aria-label="Facebook"
            component="a"
            href="https://www.facebook.com/people/Do-campo-%C3%A0-mesa/100085903203530/"
            sx={icons}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            component="a"
            href="https://www.instagram.com/docampoamesa_oficial/"
            sx={icons}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Grid>

      <Grid item xs={12} sm={2} sx={item}>
        <Typography sx={titleStyle}>LINKS ÚTEIS</Typography>
        {linksUteis.map((link, index) => (
          <Grid item xs={12} sm={12} key={index} sx={GridLinkStyle}>
            <Link href={link.href} color="inherit" sx={LinkStyle}>
              {link.text}
            </Link>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12} sm={2} sx={item}>
        <Typography sx={titleStyle}>AJUDA</Typography>
        {linksAjuda.map((link, index) => (
          <Grid item xs={12} sm={12} key={index} sx={GridLinkStyle}>
            <Link href={link.href} color="inherit" sx={LinkStyle}>
              {link.text}
            </Link>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12} sm={2} sx={item}>
        <Typography sx={titleStyle}>CATEGORIAS</Typography>
        {Categorias.map((link, index) => (
          <Grid item xs={12} sm={12} key={index} sx={GridLinkStyle}>
            <Link href={link.href} color="inherit" sx={LinkStyle}>
              {link.text}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BigFooter;
