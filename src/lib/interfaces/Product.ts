import { ProductCardCategory } from './Categories';
import { Partner, ProductCardPartner } from './Partner';
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
  store: ProductCardPartner;
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
  quantity_spot_market: number;
  status_spot_market: string;
  store: Partner;
  categories: ProductCardCategory[];
}

export interface RegisterProductInput {
  name: string;
  description?: string;
  unit_of_measurement: 'unit' | 'kg' | 'liter' | 'meters' | 'square meters';
  validity: number;
  photos?: string[];
  price: number;
  quantity: number;
  store_id: string;
}

export interface ProductResponse {
  data: ProductByID;
}

export interface ProductsResponse {
  data: Product[];
}
