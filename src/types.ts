export interface SubService {
  name: string;
  description: string;
  details: string[];
}

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  subServices: SubService[];
}

export interface ClientQuote {
  text: string;
  author: string;
  role: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Interior Design' | 'Construction' | 'Furniture';
  location: string;
  year: string;
  services: string[];
  description: string;
  thumbnail: string;
  gallery: string[];
  clientQuote?: ClientQuote;
  featured: boolean;
  architects?: string[];
  squareFootage?: string;
}

export type Tab = 'home' | 'about' | 'portfolio' | 'services' | 'contact';
