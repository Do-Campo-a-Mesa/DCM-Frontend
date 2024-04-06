import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BusinessValues } from '../../../../lib/interfaces/BusinessValues';
import { useCustomStyles } from './style';

interface Props {
  businessValue: BusinessValues;
}

const CardBusinessValue: React.FC<Props> = ({ businessValue }) => {
  const style = useCustomStyles();

  return (
    <Card sx={style.CardStyle}>
      <Box sx={{ textAlign: 'center' }}>
        <Box sx={style.BoxStyle}>
          <img src={businessValue.icon} alt={businessValue.name} id="Logo" />
        </Box>
        <Box sx={style.BoxStyle2}>
          <CardContent sx={style.CardContentStyle}>
            <Typography component="div" sx={style.TitleCompanyStyle}>
              {businessValue.name}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
};

export default CardBusinessValue;
