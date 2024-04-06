export interface BusinessValues {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export interface BusinessValuesResponse {
  data: BusinessValues[];
}
