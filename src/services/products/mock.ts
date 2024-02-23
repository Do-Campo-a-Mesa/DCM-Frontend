import products from '../../tests/mock/products/index.json';
import {
  FilterProductInput,
  ProductsResponse,
} from '../../lib/interfaces/Product';

export async function getHomePageProducts(
  filterInput: FilterProductInput
): Promise<ProductsResponse> {
  let filteredProducts = products;

  if (filterInput.categoriesIDs) {
    filteredProducts = products.filter((product) =>
      product.categories.some(
        (category) => filterInput.categoriesIDs?.includes(category.id)
      )
    );
  }

  return { data: filteredProducts };
}
