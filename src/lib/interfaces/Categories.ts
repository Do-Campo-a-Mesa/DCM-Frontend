export interface ProductCategory {
  id: number;
  icon: string;
  name: string;
  description: string;
}

export interface ProductCategoryResponse {
  data: ProductCategory[];
}
