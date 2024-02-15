import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Partner {
  companyName: string;
  business: string;
  logotipo: string;
}

interface Props {
  partner: Partner;
}

const CardPartnersHome: React.FC<Props> = ({ partner }) => {
  const theme = useTheme();

  return (
    <div>
      <Card sx={{ display: 'flex', p: 2, border: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <img
            src={partner.logotipo}
            alt={partner.companyName}
            style={{ width: '45px', height: '45px' }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography
              component="div"
              sx={{
                fontFamily: theme.customTypography.fontFamily,
                typography: theme.customTypography.h4,
                color: theme.customPalette.primary.black,
              }}
            >
              {partner.companyName}
            </Typography>
            <Typography
              component="div"
              sx={{
                fontFamily: theme.customTypography.fontFamily,
                typography: theme.customTypography.h8,
                color: theme.customPalette.neutral.secondaryText,
              }}
            >
              {partner.business}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default CardPartnersHome;
