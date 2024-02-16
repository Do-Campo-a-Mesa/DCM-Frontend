export interface ProductCategory {
  id: number;
  name: string;
  description: string;
}

export interface ProductCategoryResponse {
  data: ProductCategory[];
}
