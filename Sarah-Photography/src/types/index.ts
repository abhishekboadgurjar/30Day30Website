export interface PortfolioItem {
  id: number;
  title: string;
  category: 'weddings' | 'portraits' | 'events' | 'commercial';
  image: string;
  description: string;
}

export interface PricingPackage {
  id: number;
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface BookingSlot {
  date: string;
  time: string;
  available: boolean;
}

export interface InstagramPost {
  id: number;
  image: string;
  likes: number;
  caption: string;
}