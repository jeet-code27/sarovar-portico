import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const reviews = [
  {
    id: 1,
    name: "Andrew Bolar",
    role: "Hotel Guest",
    review: "Exceptional resort! From the exquisite dining to the serene spa and the captivating infinity pool, every moment was pure bliss. Impeccable service and breathtaking views – a perfect escape!",
    rating: 5,
    image: "images/avatar.png"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Business Traveler",
    review: "The attention to detail in every aspect of my stay was remarkable. The staff went above and beyond to ensure my comfort. A truly luxurious experience!",
    rating: 5,
    image: "images/avatar.png"
  },
  {
    id: 3,
    name: "Michael Torres",
    role: "Vacation Guest",
    review: "Paradise found! The resort exceeded all expectations. From the moment we arrived until departure, we were treated like royalty. Will definitely return!",
    rating: 5,
    image: "images/avatar.png"
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ReviewCarousel = () => {
  const ReviewCard = ({ review }) => (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-6 md:mb-8 border-4 border-white shadow-lg">
        <img
          src={review.image}
          alt={review.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="libre-caslon-display-regular text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-3 text-gray-800">
        {review.name}
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8">
        {review.role}
      </p>

      <div className="relative mb-6 md:mb-8">
        <span className="absolute -left-3 sm:-left-6 top-0 text-gray-200 libre-caslon-display-regular text-5xl sm:text-6xl md:text-7xl">
          "
        </span>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl md:max-w-3xl mx-auto px-6 sm:px-8 md:px-12 leading-relaxed">
          {review.review}
        </p>
        <span className="absolute -right-3 sm:-right-6 bottom-0 text-gray-200 libre-caslon-display-regular text-5xl sm:text-6xl md:text-7xl">
          "
        </span>
      </div>

      <div className="flex gap-1 sm:gap-2 mb-6">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-green-500 text-green-500" />
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: "url('images/review.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="w-full max-w-5xl mx-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          showDots={true}
          arrows={true}
          customLeftArrow={<button className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all transform hover:scale-110"><ChevronLeft className="w-6 h-6 text-gray-600" /></button>}
          customRightArrow={<button className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all transform hover:scale-110"><ChevronRight className="w-6 h-6 text-gray-600" /></button>}
          dotListClass="custom-dot-list"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewCarousel;
