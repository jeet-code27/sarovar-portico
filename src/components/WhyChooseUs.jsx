import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f5] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Small heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[#7d7e7c] text-semibold text-xs sm:text-sm tracking-[0.35em] uppercase">
            WHY CHOOSE US
          </h2>
        </div>

        {/* Main heading */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="font-['Libre_Caslon_Display'] text-[32px] sm:text-[45px] md:text-[55px] lg:text-[67px] leading-[1.12em] text-gray-900 max-w-[1000px] mx-auto tracking-normal">
            Curated to match your preferences and desires, our selection includes luxury resorts, exclusive tours, and transfers for an unparalleled experience
          </h1>
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-gray-900 text-sm font-medium text-gray-900 bg-transparent hover:bg-gray-50 transition-colors">
            Learn More
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;