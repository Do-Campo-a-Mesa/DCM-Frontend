import { ProductCardCategory } from './Categories';
import { ProductCardPartner } from './Partner';
export interface FilterProductInput {
  partners?: number[];
  search_string?: string;
  categoriesIDs?: number[];
  price_min: number;
  price_max: number;
  status_promotion?: string;
}

export interface Product {
  id: number;
  name: string;
  unit_of_measurement: string;
  photos: string[];
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
  partner: ProductCardPartner;
  description?: string;
}
export interface ProductsResponse {
  data: Product[];
}
