export interface Partner {
  id: string;
  name: string;
  business?: string;
  logo?: string;
}
export interface ProductCardPartner {
  id: string;
  name: string;
}
export interface PartnersResponse {
  data: Partner[];
}
