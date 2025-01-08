import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    {
      id: 1,
      src: 'images/vintage-room.jpeg',
      alt: 'Luxury Suite View',
      title: 'Luxury Suite'
    },
    {
      id: 2,
      src: 'images/slide1.jpg',
      alt: 'Hotel Interior',
      title: 'Hotel Interior'
    },
    {
      id: 3,
      src: 'images/pool.jpg',
      alt: 'Swimming Pool',
      title: 'Swimming Pool'
    },
    {
      id: 4,
      src: 'images/restaurant.jpg',
      alt: 'Restaurant',
      title: 'Fine Dining'
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-[#7d7e7c] text-semibold text-xs sm:text-sm tracking-[0.35em] uppercase mb-3 ">EXCITING GALLERY</p>
        <h1 className="text-4xl md:text-5xl libre-caslon-display-regular font-light leading-tight mb-10">
          Explore Unforgettable Experiences
        </h1>
      </div>

      {/* Gallery Grid - Mobile First Approach */}
      <div className="grid grid-cols-1 sm:grid-cols-6 sm:grid-rows-6 gap-4 auto-rows-[300px] sm:h-[800px]">
        {/* First tall image */}
        <div className="sm:col-span-2 sm:row-span-6 relative group cursor-pointer" onClick={() => openLightbox(0)}>
          <img 
            src={images[0].src} 
            alt={images[0].alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 sm:bg-opacity-0 sm:group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <h3 className="libre-caslon-display-regular text-white text-2xl sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
              {images[0].title}
            </h3>
          </div>
        </div>

        {/* Second tall image */}
        <div className="sm:col-span-2 sm:row-span-6 sm:col-start-3 relative group cursor-pointer" onClick={() => openLightbox(1)}>
          <img 
            src={images[1].src} 
            alt={images[1].alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 sm:bg-opacity-0 sm:group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <h3 className="libre-caslon-display-regular text-white text-2xl sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
              {images[1].title}
            </h3>
          </div>
        </div>

        {/* First short image */}
        <div className="sm:col-span-2 sm:row-span-3 sm:col-start-5 relative group cursor-pointer" onClick={() => openLightbox(2)}>
          <img 
            src={images[2].src} 
            alt={images[2].alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 sm:bg-opacity-0 sm:group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <h3 className="libre-caslon-display-regular text-white text-2xl sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
              {images[2].title}
            </h3>
          </div>
        </div>

        {/* Second short image */}
        <div className="sm:col-span-2 sm:row-span-3 sm:col-start-5 sm:row-start-4 relative group cursor-pointer" onClick={() => openLightbox(3)}>
          <img 
            src={images[3].src} 
            alt={images[3].alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 sm:bg-opacity-0 sm:group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <h3 className="libre-caslon-display-regular text-white text-2xl sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
              {images[3].title}
            </h3>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-4xl max-h-screen p-4">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            <div className="text-center mt-4">
              <h3 className="libre-caslon-display-regular text-white text-xl">
                {images[selectedImage].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;