import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Testimonial } from '../../../interfaces/Testimonial';
import Rating from '@mui/material/Rating';
import { useTheme } from '@mui/material/styles';

interface Props {
  testimonial: Testimonial;
}
const CardTestimonialsHome: React.FC<Props> = ({ testimonial }) => {
  const theme = useTheme();

  const CardStyle = {
    p: 1,
    backgroundColor: theme.status.success.tertiary,
    border: 1,
    borderColor: theme.customPalette.primary.main,
  };
  const DescribeStyle = {
    mt: '1rem',
    fontFamily: theme.customTypography.fontFamily,
    color: theme.customPalette.primary.black,
    typography: theme.customTypography.body2,
  };
  const UsernameStyle = {
    mt: '1rem',
    fontFamily: theme.customTypography.fontFamily,
    color: theme.customPalette.primary.black,
    typography: theme.customTypography.h7,
  };
  const DateStyle = {
    fontFamily: theme.customTypography.fontFamily,
    color: theme.customPalette.neutral.secondaryText,
    typography: theme.customTypography.body4,
  };
  return (
    <Card sx={CardStyle}>
      <CardContent>
        <Box>
          <Rating
            name="rating-read"
            defaultValue={testimonial.stars}
            precision={0.5}
            readOnly
          />
        </Box>
        <Box>
          <Typography sx={DescribeStyle}>{testimonial.describe}</Typography>
        </Box>
        <Box>
          <Typography sx={UsernameStyle}>{testimonial.userName}</Typography>
        </Box>
        <Box>
          <Typography sx={DateStyle}>{testimonial.date}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default CardTestimonialsHome;
