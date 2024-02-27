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
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);
  useEffect(() => {
    (async () => {
      const productsResponse = await getProducts({
        categoriesIDs:
          selectedCategoryId != 0 ? [selectedCategoryId] : undefined,
      });

      setProducts(productsResponse.data);
    })();
  }, [selectedCategoryId]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categories, setCategories] = useState<ProductCategory[]>([]);
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
                categoryId={selectedCategoryId}
                setCategory={setSelectedCategoryId}
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
