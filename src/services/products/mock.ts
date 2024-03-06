import products from '../../tests/mock/products/index.json';
import product from '../../tests/mock/products/product.json';
import {
  FilterProductInput,
  ProductResponse,
  ProductsResponse,
} from '../../lib/interfaces/Product';

export async function getProducts(
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

  if (filterInput.partners) {
    filteredProducts = filteredProducts.filter(
      (product) => filterInput.partners?.includes(product.partner.id)
    );
  }

  if (
    filterInput.price_min !== undefined &&
    filterInput.price_max !== undefined
  ) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= filterInput.price_min! &&
        product.price <= filterInput.price_max!
    );
  }

  if (filterInput.search_string) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name
        .toLowerCase()
        .includes(filterInput.search_string!.toLowerCase())
    );
  }

  return { data: filteredProducts };
}

export async function getProductById(): Promise<ProductResponse> {
  return { data: product };
}
