import './styles.css';
import ProductsList from '../../lib/components/Products/List/listProducts';
import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Product } from '../../lib/interfaces/Product';
import { getProducts } from '../../services/products';
import { getAllProductsCategories } from '../../services/categories';
import { ProductCategory } from '../../lib/interfaces/Categories';

import { useCustomStyles } from './style';
import SmallFooter from '../../lib/components/Footer/smallFooter';
import CategorySearchCard from '../../lib/components/CategoriesFilter/categoriesSearchCard';
import PartnerSearchCard from '../../lib/components/PartnerFilter/partnerSearchCard';
import { Partner } from '../../lib/interfaces/Partner';
import { getHomePagePartners } from '../../services/partners/index';
import PriceSearchCard from '../../lib/components/PriceFilter/priceRange';
import Navbar from '../../lib/components/Navbar/Navbar';

export default function UserSearchProducts() {
  const style = useCustomStyles();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [selectedPartners, setSelectedPartners] = useState<number[]>([]);

  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const categoriesResponse = await getAllProductsCategories();
        setCategories(categoriesResponse.data);
        const partnersResponse = await getHomePagePartners();
        setPartners(partnersResponse.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchInfo();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsResponse = await getProducts({
          categoriesIDs:
            selectedCategoryIds.length > 0 ? selectedCategoryIds : undefined,
          partners: selectedPartners.length > 0 ? selectedPartners : undefined,
          price_min: priceRange[0],
          price_max: priceRange[1],
        });
        setProducts(productsResponse.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategoryIds, selectedPartners, priceRange]); // Adiciona priceRange como dependência

  const handleCategorySelectionChange = (selectedCategoryIds: number[]) => {
    setSelectedCategoryIds(selectedCategoryIds);
  };
  const handlePartnerSelectionChange = (selectedPartners: number[]) => {
    setSelectedPartners(selectedPartners);
  };

  useEffect(() => {
    (async () => {
      const productCategoriesResponse = await getAllProductsCategories();
      setCategories(productCategoriesResponse.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const productPartnersResponse = await getHomePagePartners();
      setPartners(productPartnersResponse.data);
    })();
  }, []);

  return (
    <>
      <Navbar isHomePage={false} />
      <Container sx={style.containerStyle}>
        <Grid
          container
          maxWidth={'1600px'}
          minHeight={'100vh'}
          sx={style.gridStyle}
        >
          <Grid item sm={3}>
            <Typography sx={style.subtitle}>Filtrar</Typography>
            <Grid item sm={12}>
              <Typography sx={style.filterTypeStyle}>Categorias</Typography>
              <CategorySearchCard
                categories={categories}
                onCategorySelectionChange={handleCategorySelectionChange}
              />
              <Typography sx={style.filterTypeStyle}>Lojas</Typography>
              <PartnerSearchCard
                partners={partners}
                onPartnerSelectionChange={handlePartnerSelectionChange}
              />
              <Typography sx={style.filterTypeStyle}>Preço</Typography>
              <PriceSearchCard
                products={products}
                onFilterChange={setPriceRange}
              />
            </Grid>
          </Grid>
          <Grid item sm={9}>
            <Typography sx={style.title}>resultados</Typography>
            <Grid item sm={6}></Grid>
            <Grid item sm={6}></Grid>
            <ProductsList products={products} />
          </Grid>
        </Grid>
      </Container>
      <Container sx={style.SmallFooterStyle}>
        <SmallFooter />
      </Container>
    </>
  );
}
