import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Partner } from '../../interfaces/Partner';
import './styles.css';

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
    typography: theme.customTypography.h4,
    color: theme.customPalette.primary.black,
  };
  const TitleBusinessStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.body3,
    color: theme.customPalette.neutral.secondaryText,
  };
  return (
    <div>
      <Card sx={CardStyle}>
        <Box sx={BoxStyle}>
          <img src={partner.logotipo} alt={partner.companyName} id="Logo" />
        </Box>
        <Box sx={BoxStyle2}>
          <CardContent sx={CardContentStyle}>
            <Typography component="div" sx={TitleCompanyStyle}>
              {partner.companyName}
            </Typography>
            <Typography component="div" sx={TitleBusinessStyle}>
              {partner.business}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default CardPartnersHome;
