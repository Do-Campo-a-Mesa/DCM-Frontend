export interface ProductCategory {
  id: number;
  icon?: string;
  name: string;
  description: string;
}

export interface ProductCardCategory {
  id: number;
  name: string;
}

export interface InsertCategoriesIntoProduct {
  product_id: number;
  list_categories_id: number[];
}

export interface ProductCategoryResponse {
  data: ProductCategory[];
}
