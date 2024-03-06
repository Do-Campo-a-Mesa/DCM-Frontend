export interface Testimonial {
  id: number;
  rating: number;
  userName: string;
  describe: string;
  date: string;
}

export interface TestimonialsResponse {
  data: Testimonial[];
}
