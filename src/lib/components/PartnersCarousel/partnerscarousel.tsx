import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import CardPartnersHome from '../CardsPartnersHome/card';
import { Partner } from '../../interfaces/Partner';

interface Props {
  partners: Partner[];
}
const PartnersCarousel: React.FC<Props> = ({ partners }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
      showIndicators={false}
    >
      {partners.map((partner: Partner) => (
        <div key={partner.id}>
          <CardPartnersHome partner={partner} />
        </div>
      ))}
    </Carousel>
  );
};

export default PartnersCarousel;
