export const SITE_NAME = "Coding4Dev";
export const SITE_URL = "https://coding4dev.com";
export const SITE_DESCRIPTION =
  "Learn coding, web development, and create amazing projects with Coding4Dev. Tutorials on HTML, CSS, JavaScript, MERN stack, Next.js, and more.";

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@Coding4Dev",
  instagram: "https://instagram.com/coding_4_dev",
  twitter: "https://x.com/Coding_4Dev",
  github: "https://github.com/coding4dev",
  linkedin: "https://linkedin.com/company/coding-4-devs",
};

export const YOUTUBE_CHANNEL_ID = "UC7YLY_N2hksNjLH4bgkP8lw";

export const NAVIGATION_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Tutorials", path: "/tutorials" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const FEATURED_TOPICS = [
  {
    title: "HTML, CSS & JavaScript",
    description: "Master the fundamentals of web development",
    icon: "Code",
  },
  {
    title: "MERN Stack",
    description: "Build full-stack applications with MongoDB, Express, React & Node.js",
    icon: "Database",
  },
  {
    title: "Next.js",
    description: "Create modern, SEO-friendly React applications",
    icon: "Layers",
  },
  {
    title: "Real-world Projects",
    description: "Apply your skills to practical coding challenges",
    icon: "Laptop",
  },
];

export const TESTIMONIALS = [
  {
    name: "Alex Johnson",
    role: "Junior Developer",
    content: "Coding4Dev tutorials helped me land my first job as a web developer. The content is clear, concise, and relevant to the industry.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Sarah Miller",
    role: "Computer Science Student",
    content: "As a CS student, these tutorials complement my education perfectly. They provide practical knowledge that's often missing from academic courses.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Miguel Rodriguez",
    role: "Self-taught Developer",
    content: "The MERN stack series was a game-changer for me. I went from knowing basic JavaScript to building full-stack applications in months.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

export const FEATURED_COURSES = [
  {
    title: "JavaScript Fundamentals",
    description: "Master the core concepts of JavaScript programming",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    level: "Beginner",
    modules: 12,
  },
  {
    title: "React.js for Beginners",
    description: "Build modern user interfaces with React",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    level: "Intermediate",
    modules: 15,
  },
  {
    title: "MERN Stack Masterclass",
    description: "Create full-stack web applications",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    level: "Advanced",
    modules: 20,
  },
  {
    title: "Next.js & SEO",
    description: "Build SEO-optimized websites with Next.js",
    image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    level: "Intermediate",
    modules: 18,
  },
];

import { BlogPost } from "./types";

export const LATEST_BLOG_POSTS: BlogPost[] = [
  {
    title: "10 JavaScript Tips to Improve Your Code",
    excerpt: "Discover practical tips to write cleaner, more efficient JavaScript code for your web applications.",
    date: "2023-06-15",
    slug: "javascript-tips-improve-code",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "JavaScript"
  },
  {
    title: "Building a REST API with Node.js and Express",
    excerpt: "Learn how to create a robust REST API from scratch using Node.js and Express with this step-by-step guide.",
    date: "2023-07-22",
    slug: "building-rest-api-nodejs-express",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Node.js"
  },
  {
    title: "Understanding React Hooks",
    excerpt: "An in-depth look at React Hooks and how they can simplify your component logic and state management.",
    date: "2023-08-10",
    slug: "understanding-react-hooks",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "React"
  },
];