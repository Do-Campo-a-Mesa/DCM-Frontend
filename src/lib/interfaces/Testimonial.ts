export interface Testimonial {
  id: number;
  rating: number;
  username: string;
  description: string;
  date: string;
}

export interface TestimonialsResponse {
  data: Testimonial[];
}
