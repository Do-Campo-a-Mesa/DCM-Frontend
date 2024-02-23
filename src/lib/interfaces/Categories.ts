export interface ProductCategory {
  id: number;
  icon?: string;
  name: string;
  description: string;
}

export interface ProductCardCategory {
  id: number;
}

export interface ProductCategoryResponse {
  data: ProductCategory[];
}
