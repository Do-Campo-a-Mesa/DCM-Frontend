import { Container } from '@mui/material';

import { useCustomStyles } from './style';
import SmallFooter from '../../lib/components/Footer/smallFooter';

import Navbar from '../../lib/components/Navbar/Navbar';

export default function PersonalDataClient() {
  const style = useCustomStyles();

  return (
    <>
      <Navbar isHomePage={false} />

      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
}
