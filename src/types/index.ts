export interface ServiceType {
  id: number;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface TestimonialType {
  id: number;
  name: string;
  quote: string;
  vehicle: string;
  rating: number;
}

export interface GalleryImageType {
  id: number;
  before: string;
  after: string;
  description: string;
}

export interface FAQType {
  id: number;
  question: string;
  answer: string;
}