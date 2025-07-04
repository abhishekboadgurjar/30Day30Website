import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import EpisodeGrid from '../components/EpisodeGrid';
import { episodes } from '../data/episodes';

const EpisodesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [filteredEpisodes, setFilteredEpisodes] = useState(episodes);

  useEffect(() => {
    if (categoryParam) {
      const filtered = episodes.filter(episode => 
        episode.categories.includes(categoryParam)
      );
      setFilteredEpisodes(filtered);
    } else {
      setFilteredEpisodes(episodes);
    }
  }, [categoryParam]);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">All Episodes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through all podcast episodes or use filters to find exactly what you're looking for.
          </p>
        </div>
        
        <EpisodeGrid episodes={filteredEpisodes} />
      </div>
    </div>
  );
};

export default EpisodesPage;