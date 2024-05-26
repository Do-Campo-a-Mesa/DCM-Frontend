import { ProductCardCategory } from './Categories';
import { Partner } from './Partner';
export interface FilterProductInput {
  partners?: string[];
  search_string?: string;
  categoriesIDs?: number[];
  price_min: number;
  price_max: number;
  status_promotion?: string;
}

export interface ProductOrder {
  id: number;
  name: string;
  unit_of_measurement: string;
  photos?: string[];
}

export interface Product {
  quantity: number;
  id: number;
  name: string;
  unit_of_measurement: string;
  photos?: string[];
  price: number;
  review?: number;
  status_promotion?: string;
  type_of_promotion?: string;
  percent_off?: number;
  money_off?: number;
  buy_x?: number;
  take_y?: number;
  new_price_with_promotion?: number;
  categories: ProductCardCategory[];
  store: Partner;
  description?: string;
}

export interface ProductByID {
  quantity: number;
  id: number;
  name: string;
  description?: string;
  unit_of_measurement: string;
  photos?: string[];
  price: number;
  validity: number;
  review?: number;
  status: string;
  status_promotion?: string;
  type_of_promotion?: string;
  percent_off?: number;
  money_off?: number;
  buy_x?: number;
  take_y?: number;
  new_price_with_promotion?: number;
  date_start_promotion?: Date;
  date_ends_promotion?: Date;
  price_spot_market?: number;
  quantity_spot_market?: number;
  status_spot_market?: string;
  store: Partner;
  categories: ProductCardCategory[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductResponse {
  data: ProductByID[];
}

export interface ProductsResponse {
  data: Product[];
}
