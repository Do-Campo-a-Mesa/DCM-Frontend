import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Testimonial } from '../../../interfaces/Testimonial';
import CardTestimonialsHome from '../TestimonialsCard/cards';
import './styles.css';
interface Props {
  testimonials: Testimonial[];
}
const TestimonialsCarousel: React.FC<Props> = ({ testimonials }) => {
  return (
    <Swiper
      rewind={true}
      spaceBetween={20}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {testimonials.map((testimonial: Testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <CardTestimonialsHome testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsCarousel;
