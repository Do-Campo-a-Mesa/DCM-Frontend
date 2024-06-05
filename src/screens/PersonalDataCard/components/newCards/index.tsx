import { Container, Grid } from '@mui/material';

import { useCustomStyles } from './style';
import SmallFooter from '../../../../lib/components/Footer/smallFooter';
import Navbar from '../../../../lib/components/Navbar/Navbar';
import SideMenu from '../../../../lib/components/SideMenu';
import FormNewCards from './Form';
export default function NewCards() {
  const style = useCustomStyles();
  return (
    <>
      <Navbar isHomePage={false} />
      <Grid container sx={style.Content}>
        <SideMenu />
        <Grid container item xs={12} sm={12} md={9} sx={style.ContainerStyle}>
          <FormNewCards />
        </Grid>
      </Grid>
      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
}
