import { api } from '../api';
import { TestimonialsResponse } from '../../lib/interfaces/Testimonial';

export async function getHomePageTestimonials(): Promise<TestimonialsResponse> {
  return api.get('/testimonials');
}
