import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HotelCarousel = () => {
  const rooms = [
    {
      id: 1,
      type: "VIP Room",
      price: "\u20B94500/Night",
      image: "images/vip-room.jpeg",
      specs: ["55 Sq", "3-4 Guests", "Free Wi-Fi"],
      description: "Elevated luxury with premium amenities"
    },
    {
      id: 2,
      type: "Vintage Room",
      price: "\u20B96999/Night",
      image: "images/vintage-room.jpeg",
      specs: ["48Sq", "3-5 Guests", "Free Wi-Fi"],
      description: "Vintage comfort meets city views"
    },
    {
      id: 3,
      type: "Single Room",
      price: "\u20B93499/Night",
      image: "images/single-room.jpeg",
      specs: ["36Sq", "3-5 Guests", "Free Wi-Fi"],
      description: "Ultimate comfort in spacious settings"
    },
    {
      id: 4,
      type: "Executive Suite",
      price: "\u20B96200/Night",
      image: "images/executive-room.avif",
      specs: ["110 Sq", "3-5 Guests", "Free Wi-Fi"],
      description: "Premium executive comfort"
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Card = ({ room }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full transform transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative h-72 overflow-hidden">
        <img
          src={room.image}
          alt={room.type}
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" /> */}
      </div>
      <div className="p-6">
        <h3 className="text-5xl  mb-2">{room.type}</h3>
        <p className="text-gray-600 text-xl mb-4">{room.description}</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline">
            <span className="text-gray-500 text-sm">From</span>
            <span className="text-xl text-amber-700 ml-2 font-medium">{room.price}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {room.specs.map((spec, i) => (
              <span key={i} className="text-sm text-gray-500">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <p className="text-[#7d7e7c] text-semibold text-xs sm:text-sm tracking-[0.35em] uppercase mb-3">ROOMS & SUITES</p>
        <h2 className="text-4xl md:text-5xl libre-caslon-display-regular font-light leading-tight">Our Exquisite Rooms & Suites Collection</h2>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={true}
        arrows={true}
        containerClass="carousel-container"
        itemClass="px-4 py-8 libre-caslon-display-regular"
        dotListClass="custom-dot-list"
        renderButtonGroupOutside={true}
      >
        {rooms.map((room) => (
          <Card key={room.id} room={room} />
        ))}
      </Carousel>
    </div>


    <div className="relative h-[200px] sm:h-[300px] md:h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(images/sea.jpeg)' }}>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  {/* Text Content */}
  <div className="relative z-10 px-4 text-center">
    <h1 className="text-3xl sm:text-5xl md:text-8xl libre-caslon-display-regular tracking-wide uppercase text-white">
      SAROVAR PORTICO
    </h1>
  </div>
</div>
    </>
  );
};

export default HotelCarousel;
