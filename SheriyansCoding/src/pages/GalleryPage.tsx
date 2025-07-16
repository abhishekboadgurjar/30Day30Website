import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['All', 'Classrooms', 'Events', 'Workshops', 'Student Projects'];

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Students in a classroom",
      category: "Classrooms"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Coding workshop",
      category: "Workshops"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Tech conference",
      category: "Events"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/5428258/pexels-photo-5428258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Mobile app project",
      category: "Student Projects"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Group coding session",
      category: "Workshops"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3987020/pexels-photo-3987020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Web development lab",
      category: "Classrooms"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Hackathon night",
      category: "Events"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Graduation ceremony",
      category: "Events"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/8636622/pexels-photo-8636622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Student's web project",
      category: "Student Projects"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Team building activity",
      category: "Events"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Collaborative coding",
      category: "Classrooms"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Mobile game project showcase",
      category: "Student Projects"
    },
  ];

  const filteredImages = images.filter(
    image => selectedCategory === 'All' || image.category === selectedCategory
  );

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Header Section */}
      <section className="relative bg-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h1>
            <p className="text-lg text-indigo-100">
              A visual journey through our classrooms, events, and student achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16" ref={ref}>
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer h-72 relative group"
                onClick={() => openLightbox(image)}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * (index % 4) }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <p className="font-medium">{image.alt}</p>
                    <span className="text-sm text-indigo-200">{image.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No images found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-indigo-300 focus:outline-none"
                aria-label="Close lightbox"
              >
                <X size={28} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-white">
                <h3 className="text-xl font-medium">{selectedImage.alt}</h3>
                <p className="text-indigo-300">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience Sheriyans Yourself</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our next open house event or schedule a campus tour to see our facilities in person.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#" 
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors"
            >
              Schedule a Visit
            </a>
            <a 
              href="#" 
              className="px-8 py-3 bg-white border border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors"
            >
              View Upcoming Events
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;