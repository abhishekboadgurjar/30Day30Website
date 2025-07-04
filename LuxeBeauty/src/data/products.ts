import { Product, BookingSlot } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Luxury Rose Gold Makeup Kit',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'makeup',
    description: 'Professional-grade makeup collection with rose gold packaging. Includes eyeshadow palette, foundation, concealer, and premium brushes.',
    rating: 4.8,
    reviews: 234,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Personalized Photo Frame Set',
    price: 45.99,
    image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'gifts',
    description: 'Beautiful wooden frame set with custom engraving. Perfect for capturing special memories.',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Glowing Skincare Essentials',
    price: 67.50,
    originalPrice: 85.00,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'skincare',
    description: 'Complete skincare routine with vitamin C serum, hyaluronic acid moisturizer, and gentle cleanser.',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: '4',
    name: 'Custom Jewelry Box',
    price: 78.99,
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'gifts',
    description: 'Elegant jewelry box with personalized engraving and velvet interior compartments.',
    rating: 4.6,
    reviews: 98,
    inStock: true
  },
  {
    id: '5',
    name: 'Professional Makeup Brushes',
    price: 34.99,
    originalPrice: 49.99,
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'makeup',
    description: 'Set of 12 professional makeup brushes with rose gold ferrules and ultra-soft bristles.',
    rating: 4.8,
    reviews: 312,
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'Luxury Spa Gift Set',
    price: 92.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'gifts',
    description: 'Premium spa collection with bath bombs, essential oils, and silk sleep mask.',
    rating: 4.9,
    reviews: 127,
    inStock: true
  }
];

export const bookingSlots: BookingSlot[] = [
  { id: '1', date: '2025-01-20', time: '10:00', type: 'consultation', available: true },
  { id: '2', date: '2025-01-20', time: '14:00', type: 'demo', available: true },
  { id: '3', date: '2025-01-21', time: '11:00', type: 'consultation', available: true },
  { id: '4', date: '2025-01-21', time: '15:30', type: 'demo', available: true },
  { id: '5', date: '2025-01-22', time: '09:30', type: 'consultation', available: true },
  { id: '6', date: '2025-01-22', time: '16:00', type: 'demo', available: true }
];