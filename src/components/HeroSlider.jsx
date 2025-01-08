import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "images/slide1.jpg",
    title: "Welcome to Sarovar Portico",
    description: "Where tradition blends with contemporary comfort",
    subtitle: "Starting from ₹12,000 per night"
  },
  {
    image: "images/slide2.jpg",
    title: "Gastronomic Delights",
    description: "Savor authentic Indian and global cuisines",
    subtitle: "An unforgettable dining experience"
  },
  {
    image: "images/slide3.jpg",
    title: "Relax and Rejuvenate",
    description: "Discover tranquility with our luxury spa therapies",
    subtitle: "Traditional wellness in a modern retreat"
  },
  {
    image: "images/slide4.jpg",
    title: "Unforgettable Celebrations",
    description: "Create cherished memories at Sarovar Portico",
    subtitle: "Elegant venues for every special occasion"
  }
];


const HotelSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[85vh] mt-20 overflow-hidden bg-[#f7f7f5]">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-2000 ease-in-out transform
              ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-4xl mx-auto transform translate-y-8">
                  <h2 className="text-5xl font-light mb-6 text-white tracking-wide">
                    {slide.title}
                  </h2>
                  <div className="w-24 h-0.5 bg-white/70 mx-auto mb-6"></div>
                  <p className="text-2xl text-white/90 mb-4 font-light tracking-wider">
                    {slide.description}
                  </p>
                  <p className="text-lg text-white/80 font-light tracking-wide">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Minimal Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white/60 transition-all duration-[6000ms] ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 text-white/80 font-light tracking-wider">
        <span className="text-2xl">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="text-lg mx-2">/</span>
        <span className="text-lg">{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default HotelSlider;