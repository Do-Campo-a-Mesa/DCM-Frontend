export interface FAQ {
  id: number;
  title: string;
  description: string;
}

export interface FAQResponse {
  data: FAQ[];
}
