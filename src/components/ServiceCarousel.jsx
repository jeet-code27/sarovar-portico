import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CustomArrowButton = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`
      absolute top-1/2 -translate-y-1/2
      w-12 h-12 flex items-center justify-center
      bg-white rounded-full shadow-lg
      transition-all duration-200
      hover:bg-gray-50 hover:scale-110
      focus:outline-none focus:ring-2 focus:ring-gray-200
      z-10
      ${className}
    `}
    aria-label="Navigate carousel"
  >
    {children}
  </button>
);

const CustomLeftArrow = ({ onClick }) => (
  <CustomArrowButton onClick={onClick} className="left-2">
    <ChevronLeft className="w-6 h-6 text-gray-600" />
  </CustomArrowButton>
);

const CustomRightArrow = ({ onClick }) => (
  <CustomArrowButton onClick={onClick} className="right-2">
    <ChevronRight className="w-6 h-6 text-gray-600" />
  </CustomArrowButton>
);

const LearnMoreButton = () => (
  <button
    className="
      group
      px-5 py-2.5
      text-sm font-medium
      bg-white
      border border-gray-200
      rounded-md
      transition-all duration-200
      hover:bg-gray-50 hover:border-gray-300
      focus:outline-none focus:ring-2 focus:ring-gray-200
      w-full sm:w-auto
    "
  >
    <span className="flex items-center justify-center sm:justify-start gap-2">
      Learn More
      <span className="
        text-xs transform translate-x-0 transition-transform 
        duration-200 group-hover:translate-x-1
      ">
        →
      </span>
    </span>
  </button>
);

const LuxuryResortCarousel = () => {
  const facilities = [
    {
      title: "Restaurant & Bar",
      description: "Exceptional dining awaits at our resort. Immerse yourself in exquisite flavors with view to match. Pure indulgence, effortlessly delivered.",
      image: "images/bar.jpg"
    },
    {
      title: "Spa & Wellness",
      description: "Discover serenity at our spa. Indulge in blissful treatments and unwind in a haven of relaxation. Your path to rejuvenation starts here",
      image: "images/spa.jpg"
    },
    {
      title: "Swimming Pool",
      description: "Our Swimming Pool. Surrender to breath taking views and pure relaxation as you soak in the serenity of our Swimming pool.",
      image: "images/pool.jpg"
    },
    {
        title: "Pickup and Drop",
        description: "Our Swimming Pool. Surrender to breath taking views and pure relaxation as you soak in the serenity of our Swimming pool.",
        image: "images/drop.jpg"
      },
      {
        title: "Breakfast",
        description: "Our Swimming Pool. Surrender to breath taking views and pure relaxation as you soak in the serenity of our Swimming pool.",
        image: "images/breakfast.jpg"
      },
      {
        title: "Parking Space",
        description: "Our Swimming Pool. Surrender to breath taking views and pure relaxation as you soak in the serenity of our Swimming pool.",
        image: "images/parking.jpg"
      },
      {
        title: "Room Service",
        description: "Our Swimming Pool. Surrender to breath taking views and pure relaxation as you soak in the serenity of our Swimming pool.",
        image: "images/room-service.jpg"
      },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className="w-full  bg-white">
      <div className="max-w-[1400px] mx-auto py-16">
        {/* Header Section */}
        <div className="text-center mb-16 px-6">
          <p className="text-[#7d7e7c] text-semibold text-xs sm:text-sm tracking-[0.35em] uppercase mb-4">
            LUXARIOUS FACILITIES
          </p>
          <h2 className="text-4xl md:text-5xl libre-caslon-display-regular font-light leading-tight">
            Explore Our Exclusive Resort Facilities
          </h2>
        </div>

        {/* Carousel Section */}
        <div className="relative px-14">
          <Carousel
            responsive={responsive}
            infinite={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            containerClass="pb-12"
            itemClass="px-3"
            removeArrowOnDeviceType={["mobile"]}
            ssr={true}
          >
            {facilities.map((facility, index) => (
              <div key={index} className="h-full">
                <div className="flex flex-col h-full bg-white">
                  {/* Image Container */}
                  <div className="relative h-72 mb-6 overflow-hidden rounded-lg group">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-light mb-3 tracking-wide">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {facility.description}
                  </p>
                  
                  {/* Button */}
                  <LearnMoreButton />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LuxuryResortCarousel;