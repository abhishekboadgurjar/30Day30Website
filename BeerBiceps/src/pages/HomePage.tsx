import React from 'react';
import HeroSection from '../components/HeroSection';
import EpisodeGrid from '../components/EpisodeGrid';
import Newsletter from '../components/Newsletter';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import { episodes, getFeaturedEpisodes } from '../data/episodes';

const HomePage: React.FC = () => {
  const featuredEpisode = getFeaturedEpisodes()[0];
  const latestEpisodes = episodes.slice(0, 6); // Display only the latest 6 episodes

  return (
    <div>
      <HeroSection featuredEpisode={featuredEpisode} />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Episodes</h2>
            <a 
              href="/episodes" 
              className="inline-block mt-4 md:mt-0 text-primary hover:text-primary-dark font-medium transition-colors"
            >
              View All Episodes →
            </a>
          </div>
          <EpisodeGrid episodes={latestEpisodes} />
        </div>
      </div>
      
      <AboutSection />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;