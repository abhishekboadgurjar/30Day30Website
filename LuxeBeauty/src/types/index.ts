export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'makeup' | 'gifts' | 'skincare';
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BookingSlot {
  id: string;
  date: string;
  time: string;
  type: 'consultation' | 'demo';
  available: boolean;
}

export interface Booking {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  slot: BookingSlot;
  service: string;
  notes?: string;
}