import './style.css';
import Navbar from '../../lib/components/Navbar/Navbar.tsx';
import MyCarousel from '../../lib/components/Carousel/carousel.tsx';

function Home() {
  return (
    <>
      <Navbar />
      <MyCarousel />
    </>
  );
}

export default Home;
