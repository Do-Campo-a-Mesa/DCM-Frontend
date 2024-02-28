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
import SearchCard from '../../lib/components/CategoriesFilter/categoriesSearchCard';
import PartnerSearchCard from '../../lib/components/PartnerFilter/partnerSearchCard';
import { Partner } from '../../lib/interfaces/Partner';
import { getHomePagePartners } from '../../services/partners/index';

export default function UserSearchProducts() {
  const style = useCustomStyles();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesResponse = await getAllProductsCategories();
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsResponse = await getProducts({
          categoriesIDs:
            selectedCategoryIds.length > 0 ? selectedCategoryIds : undefined,
        });
        setProducts(productsResponse.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategoryIds]);

  const handleCategorySelectionChange = (selectedCategoryIds: number[]) => {
    setSelectedCategoryIds(selectedCategoryIds);
  };

  useEffect(() => {
    (async () => {
      const productCategoriesResponse = await getAllProductsCategories();
      setCategories(productCategoriesResponse.data);
    })();
  }, []);

  //Partners
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    (async () => {
      const partnersResponse = await getHomePagePartners();
      setPartners(partnersResponse.data);
    })();
  }, []);
  return (
    <>
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
              <SearchCard
                categories={categories}
                onCategorySelectionChange={handleCategorySelectionChange}
              ></SearchCard>
              <Typography sx={style.filterTypeStyle}>Lojas</Typography>
              <PartnerSearchCard partners={partners} />
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
