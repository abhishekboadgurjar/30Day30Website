import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import EpisodeCard from './EpisodeCard';
import { Episode } from '../types';
import { getCategories } from '../data/episodes';

interface EpisodeGridProps {
  episodes: Episode[];
}

const EpisodeGrid: React.FC<EpisodeGridProps> = ({ episodes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredEpisodes, setFilteredEpisodes] = useState<Episode[]>(episodes);
  const categories = getCategories();

  useEffect(() => {
    let result = episodes;

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        episode =>
          episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          episode.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter(episode =>
        episode.categories.includes(selectedCategory)
      );
    }

    setFilteredEpisodes(result);
  }, [searchTerm, selectedCategory, episodes]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search episodes..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex-shrink-0">
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {selectedCategory && (
          <div className="flex items-center mb-4">
            <span className="mr-2 text-gray-600">Filtered by:</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center">
              {selectedCategory}
              <button
                onClick={() => setSelectedCategory('')}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </span>
          </div>
        )}
      </div>

      {filteredEpisodes.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No episodes found</h3>
          <p className="text-gray-500">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEpisodes.map(episode => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EpisodeGrid;