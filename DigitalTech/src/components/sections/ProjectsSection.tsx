import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import ProjectCard from '../ui/ProjectCard';
import { useInView } from '../hooks/useInView';

const categories = ['All', 'Web Design', 'E-commerce', 'Corporate', 'Landing Page'];

const projects = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    category: 'E-commerce',
    description: 'A fully responsive e-commerce solution with advanced product filtering and secure payment integration.',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#'
  },
  {
    id: 2,
    title: 'Corporate Website Redesign',
    category: 'Corporate',
    description: 'Complete overhaul of a financial services website focusing on improved UX and conversion optimization.',
    imageUrl: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#'
  },
  {
    id: 3,
    title: 'Product Landing Page',
    category: 'Landing Page',
    description: 'High-converting landing page for a SaaS product with animated features section and integrated demo requests.',
    imageUrl: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'Web Design',
    description: 'Creative portfolio website for a photographer with gallery functionality and contact form integration.',
    imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#'
  },
  {
    id: 5,
    title: 'Online Booking System',
    category: 'Web Design',
    description: 'Custom booking platform for a service business with calendar integration and automated notifications.',
    imageUrl: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#'
  },
  {
    id: 6,
    title: 'Mobile-First Marketplace',
    category: 'E-commerce',
    description: 'Peer-to-peer marketplace optimized for mobile with real-time messaging and secure transactions.',
    imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#'
  }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Our Projects
          </span>
          <AnimatedText
            text="Showcasing Our Best Work"
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          />
          <p className="max-w-2xl mx-auto text-slate-600">
            Take a look at some of our recent projects. Each one reflects our commitment
            to quality, innovation, and delivering exceptional results.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center bg-white rounded-full p-1 shadow-sm border border-slate-200 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
              delay={index * 0.1}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* View all projects button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Projects <ArrowUpRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;