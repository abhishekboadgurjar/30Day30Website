import { Achievement, Video, Seminar, Testimonial } from '../types';
import { Youtube, Users, MapPin, Calendar } from 'lucide-react';

export const achievements: Achievement[] = [
  {
    id: 1,
    count: 500,
    title: 'Seminars Conducted',
    icon: 'Calendar'
  },
  {
    id: 2,
    count: 20,
    title: 'Million Followers',
    icon: 'Users'
  },
  {
    id: 3,
    count: 1000,
    title: 'Videos Published',
    icon: 'Youtube'
  },
  {
    id: 4,
    count: 100,
    title: 'Cities Visited',
    icon: 'MapPin'
  }
];

export const videos: Video[] = [
  {
    id: 1,
    title: 'How to Build Self Confidence',
    category: 'Motivation',
    thumbnail: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    date: '2023-05-15'
  },
  {
    id: 2,
    title: 'Overcoming Fear of Failure',
    category: 'Motivation',
    thumbnail: 'https://images.pexels.com/photos/1394882/pexels-photo-1394882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    date: '2023-06-22'
  },
  {
    id: 3,
    title: 'Start Your Business Today',
    category: 'Entrepreneurship',
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
    date: '2023-07-10'
  },
  {
    id: 4,
    title: 'Photography Basics for Beginners',
    category: 'Photography',
    thumbnail: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://www.youtube.com/watch?v=example4',
    date: '2023-08-05'
  },
  {
    id: 5,
    title: 'Daily Habits of Successful People',
    category: 'Lifestyle',
    thumbnail: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://www.youtube.com/watch?v=example5',
    date: '2023-09-18'
  },
  {
    id: 6,
    title: 'Finding Your Purpose in Life',
    category: 'Spirituality',
    thumbnail: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://www.youtube.com/watch?v=example6',
    date: '2023-10-22'
  }
];

export const seminars: Seminar[] = [
  {
    id: 1,
    title: 'Transform Your Life',
    date: '2024-07-15',
    time: '10:00 AM - 4:00 PM',
    venue: 'Grand Convention Center, New Delhi',
    description: 'A life-changing seminar focused on personal transformation and growth. Learn practical tools to overcome obstacles and achieve your dreams.',
    registrationLink: '#register'
  },
  {
    id: 2,
    title: 'Success Mindset Workshop',
    date: '2024-08-22',
    time: '9:00 AM - 3:00 PM',
    venue: 'Business Hub, Mumbai',
    description: 'Develop the mindset of successful entrepreneurs and learn how to apply these principles in your own life and business.',
    registrationLink: '#register'
  },
  {
    id: 3,
    title: 'Youth Empowerment Summit',
    date: '2024-09-10',
    time: '11:00 AM - 5:00 PM',
    venue: 'University Auditorium, Bangalore',
    description: 'Special event for students and young professionals to discover their potential and set themselves up for future success.',
    registrationLink: '#register'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Raj Sharma',
    position: 'Entrepreneur',
    content: 'Sandeep\'s seminar changed my perspective on business. His insights helped me transform my struggling startup into a profitable venture within six months.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Priya Patel',
    position: 'Student',
    content: 'As a student struggling with confidence issues, Sandeep\'s videos gave me the motivation to believe in myself. I now approach challenges with a positive mindset.',
    image: 'https://images.pexels.com/photos/3777575/pexels-photo-3777575.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    position: 'Corporate Executive',
    content: 'The leadership principles I learned from Sandeep have transformed how I manage my team. Our productivity has increased by 40% since implementing his strategies.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'Ananya Gupta',
    position: 'Photographer',
    content: 'Sandeep\'s journey from photography to entrepreneurship inspired me to expand my own horizons. His practical advice helped me turn my passion into a thriving business.',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];