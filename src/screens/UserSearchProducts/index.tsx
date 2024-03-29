import ProductsList from '../../lib/components/Products/List/listProducts';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Product } from '../../lib/interfaces/Product';
import { getProducts } from '../../services/products';
import { getAllProductsCategories } from '../../services/categories';
import { ProductCategory } from '../../lib/interfaces/Categories';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCustomStyles } from './style';
import SmallFooter from '../../lib/components/Footer/smallFooter';
import CategorySearchCard from '../../lib/components/CategoriesFilter/categoriesSearchCard';
import PartnerSearchCard from '../../lib/components/PartnerFilter/partnerSearchCard';
import { Partner } from '../../lib/interfaces/Partner';
import { getHomePagePartners } from '../../services/partners/index';
import PriceSearchCard from '../../lib/components/PriceFilter/priceRange';
import Navbar from '../../lib/components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';

export default function UserSearchProducts() {
  const style = useCustomStyles();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);

  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsResponse = await getProducts({
          categoriesIDs:
            selectedCategoryIds.length > 0 ? selectedCategoryIds : undefined,
          partners: selectedPartners.length > 0 ? selectedPartners : undefined,
          search_string: searchTerm ?? undefined,
          price_min: priceRange[0],
          price_max: priceRange[1],
        });
        setProducts(productsResponse.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategoryIds, selectedPartners, priceRange, searchTerm]); // Adiciona priceRange como dependência

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

  const handleCategorySelectionChange = (selectedCategoryIds: number[]) => {
    setSelectedCategoryIds(selectedCategoryIds);
  };
  const handlePartnerSelectionChange = (selectedPartners: string[]) => {
    setSelectedPartners(selectedPartners);
  };

  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <>
      <Navbar isHomePage={false} />
      <Container sx={style.ContainerStyle}>
        <Grid
          container
          maxWidth={'1600px'}
          minHeight={'100vh'}
          sx={style.GridStyle}
        >
          <Grid item xs={12} md={3}>
            <Typography sx={style.Subtitle}>Filtrar</Typography>
            <Grid item sm={12}>
              {isMobile ? (
                <Accordion sx={style.FilterAccordionStyle}>
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{ color: style.Theme.customPalette.primary.main }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={style.FilterTypeStyle}>
                      Ver filtros
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography sx={style.FilterTypeStyle}>
                          Categorias
                        </Typography>
                        <CategorySearchCard
                          categories={categories}
                          onCategorySelectionChange={
                            handleCategorySelectionChange
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography sx={style.FilterTypeStyle}>
                          Lojas
                        </Typography>
                        <PartnerSearchCard
                          partners={partners}
                          onPartnerSelectionChange={
                            handlePartnerSelectionChange
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography sx={style.FilterTypeStyle}>
                          Preço
                        </Typography>
                        <PriceSearchCard
                          products={products}
                          onFilterChange={setPriceRange}
                        />
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ) : (
                <>
                  <Typography sx={style.FilterTypeStyle}>Categorias</Typography>
                  <CategorySearchCard
                    categories={categories}
                    onCategorySelectionChange={handleCategorySelectionChange}
                  />
                  <Typography sx={style.FilterTypeStyle}>Lojas</Typography>
                  <PartnerSearchCard
                    partners={partners}
                    onPartnerSelectionChange={handlePartnerSelectionChange}
                  />
                  <Typography sx={style.FilterTypeStyle}>Preço</Typography>
                  <PriceSearchCard
                    products={products}
                    onFilterChange={setPriceRange}
                  />
                </>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography sx={style.Title}>resultados</Typography>
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
