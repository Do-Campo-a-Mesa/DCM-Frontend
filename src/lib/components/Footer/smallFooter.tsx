import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useCustomStyles } from './smallStyle';

const SmallFooter: React.FC = () => {
  const style = useCustomStyles();

  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      item
      xs={12}
      md={12}
      sm={12}
    >
      <Typography sx={style.copyright}>
        Copyright 2023 - Do Campo à Mesa
      </Typography>
    </Grid>
  );
};

export default SmallFooter;
