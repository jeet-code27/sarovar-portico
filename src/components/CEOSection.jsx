import React from 'react';

const CEOSection = () => {
  return (
    <section className="relative  py-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('images/review.png')`,
        }}
      >
        {/* <div className="absolute inset-0 bg-black/50"></div> Dark overlay for text readability */}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* CEO Image Section */}
          <div className="lg:w-1/4 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                <img
                  src="images/ceo.jpg"
                  alt="Jatin Khanna - CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-white/90 text-black px-4 py-1 rounded-full shadow-lg">
                  <p className="text-sm font-medium">CEO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/4 text-center lg:text-left">
            <h2 className="text-3xl font-semibold libre-caslon-display-regular text-black mb-2">Jatin Khanna</h2>
            <h3 className="text-xl text-black text-light  mb-6">CEO Sarovar Portico Hotel</h3>
            
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-black">
                A Message from Our CEO
              </h4>
              <p className="text-lg text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                For over two decades, Sarovar Portico has stood as a beacon of hospitality excellence in the heart of India. Our commitment to creating memorable experiences drives everything we do.
              </p>
              <p className="text-lg text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                As we continue to evolve and grow, our focus remains steadfast on providing exceptional service and creating a home away from home for our guests. With our recently renovated rooms and enhanced amenities, we invite you to experience the perfect blend of traditional hospitality and modern luxury.
              </p>
            </div>

            {/* Signature-like element */}
            <div className="mt-8">
              <div className="inline-block border-b-2 border-white/40 pb-2">
                <span className="homemade-apple-regular underline text-xl text-[blue]">Jatin Khanna</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;