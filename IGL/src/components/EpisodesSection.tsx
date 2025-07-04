import React, { useState } from "react";
import { Play, Star, Calendar, Clock } from "lucide-react";

interface Episode {
  id: number;
  title: string;
  thumbnail: string;
  date: string;
  duration: string;
  rating: number;
  featured: boolean;
  videoUrl: string;
}

const episodes: Episode[] = [
  {
    id: 1,
    title:
      "S1 E1: Guests Raftaar, Sahil join Samay and Balraj to hilariously critique India's latent talents",
    thumbnail: "Ep1.png",
    date: "Jun 14, 2024",
    duration: "45:00",
    rating: 8.8,
    featured: true,
    videoUrl: "https://youtu.be/P1CbyI9mhx8?feature=shared",
  },
  {
    id: 2,
    title:
      "S1 E2: Guests Anshu, Nishant, Karan Singh join Samay and Balraj to hilariously critique India's latent talents",
    thumbnail: "Ep2.png",
    date: "Jul 8, 2024",
    duration: "45:00",
    rating: 9.0,
    featured: true,
    videoUrl: "https://youtu.be/KsMUNa3N_HA?feature=shared",
  },
  {
    id: 3,
    title:
      "S1 E3: Guests Aashish, Urfi, Yashraj join Samay and Balraj to hilariously critique India's latent talents",
    thumbnail: "Ep3.png",
    date: "Jul 28, 2024",
    duration: "45:00",
    rating: 9.3,
    featured: true,
    videoUrl: "https://youtu.be/ncTDhvJH1Qw?feature=shared",
  },
  {
    id: 4,
    title:
      "S1 E4: Guests Maheep, Neeti, Amit join Samay and Balraj to hilariously critique India's latent talents",
    thumbnail: "Ep4.png",
    date: "Aug 11, 2024",
    duration: "45:00",
    rating: 9.5,
    featured: true,
    videoUrl: "https://youtu.be/oOp1bukKMtk?feature=shared",
  },
  {
    id: 5,
    title:
      "S1 E5: Guests Kunal, Atul join Samay and Balraj to hilariously critique India's latent talents",
    thumbnail: "Ep5.png",
    date: "Aug 26, 2024",
    duration: "45:00",
    rating: 8.7,
    featured: false,
    videoUrl: "https://youtu.be/CNMsSWmpvfE?feature=shared",
  },
  {
    id: 6,
    title:
      "S1 E6: Guests Vipul, Nishant, Sonali join Samay and Balraj to hilariously critique India's latent talents",
    thumbnail: "Ep6.png",
    date: "Sep 15, 2024",
    duration: "45:00",
    rating: 9.2,
    featured: true,
    videoUrl: "https://youtu.be/-GFGOzk6neo?feature=shared",
  },
  {
    id: 7,
    title:
      "S1 E7: Guests Ravi, Rahgir, Saurabh join Samay and Balraj to hilariously critique India's latent talents",
    thumbnail: "Ep7.png",
    date: "Oct 2, 2024",
    duration: "45:00",
    rating: 8.9,
    featured: false,
    videoUrl: "https://youtu.be/OxgmW_O_xeE?feature=shared",
  },
  {
    id: 8,
    title:
      "S1 E8: Guests Poonam, Vivek, Sagar, Vidit join Samay to hilariously critique India's latent talents",
    thumbnail: "Ep8.png",
    date: "Oct 13, 2024",
    duration: "45:00",
    rating: 8.9,
    featured: false,
    videoUrl: "https://youtu.be/-cPTXAChxN4?feature=shared",
  },
  {
    id: 9,
    title:
      "S1 E9: Guests Deepak, Manan, Agu Stanley join Samay and Balraj to hilariously critique India's latent talents",
    thumbnail: "Ep9.png",
    date: "Oct 31, 2024",
    duration: "45:00",
    rating: 8.8,
    featured: false,
    videoUrl: "https://youtu.be/hDY7J9m0qoA?feature=shared",
  },
  {
    id: 10,
    title:
      "S1 E10: Guests Raghu, Tanmay, Sid warrior join Samay and Balraj to hilariously critique India's latent talents",
    thumbnail: "Ep10.png",
    date: "Nov 16, 2024",
    duration: "45:00",
    rating: 9.5,
    featured: true,
    videoUrl: "https://youtu.be/mdb_R9TwY8k?feature=shared",
  },
  {
    id: 11,
    title:
      "S1 E11: Guests Bharti, Harsh, Tony join Samay to hilariously critique India's latent talents",
    thumbnail: "Ep11.png",
    date: "Dec 8, 2024",
    duration: "45:00",
    rating: 9.3,
    featured: true,
    videoUrl: "https://youtu.be/gi3ipKr1UzA?feature=shared",
  },
  {
    id: 12,
    title:
      "S1 E12: Guests Rakhi, Ashish, Yashraj join Samay and Balraj to hilariously critique India's latent talents",
    thumbnail: "Ep12.png",
    date: "Dec 31, 2024",
    duration: "45:00",
    rating: 8.6,
    featured: false,
    videoUrl: "https://youtu.be/pB7_UCYqblo?feature=shared",
  },
];

const EpisodesSection = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "featured">("all");
  const [hoveredEpisode, setHoveredEpisode] = useState<number | null>(null);

  const filteredEpisodes =
    activeFilter === "all"
      ? episodes
      : episodes.filter((episode) => episode.featured);

  const handleEpisodeClick = (videoUrl: string) => {
    window.open(videoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="relative py-20 bg-gradient-to-b from-black to-gray-900"
      id="episodes"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="inline-block relative">
                Latest Episodes
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-yellow-400"></span>
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Watch the most recent performances from our incredible
              participants. Get ready to be amazed, surprised, and occasionally
              confused.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex space-x-4">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All Episodes
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === "featured"
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
              onClick={() => setActiveFilter("featured")}
            >
              Featured
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredEpisodes.map((episode) => (
            <div
              key={episode.id}
              className="bg-gray-900 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-500/10 cursor-pointer"
              onMouseEnter={() => setHoveredEpisode(episode.id)}
              onMouseLeave={() => setHoveredEpisode(null)}
              onClick={() => handleEpisodeClick(episode.videoUrl)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={episode.thumbnail}
                  alt={episode.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70"></div>

                {episode.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}

                <button
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400/90 
                    text-black transition-all duration-500 
                    ${
                      hoveredEpisode === episode.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEpisodeClick(episode.videoUrl);
                  }}
                >
                  <Play className="fill-current ml-1" size={32} />
                </button>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {episode.title}
                </h3>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={16} />
                    <span className="ml-2">{episode.date}</span>
                  </div>

                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock size={16} />
                    <span className="ml-2">{episode.duration}</span>
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(episode.rating)
                            ? "text-yellow-400 fill-current"
                            : i < episode.rating
                            ? "text-yellow-400"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-white text-sm font-medium">
                    {episode.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="https://www.youtube.com/@SamayRainaOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <span>View All Episodes</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;
