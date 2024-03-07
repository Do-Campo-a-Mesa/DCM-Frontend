import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Partner } from '../../../../../lib/interfaces/Partner';
import './styles.css';
import { Link } from 'react-router-dom';

interface Props {
  partner: Partner;
}

const CardPartnersHome: React.FC<Props> = ({ partner }) => {
  const theme = useTheme();

  const CardStyle = {
    display: 'flex',
    p: 2,
    border: 1,
    borderColor: theme.customPalette.primary.main,
    backgroundColor: theme.customPalette.primary.background,
    mb: 2,
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
    cursor: 'pointer',
  };
  const BoxStyle = {
    display: 'flex',
    alignItems: 'center',
    pl: 1,
    pb: 1,
  };
  const BoxStyle2 = {
    display: 'flex',
    flexDirection: 'column',
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
  const TitleBusinessStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.body3,
    color: theme.customPalette.neutral.secondaryText,
  };

  return (
    <Link to={`/empresa/${partner.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={CardStyle}>
        <Box sx={BoxStyle}>
          <img src={partner.logo} alt={partner.name} id="Logo" />
        </Box>
        <Box sx={BoxStyle2}>
          <CardContent sx={CardContentStyle}>
            <Typography component="div" sx={TitleCompanyStyle}>
              {partner.name}
            </Typography>
            <Typography component="div" sx={TitleBusinessStyle}>
              {partner.business}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};

export default CardPartnersHome;
