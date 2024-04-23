import { Box, Container, IconButton } from '@mui/material';

import { useCustomStyles } from './style';
import SmallFooter from '../../lib/components/Footer/smallFooter';

import Navbar from '../../lib/components/Navbar/Navbar';
import DrawerProfile from '../../lib/components/DrawerProfiles';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function PersonalDataClient() {
  const style = useCustomStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <Navbar isHomePage={false} />
      <Box>
        {!isDrawerOpen && (
          <IconButton
            onClick={toggleDrawer}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <DrawerProfile
          isOpen={isDrawerOpen}
          onClose={toggleDrawer}
          backButton={
            <IconButton
              onClick={toggleDrawer}
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ position: 'absolute', left: '0', zIndex: '1' }}
            >
              <ArrowBackIcon />
            </IconButton>
          }
        ></DrawerProfile>
      </Box>
      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
}
