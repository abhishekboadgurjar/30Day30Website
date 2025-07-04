import { Episode } from '../types';

const episodes: Episode[] = [
  {
    id: "ep1",
    title: "Trump vs China | Chavda Is Back",
    subtitle: "Understanding Global Politics",
    description: "Abhijit Chavda returns to break down US-China tensions, Indian interests, and global power dynamics.",
    image: "ep1.jpg",
    duration: "1 hr 45 min",
    publishDate: "April 20, 2025",
    categories: ["Politics", "Global Affairs"],
    youtubeUrl: "https://youtu.be/SKW5xBqa_jE?feature=shared",
    spotifyUrl: "#",
    appleUrl: "#",
    featured: true,
  },
  {
    id: "ep2",
    title: "Rise of Sikhs | Sarbjeet Singh",
    subtitle: "Unveiling Sikh History",
    description: "Dive deep into the valor, legacy, and culture of Sikhs with expert Sarbjeet Singh.",
    image: "ep2.jpg",
    duration: "1 hr 10 min",
    publishDate: "April 18, 2025",
    categories: ["History", "Culture"],
    youtubeUrl: "https://youtu.be/T7bfs1A9AO8?feature=shared",
    spotifyUrl: "#",
    appleUrl: "#",
  },
  {
    id: "ep3",
    title: "Bhuvneshwar Kumar X Ranveer",
    subtitle: "The Life of a Cricketer",
    description: "An inspiring chat with cricket icon Bhuvneshwar Kumar about the game, discipline, and mindset.",
    image: "ep3.jpg",
    duration: "1 hr 25 min",
    publishDate: "April 15, 2025",
    categories: ["Sports", "Motivation"],
    youtubeUrl: "https://youtu.be/xRsMAPQZUoQ?feature=shared",
    spotifyUrl: "#",
    appleUrl: "#",
  },
  {
    id: "ep4",
    title: "Emraan Hashmi & Ranveer Bonding Podcast",
    subtitle: "Bollywood & Nostalgia",
    description: "A hilarious and heartfelt episode with Emraan Hashmi—Bollywood stories, the 2000s era, and more.",
    image: "ep4.jpg",
    duration: "1 hr 32 min",
    publishDate: "April 13, 2025",
    categories: ["Entertainment", "Bollywood"],
    youtubeUrl: "https://youtu.be/Z77vnw6pekY?feature=shared",
    spotifyUrl: "#",
    appleUrl: "#",
  },
  {
    id: "ep5",
    title: "Bollywood Skincare Hacks | Dr. Rashmi",
    subtitle: "Celebrity Skincare Secrets",
    description: "Dermatologist Dr. Rashmi spills insider skincare tips followed by Bollywood stars.",
    image: "ep5.jpg",
    duration: "48 min",
    publishDate: "April 10, 2025",
    categories: ["Health", "Lifestyle"],
    youtubeUrl: "https://youtu.be/m96cn2KLWpM?feature=shared",
    spotifyUrl: "#",
    appleUrl: "#",
  },
  {
    id: "ep6",
    title: "Women’s Diet Special | Suman Agarwal",
    subtitle: "Women's Nutrition 101",
    description: "Dietician Suman Agarwal discusses balanced diets, hormonal health, and lifestyle hacks for women.",
    image: "ep6.jpg",
    duration: "52 min",
    publishDate: "April 7, 2025",
    categories: ["Nutrition", "Wellness"],
    youtubeUrl: "https://youtu.be/9E5ulyR0Nko?feature=shared",
    spotifyUrl: "#",
    appleUrl: "#",
  },
  {
    id: "ep7",
    title: "Fix Your Loneliness | Dr. Prerna Kohli",
    subtitle: "Mental Health Talk",
    description: "Psychologist Dr. Prerna Kohli shares tools to overcome loneliness and rebuild mental resilience.",
    image: "ep7.jpg",
    duration: "59 min",
    publishDate: "April 5, 2025",
    categories: ["Mental Health", "Self Help"],
    youtubeUrl: "https://youtu.be/ypAHnzD04rg?feature=shared",
    spotifyUrl: "#",
    appleUrl: "#",
  },
  {
    id: "ep8",
    title: "TRS is Back | Palga Rinpoche",
    subtitle: "A Spiritual Awakening",
    description: "Buddhist monk Palga Rinpoche opens up about detachment, joy, and inner peace in modern life.",
    image: "ep8.jpg",
    duration: "1 hr 20 min",
    publishDate: "April 2, 2025",
    categories: ["Spirituality", "Philosophy"],
    youtubeUrl: "https://youtu.be/nxztSBr8vac?feature=shared",
    spotifyUrl: "#",
    appleUrl: "#",
  },
];

export const getEpisodeById = (id: string): Episode | undefined => {
  return episodes.find(episode => episode.id === id);
};

export const getFeaturedEpisodes = (): Episode[] => {
  return episodes.filter(episode => episode.featured);
};

export const getCategories = (): string[] => {
  const categoriesSet = new Set<string>();
  episodes.forEach(episode => {
    episode.categories.forEach(category => categoriesSet.add(category));
  });
  return Array.from(categoriesSet);
};

export { episodes };
