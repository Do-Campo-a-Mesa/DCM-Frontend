import { useCustomStyles } from './style';
import { Container, Typography, Grid } from '@mui/material';
import Navbar from '../../lib/components/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import BigFooter from '../../lib/components/Footer/bigFooter';
import SmallFooter from '../../lib/components/Footer/smallFooter';
import { FAQ } from '../../lib/interfaces/FAQ';
import { getFAQ } from '../../services/faq/index';
import FAQPageList from './components/FAQlist/list';

const FAQPage: React.FC = () => {
  const [FAQs, setFAQs] = useState<FAQ[]>([]);

  useEffect(() => {
    (async () => {
      const FAQResponse = await getFAQ();
      setFAQs(FAQResponse.data);
    })();
  }, []);
  const style = useCustomStyles();

  return (
    <>
      <Navbar isHomePage={true} />
      <Container sx={style.ContainerStyle}>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h1"
              component="div"
              className="text-overlay"
              sx={style.Title}
            >
              Perguntas mais frequentes
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FAQPageList FAQs={FAQs} />
          </Grid>
        </Grid>
      </Container>
      <Container sx={style.BigFooterStyles}>
        <BigFooter />
      </Container>
      <Container sx={style.SmallFooterStyles} maxWidth={false}>
        <SmallFooter />
      </Container>
    </>
  );
};

export default FAQPage;
