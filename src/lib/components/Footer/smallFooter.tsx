import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const SmallFooter: React.FC = () => {
  const theme = useTheme();
  const copyright = {
    backgroundColor: theme.customPalette.primary.main,
    Typography: theme.customTypography.body4,
    fontFamily: theme.customTypography.fontFamily,
    color: theme.customPalette.primary.background,
    p: 2,
    textAlign: 'center',
  };
  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      item
      xs={12}
      md={12}
      sm={12}
    >
      <Typography sx={copyright}>Copyright 2023 - Do Campo à Mesa</Typography>
    </Grid>
  );
};

export default SmallFooter;
