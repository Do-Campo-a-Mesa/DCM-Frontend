export interface DeliveryOption {
  id: number;
  icon?: string;
  name: string;
  description?: string;
}

export interface DeliveryOptionsResponse {
  data: DeliveryOption[];
}
