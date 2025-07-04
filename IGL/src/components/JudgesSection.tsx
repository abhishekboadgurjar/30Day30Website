import React, { useState } from "react";
import { ExternalLink, Instagram, Twitter, Youtube } from "lucide-react";

interface Judge {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

const judges: Judge[] = [
  {
    id: 1,
    name: "Samay Raina",
    role: "Host & Judge",
    bio: "Stand-up comedian and chess player who created and hosts India's Got Latent. Known for his quick wit and innovative approach to comedy content.",
    image: "samay.png",
    social: {
      instagram: "https://www.instagram.com/maisamayhoon",
      twitter: "https://twitter.com/RainaSamay",
      youtube: "https://www.youtube.com/@SamayRainaOfficial",
    },
  },
  {
    id: 2,
    name: "Tanmay Bhat",
    role: "Regular Judge",
    bio: "Comedian, YouTuber, and content creator. One of India's pioneering digital content creators and a regular judge on the show.",
    image: "tanmay.png",
    social: {
      instagram: "https://www.instagram.com/tanmaybhat",
      twitter: "https://twitter.com/thetanmay",
      youtube: "https://www.youtube.com/@tanmaybhat",
    },
  },
  {
    id: 3,
    name: "Balraj Singh Ghai",
    role: "Co-Host & Judge",
    bio: "Stand-up comedian and co-host of India's Got Latent, known for his sharp humor and chemistry with Samay Raina.",
    image: "balraj.png",
    social: {
      instagram: "https://www.instagram.com/balrajghai",
      twitter: "https://twitter.com/balrajghai",
      youtube: "https://www.youtube.com/@balrajghai",
    },
  },
  {
    id: 4,
    name: "Raftaar",
    role: "Guest Judge",
    bio: "Renowned rapper and music producer who brought his unique perspective to the judging panel.",
    image: "raftar.png",
    social: {
      instagram: "https://www.instagram.com/raftaarmusic",
      twitter: "https://twitter.com/raftaarmusic",
      youtube: "https://www.youtube.com/@raftaarmusic",
    },
  },
  
];


const JudgesSection = () => {
  const [activeJudge, setActiveJudge] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black relative overflow-hidden" id="judges">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
            Meet Our Judges
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-yellow-400"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our panel of industry experts who discover, nurture, and
            occasionally roast the incredible talent from across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge) => (
            <div
              key={judge.id}
              className="group relative"
              onMouseEnter={() => setActiveJudge(judge.id)}
              onMouseLeave={() => setActiveJudge(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/80 to-red-500/80 rounded-xl opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>

              <div
                className={`relative bg-gray-800 rounded-xl overflow-hidden transition-all duration-500 ${
                  activeJudge === judge.id
                    ? "transform scale-[1.05] shadow-xl shadow-yellow-500/20"
                    : ""
                }`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={judge.image}
                    alt={judge.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                  <h3 className="text-xl font-bold text-white">{judge.name}</h3>
                  <p className="text-yellow-400 text-sm font-medium mt-1">
                    {judge.role}
                  </p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {judge.name}
                    </h3>
                    <p className="text-white text-sm font-medium mb-4">
                      {judge.role}
                    </p>
                    <p className="text-white/90 mb-6">{judge.bio}</p>

                    <div className="flex justify-center space-x-4">
                      {judge.social.instagram && (
                        <a
                          href={judge.social.instagram}
                          className="text-white hover:text-yellow-300 transition-colors duration-300"
                        >
                          <Instagram size={20} />
                        </a>
                      )}
                      {judge.social.twitter && (
                        <a
                          href={judge.social.twitter}
                          className="text-white hover:text-yellow-300 transition-colors duration-300"
                        >
                          <Twitter size={20} />
                        </a>
                      )}
                      {judge.social.youtube && (
                        <a
                          href={judge.social.youtube}
                          className="text-white hover:text-yellow-300 transition-colors duration-300"
                        >
                          <Youtube size={20} />
                        </a>
                      )}
                    </div>

                    <button className="mt-6 text-white border border-white/70 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium flex items-center justify-center mx-auto">
                      Full Profile
                      <ExternalLink size={14} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;
