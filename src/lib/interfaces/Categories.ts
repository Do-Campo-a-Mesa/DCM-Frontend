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

export interface ProductCategoryResponse {
  data: ProductCategory[];
}
