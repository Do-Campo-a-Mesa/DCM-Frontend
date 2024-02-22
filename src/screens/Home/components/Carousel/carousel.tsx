import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Carousel/style.css';
import Image1 from '../../../../assets/pexels-pattama-wallech-2661996 2.png';

const images = [Image1, Image1, Image1];

const MyCarousel: React.FC = () => {
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
      {images.map((image, index) => (
        <div key={image}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="carousel-image"
          />
          <div id="overlay"></div>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
