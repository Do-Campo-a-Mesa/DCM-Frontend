import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import { BusinessValues } from '../../../../lib/interfaces/BusinessValues';
import CardBusinessValue from './businessValues';
interface Props {
  businessValues: BusinessValues[];
}
const BusinessValuesCarousel: React.FC<Props> = ({ businessValues }) => {
  return (
    <Swiper
      id="swiperPartners"
      spaceBetween={10}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
    >
      {businessValues.map((businessValue: BusinessValues) => (
        <SwiperSlide key={businessValue.id}>
          <CardBusinessValue businessValue={businessValue} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BusinessValuesCarousel;
