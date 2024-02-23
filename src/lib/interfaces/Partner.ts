export interface Partner {
  id: number;
  companyName: string;
  business: string;
  logotipo: string;
}

export interface PartnersResponse {
  data: Partner[];
}
