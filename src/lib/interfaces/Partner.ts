export interface Partner {
  id: number;
  companyName: string;
  business?: string;
  logotipo?: string;
}
export interface ProductCardPartner {
  id: number;
  companyName: string;
}
export interface PartnersResponse {
  data: Partner[];
}
