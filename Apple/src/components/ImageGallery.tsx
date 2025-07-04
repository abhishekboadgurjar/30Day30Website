import React, { useState } from 'react';
import Animation from './Animation';

interface GalleryImage {
  src: string;
  alt: string;
}

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const images: GalleryImage[] = [
    {
      src: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Quantum device front view"
    },
    {
      src: "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Quantum device side view"
    },
    {
      src: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Quantum device in use"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <Animation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every angle. Perfectly crafted.
            </p>
          </div>
        </Animation>

        <div className="max-w-5xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-2xl shadow-xl bg-white">
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button 
                key={index}
                className={`overflow-hidden rounded-lg ${
                  selectedImage === index ? 'ring-2 ring-blue-500' : 'opacity-70'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image.src} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;