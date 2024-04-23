import { Container, Grid, IconButton } from '@mui/material';

import { useCustomStyles } from './style';
import SmallFooter from '../../lib/components/Footer/smallFooter';

import Navbar from '../../lib/components/Navbar/Navbar';
import DrawerProfile from '../../lib/components/DrawerProfiles';
import { useState } from 'react';
import ArrowNextIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MiniDrawer from '../../lib/components/DrawerProfiles/MiniDrawer';
export default function PersonalDataClient() {
  const style = useCustomStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isMiniDrawerOpen, setIsMiniDrawerOpen] = useState(false);
  const openDrawer = () => {
    setIsDrawerOpen(true);
    setIsMiniDrawerOpen(false);
  };

  const openMiniDrawer = () => {
    setIsDrawerOpen(false);
    setIsMiniDrawerOpen(true);
  };
  return (
    <>
      <Navbar isHomePage={false} />
      <Grid
        container
        maxWidth={'1000px'}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={4} md={4}>
          {isDrawerOpen && (
            <DrawerProfile
              isOpen={true}
              onClose={openMiniDrawer}
              backButton={
                <IconButton
                  onClick={openMiniDrawer}
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ position: 'absolute', left: '0', zIndex: '1' }}
                >
                  <ArrowBackIcon />
                </IconButton>
              }
            />
          )}
          {isMiniDrawerOpen && (
            <MiniDrawer
              isOpen={true}
              onClose={openDrawer}
              forwardButton={
                <IconButton
                  onClick={openDrawer}
                  color="inherit"
                  aria-label="menu"
                  sx={{ position: 'absolute', right: '0', zIndex: '1' }}
                >
                  <ArrowNextIcon />
                </IconButton>
              }
            />
          )}
        </Grid>
      </Grid>
      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
}
