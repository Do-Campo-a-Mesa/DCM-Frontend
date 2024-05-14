import { Container, Grid, IconButton } from '@mui/material';

import { useCustomStyles } from './style';
import SmallFooter from '../../lib/components/Footer/smallFooter';

import Navbar from '../../lib/components/Navbar/Navbar';
import DrawerProfile from '../../lib/components/DrawerProfiles';
import { useState } from 'react';
import ArrowNextIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MiniDrawer from '../../lib/components/DrawerProfiles/MiniDrawer';
import PersonalInfo from './components/personalData';
import PersonalAddress from './components/personalAddress';
export default function PersonalDataClient() {
  const style = useCustomStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isMiniDrawerOpen, setIsMiniDrawerOpen] = useState(false);
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  const [showPersonalAddress, setShowPersonalAddress] = useState(false);
  const openDrawer = () => {
    setIsDrawerOpen(true);
    setIsMiniDrawerOpen(false);
  };

  const openMiniDrawer = () => {
    setIsDrawerOpen(false);
    setIsMiniDrawerOpen(true);
  };
  const [gridSize, setGridSize] = useState({ sm: 4, md: 4 });
  const [gridItemSize, setGridItemSize] = useState({ sm: 8, md: 8 });
  const toggleGridSize = () => {
    setGridSize((gridSize) => ({
      sm: gridSize.sm === 4 ? 3 : 4,
      md: gridSize.md === 4 ? 3 : 4,
    }));
  };
  const toggleGridItemSize = () => {
    setGridItemSize((gridItemSize) => ({
      sm: gridItemSize.sm === 8 ? 6 : 8,
      md: gridItemSize.md === 8 ? 6 : 8,
    }));
  };
  const handleItemClick = (key: string) => {
    if (key === 'dados-pessoais') {
      setShowPersonalInfo(true);
      setShowPersonalAddress(false);
    } else if (key === 'enderecos') {
      setShowPersonalInfo(false);
      setShowPersonalAddress(true);
    }
  };
  return (
    <>
      <Navbar isHomePage={false} />
      <Container sx={style.Content}>
        <Grid
          container
          item
          sm={gridSize.sm}
          md={gridSize.md}
          sx={style.Content1}
        >
          <Grid
            item
            xs={12}
            sm={gridItemSize.sm}
            md={gridItemSize.sm}
            sx={style.Item}
          >
            {isDrawerOpen && (
              <DrawerProfile
                isOpen={true}
                onClose={openMiniDrawer}
                onItemClick={handleItemClick}
                backButton={
                  <IconButton
                    onClick={() => {
                      openMiniDrawer();
                      toggleGridSize();
                      toggleGridItemSize();
                    }}
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                      position: 'absolute',
                      right: '0',
                      zIndex: '1',
                    }}
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
                    onClick={() => {
                      openDrawer();
                      toggleGridSize();
                      toggleGridItemSize();
                    }}
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
        {showPersonalInfo && (
          <Grid container sx={style.ContainerStyle}>
            <PersonalInfo />
          </Grid>
        )}
        {showPersonalAddress && (
          <Grid container sx={style.ContainerStyle}>
            <PersonalAddress />
          </Grid>
        )}
      </Container>
      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
}
