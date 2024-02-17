import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import CardPartnersHome from '../CardsPartnersHome/card';
import { Partner } from '../../interfaces/Partner';

interface Props {
  partners: Partner[];
}
const PartnersCarousel: React.FC<Props> = ({ partners }) => {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
    >
      {partners.map((partner: Partner) => (
        <SwiperSlide key={partner.id}>
          <CardPartnersHome partner={partner} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PartnersCarousel;
