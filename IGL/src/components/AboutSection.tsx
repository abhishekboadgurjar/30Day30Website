import React from "react";
import { Award, Users, Youtube, Clock, Star } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: <Youtube className="w-8 h-8 text-yellow-400" />,
      value: "12+",
      label: "Episodes",
      description: "Regular episodes featuring diverse talents",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      value: "100+",
      label: "Contestants",
      description: "Talented performers from across India",
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-400" />,
      value: "45-67",
      label: "Minutes",
      description: "Of entertainment per episode",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      value: "9.5",
      label: "Rating",
      description: "Average viewer rating on IMDb",
    },
  ];

  return (
    <section className="py-20 bg-black relative" id="about">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/mic-pattern.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
            About The Show
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400"></span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            India's Got Latent is a groundbreaking Hindi-language talent show
            that combines the best elements of traditional talent competitions
            with modern comedy and entertainment.
          </p>
          <p className="text-gray-400">
            Hosted by the witty Samay Raina and featuring a rotating panel of
            celebrity judges, the show discovers and showcases India's hidden
            talents while adding a unique comedic twist to the traditional
            talent show format.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Show Format</h3>
            <p className="text-gray-400 mb-4">
              Contestants perform their acts in front of our expert panel of
              judges, who evaluate their performances with a unique blend of
              constructive criticism and humor. What sets us apart is our
              innovative rating system - contestants rate themselves before
              performing, adding an exciting psychological element to the
              competition.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                Nationwide talent search
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                Live audience reactions
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                Celebrity guest judges
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              What We Look For
            </h3>
            <p className="text-gray-400 mb-4">
              We welcome all forms of talent - from singers and dancers to
              magicians and comedians. Our show celebrates creativity,
              originality, and the courage to showcase your unique abilities on
              a national platform.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                Unique and original acts
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                Passion and dedication
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                Entertainment value
              </li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/30 p-6 rounded-xl backdrop-blur-sm text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-yellow-400 font-medium mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="https://www.youtube.com/@SamayRainaOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors duration-300"
          >
            <Youtube className="w-6 h-6" />
            <span>Watch Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
