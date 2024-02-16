export interface Testimonial {
  id: number;
  stars: number;
  userName: string;
  describe: string;
  date: string;
}

export interface TestimonialsResponse {
  data: Testimonial[];
}
