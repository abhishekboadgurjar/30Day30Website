export interface Episode {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  image: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
  featured?: boolean;
  categories: string[];
  tags: string[];
}

export interface TestimonialType {
  id: string;
  name: string;
  position: string;
  comment: string;
  image: string;
}