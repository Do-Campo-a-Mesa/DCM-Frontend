import React, { useState } from 'react';
import { useCustomStyles } from './style';
import { Container, Grid } from '@mui/material';
import Navbar from '../../../../lib/components/Navbar/Navbar';
import SmallFooter from '../../../../lib/components/Footer/smallFooter';
import SideMenu from '../sideMenu';
import PersonalInfo from '../personalData';
import PersonalAddressList from '../PersonalAddressList';
import PersonalCardsList from '../PersonalCardsList';
import PersonalWishlist from '../personalWishlist';
//import { Link } from 'react-router-dom';
const NewAddress: React.FC = () => {
  const style = useCustomStyles();
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  const [showPersonalAddress, setShowPersonalAddress] = useState(false);
  const [showPersonalCards, setShowPersonalCards] = useState(false);
  const [showPersonalWishlist, setShowPersonalWishlist] = useState(false);
  const [selectedItem, setSelectedItem] = useState('dados-pessoais');
  const handleItemClick = (key: string) => {
    setSelectedItem(key);
    if (key === 'dados-pessoais') {
      setShowPersonalInfo(true);
      setShowPersonalAddress(false);
      setShowPersonalCards(false);
      setShowPersonalWishlist(false);
    } else if (key === 'enderecos') {
      setShowPersonalInfo(false);
      setShowPersonalAddress(true);
      setShowPersonalCards(false);
      setShowPersonalWishlist(false);
    } else if (key === 'cartoes') {
      setShowPersonalInfo(false);
      setShowPersonalAddress(false);
      setShowPersonalCards(true);
      setShowPersonalWishlist(false);
    } else if (key === 'wishlist') {
      setShowPersonalInfo(false);
      setShowPersonalAddress(false);
      setShowPersonalCards(false);
      setShowPersonalWishlist(true);
    }
  };
  return (
    <>
      <Navbar isHomePage={false} />
      <Grid container sx={style.Content}>
        <SideMenu
          selectedItem={selectedItem}
          handleItemClick={handleItemClick}
        />

        {showPersonalInfo && (
          <Grid container item xs={12} sm={12} md={9} sx={style.ContainerStyle}>
            <PersonalInfo />
          </Grid>
        )}
        {showPersonalAddress && (
          <Grid container item xs={12} sm={12} md={9} sx={style.ContainerStyle}>
            <PersonalAddressList />
          </Grid>
        )}
        {showPersonalCards && (
          <Grid container item xs={12} sm={12} md={9} sx={style.ContainerStyle}>
            <PersonalCardsList />
          </Grid>
        )}
        {showPersonalWishlist && (
          <Grid container item xs={12} sm={12} md={9} sx={style.ContainerStyle}>
            <PersonalWishlist />
          </Grid>
        )}
      </Grid>

      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
};

export default NewAddress;
