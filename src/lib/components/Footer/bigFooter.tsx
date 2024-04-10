import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useCustomStyles } from './bigStyle';
import Logo from '../../../assets/logobig.png';
import './styles.css';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const BigFooter: React.FC = () => {
  const style = useCustomStyles();
  const linksUteis = [
    { text: 'Produtos', href: '#' },
    { text: 'Depoimentos', href: '#' },
    { text: 'Sobre nós', href: 'sobre' },
    { text: 'Login', href: '#' },
    { text: 'Cadastro', href: 'cadastro' },
  ];
  const linksAjuda = [
    { text: 'Pagamento', href: '#' },
    { text: 'Produto impróprio', href: '#' },
    { text: 'Entregas', href: '#' },
    { text: 'Suporte', href: '#' },
    { text: 'Contato', href: 'formulario_de_contato' },
  ];
  const Categorias = [
    { text: 'Doces', href: '#' },
    { text: 'Legumes', href: '#' },
    { text: 'Grãos', href: '#' },
    { text: 'Frutas', href: '#' },
    { text: 'Queijos', href: '#' },
  ];

  return (
    <Grid
      container
      maxWidth={'1200px'}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12} sm={6} md={6} sx={style.item}>
        <Box>
          <img src={Logo} className="Logo" alt="Logo" />
        </Box>
        <Box sx={{ p: 3 }}>
          <IconButton
            aria-label="Facebook"
            component="a"
            href="https://www.facebook.com/people/Do-campo-%C3%A0-mesa/100085903203530/"
            sx={style.icons}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            component="a"
            href="https://www.instagram.com/docampoamesa_oficial/"
            sx={style.icons}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Grid>

      <Grid item xs={12} sm={2} sx={style.item}>
        <Typography sx={style.titleStyle}>LINKS ÚTEIS</Typography>
        {linksUteis.map((link, index) => (
          <Grid item xs={12} sm={12} key={index} sx={style.gridLinkStyle}>
            <Link to={`/${link.href}`} style={{ textDecoration: 'none' }}>
              <Typography sx={style.linkStyle}>{link.text}</Typography>
            </Link>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12} sm={2} sx={style.item}>
        <Typography sx={style.titleStyle}>AJUDA</Typography>
        {linksAjuda.map((link, index) => (
          <Grid item xs={12} sm={12} key={index} sx={style.gridLinkStyle}>
            <Link to={`/${link.href}`} style={{ textDecoration: 'none' }}>
              <Typography sx={style.linkStyle}>{link.text}</Typography>
            </Link>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12} sm={2} sx={style.item}>
        <Typography sx={style.titleStyle}>CATEGORIAS</Typography>
        {Categorias.map((link, index) => (
          <Grid item xs={12} sm={12} key={index} sx={style.gridLinkStyle}>
            <Link to={`/${link.href}`} style={{ textDecoration: 'none' }}>
              <Typography sx={style.linkStyle}>{link.text}</Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BigFooter;
