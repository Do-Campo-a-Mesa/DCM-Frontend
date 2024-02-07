import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Carousel/style.css';

const images = [
  'https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Slide+1',
  'https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Slide+2',
  'https://via.placeholder.com/600x300/5733FF/FFFFFF?text=Slide+3',
];

const MyCarousel: React.FC = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        showIndicators={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
            <div id="overlay"></div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default MyCarousel;
