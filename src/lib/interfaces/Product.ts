import { ProductCategory } from './Categories';

export interface ProductCard {
  id: number;
  name: string;
  unit_of_measurement: string;
  photos?: string[];
  price: number;
  status_promotion?: string;
  type_of_promotion?: string;
  percent_off?: number;
  money_off?: number;
  buy_x?: number;
  take_y?: number;
  new_price_with_promotion?: number;
  categories: ProductCategory[];
}
