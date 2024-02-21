import './style.css';
import { useEffect, useState } from 'react';
import Navbar from '../../lib/components/Navbar/Navbar.tsx';
import MyCarousel from '../../lib/components/Carousel/carousel.tsx';
import { Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchBar from '../../lib/components/SearchBar/searchbar.tsx';
import PartnersCarousel from './components/Partners/PartnersCarousel/partnerscarousel.tsx';
import { getHomePagePartners } from '../../services/partners/index.ts';
import { getHomePageTestimonials } from '../../services/testimonials/index.ts';
import { getAllProductsCategories } from '../../services/categories/index.ts';
import { Partner } from '../../lib/interfaces/Partner.ts';
import TestimonialsCarousel from './components/Testimonials/TestimonialsCarousel/carousel.tsx';
import { Testimonial } from '../../lib/interfaces/Testimonial.ts';
import { ProductCategory } from '../../lib/interfaces/Categories.ts';
import SmallFooter from '../../lib/components/Footer/smallFooter.tsx';
import BigFooter from '../../lib/components/Footer/bigFooter.tsx';
import CategoriesList from './components/CategoriesList/index.tsx';
import { Product } from '../../lib/interfaces/Product.ts';
import { getHomePageProducts } from '../../services/products/index.ts';
import ProductList from '../../lib/components/Products/List/listProducts.tsx';

export default function Home() {
  const theme = useTheme();

  //Products
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const productsResponse = await getHomePageProducts();
      setProducts(productsResponse.data);
    })();
  }, []);

  //Partners
  const [partners, setPartners] = useState<Partner[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categories, setCategories] = useState<ProductCategory[]>([]);

  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const partnersResponse = await getHomePagePartners();
      setPartners(partnersResponse.data);
    })();
  }, []);

  //Testimonials
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  useEffect(() => {
    (async () => {
      const testimonialsResponse = await getHomePageTestimonials();
      setTestimonials(testimonialsResponse.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const productCategoriesResponse = await getAllProductsCategories();
      setCategories(productCategoriesResponse.data);
    })();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const BannerTitleStyle = {
    typography: theme.customTypography.h1,
    fontFamily: theme.customTypography.fontFamily,
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    textAlign: 'center',
    color: 'white',
    lineHeight: '150%',
    padding: '10px',
    borderRadius: '5px',
    '@media (max-width: 600px)': {
      top: '10%',
      width: '90%',
      lineHeight: '40%',
      typography: theme.customTypography.h6,
    },
    '@media (min-width: 600px) and (max-width: 1024px)': {
      top: '17%',
      width: '50%',
      typography: theme.customTypography.h3,
    },
  };
  const BannerSubtitleStyle = {
    typography: theme.customTypography.subtitle1,
    fontFamily: theme.customTypography.fontFamily,
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    textAlign: 'center',
    lineHeight: '150%',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    '@media (max-width: 600px)': {
      top: '15%',
      width: '90%',
      typography: theme.customTypography.h9,
    },
    '@media (min-width: 600px) and (max-width: 1024px)': {
      top: '27%',
      width: '50%',
      typography: theme.customTypography.subtitle1,
    },
  };
  const SearchContainerStyle = {
    typography: theme.customTypography.h1,
    fontFamily: theme.customTypography.fontFamily,
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    textAlign: 'center',
    color: theme.customPalette.primary.background,
    lineHeight: '150%',
    padding: '10px',
    borderRadius: '5px',
    '@media (max-width: 600px)': {
      top: '15%',
      width: '90%',
      typography: theme.customTypography.h9,
    },
    '@media (min-width: 600px) and (max-width: 1024px)': {
      top: '37%',
      width: '50%',
      typography: theme.customTypography.subtitle1,
    },
  };
  const SectionTitleStyle = {
    typography: theme.customTypography.h3,
    fontFamily: theme.customTypography.fontFamily,
    color: theme.customPalette.primary.black,
    textAlign: 'center',
    mt: '3em',
    mb: '1em',
    '@media (max-width: 600px)': {
      typography: theme.customTypography.h4,
    },
  };
  const SectionSubtitleStyle = {
    typography: theme.customTypography.h6,
    fontFamily: theme.customTypography.fontFamily,
    color: theme.customPalette.neutral.secondaryText,
    textAlign: 'center',
    mb: '2em',
  };
  const SmallFooterStyles = {
    p: 0,
    mt: 0,
    '@media (min-width: 600px)': {
      p: 0,
    },
  };
  const BigFooterStyles = {
    mt: '10em',
  };
  return (
    <>
      <Navbar />
      <MyCarousel />
      <Typography
        variant="h1"
        component="div"
        className="text-overlay"
        sx={BannerTitleStyle}
      >
        O melhor do campo direto na mesa
      </Typography>
      <Typography
        variant="h1"
        component="div"
        className="text-overlay"
        sx={BannerSubtitleStyle}
      >
        Encontre queijos, frutas, legumes, verduras, todo tipo de alimento em
        nosso catálogo
      </Typography>
      <Container sx={SearchContainerStyle}>
        <SearchBar onSearch={handleSearch} />
      </Container>
      <Container>
        <Typography sx={SectionTitleStyle}>Produtos</Typography>
        <CategoriesList
          categories={categories}
          categoryId={selectedCategoryId}
          setCategory={setSelectedCategoryId}
        />
        <ProductList products={products}></ProductList>
      </Container>
      <Container>
        <Typography sx={SectionTitleStyle}>Parceiros</Typography>
        <PartnersCarousel partners={partners} />
      </Container>
      <Container>
        <Typography sx={SectionTitleStyle}>Depoimentos</Typography>
        <Typography sx={SectionSubtitleStyle}>
          Veja o que nossos clientes falam sobre nós
        </Typography>
        <TestimonialsCarousel testimonials={testimonials} />
      </Container>
      <Container sx={BigFooterStyles}>
        <BigFooter></BigFooter>
      </Container>
      <Container sx={SmallFooterStyles} maxWidth={false}>
        <SmallFooter></SmallFooter>
      </Container>
    </>
  );
}
