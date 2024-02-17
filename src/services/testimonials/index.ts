import * as mock from './mock';
import * as integration from './integration';
import { TestimonialsResponse } from '../../lib/interfaces/Testimonial';

const useMock = process.env.NODE_ENV === 'mock';

export const getHomePageTestimonials: () => Promise<TestimonialsResponse> =
  useMock ? mock.getHomePageTestimonials : integration.getHomePageTestimonials;
