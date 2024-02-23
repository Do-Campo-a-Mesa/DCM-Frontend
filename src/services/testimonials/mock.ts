import testimonials from '../../tests/mock/testimonials/index.json';
import { TestimonialsResponse } from '../../lib/interfaces/Testimonial';

export async function getHomePageTestimonials(): Promise<TestimonialsResponse> {
  return { data: testimonials };
}
