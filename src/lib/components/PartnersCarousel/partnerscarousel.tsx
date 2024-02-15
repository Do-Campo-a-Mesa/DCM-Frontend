import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import CardPartnersHome from '../CardsPartnersHome/card';

interface Partner {
  companyName: string;
  business: string;
  logotipo: string;
}

interface Props {
  partners: Partner[];
}
const PartnersCarousel: React.FC<Props> = ({ partners }) => {
  return (
    <Carousel>
      {partners.map((partner: Partner, index: number) => (
        <div key={index}>
          <CardPartnersHome partner={partner} />
        </div>
      ))}
    </Carousel>
  );
};

export default PartnersCarousel;
