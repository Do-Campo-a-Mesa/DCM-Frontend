import { Container, Grid } from '@mui/material';

import { useCustomStyles } from './style';
import SmallFooter from '../../lib/components/Footer/smallFooter';
import Navbar from '../../lib/components/Navbar/Navbar';
//import { useState } from 'react';
import PersonalInfo from './components/personalData';
//import PersonalWishlist from './components/personalWishlist';
//import PersonalCardsList from './components/PersonalCardsList';
//import PersonalAddressList from './components/PersonalAddressList';
import SideMenu from '../../lib/components/SideMenu';
//import FormNewAddress from './components/newAddress/Form';
export default function PersonalDataClient() {
  const style = useCustomStyles();
  /*const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  const [showPersonalAddress, setShowPersonalAddress] = useState(false);
  const [showFormNewAddress, setShowFormNewAddress] = useState(false);
  const [showPersonalCards, setShowPersonalCards] = useState(false);
  const [showPersonalWishlist, setShowPersonalWishlist] = useState(false);
  const [selectedItem, setSelectedItem] = useState('dados-pessoais');
  const handleItemClick = (key: string) => {
    setSelectedItem(key);
    setShowFormNewAddress(false);
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
  const handleNewAddressClick = () => {
    setShowFormNewAddress(true);
    setShowPersonalInfo(false);
    setShowPersonalAddress(false);
    setShowPersonalCards(false);
    setShowPersonalWishlist(false);
  };*/
  return (
    <>
      <Navbar isHomePage={false} />
      <Grid container sx={style.Content}>
        <SideMenu />
        <Grid container item xs={12} sm={12} md={9} sx={style.ContainerStyle}>
          <PersonalInfo />
        </Grid>
      </Grid>
      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
}
