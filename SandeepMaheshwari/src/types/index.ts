export interface Achievement {
  id: number;
  count: number;
  title: string;
  icon: string;
}

export interface Video {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  date: string;
}

export interface Seminar {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  registrationLink: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  image: string;
}