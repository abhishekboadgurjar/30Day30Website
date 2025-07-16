export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  price: number;
  rating: number;
  reviewCount: number;
  students: number;
}

export interface Resource {
  title: string;
  description: string;
  type: 'Free' | 'Premium';
  size: string;
}

export interface CurrentAffair {
  title: string;
  description: string;
  date: string;
  tags: string[];
}