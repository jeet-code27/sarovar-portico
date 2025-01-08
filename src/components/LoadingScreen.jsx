import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      {/* Outer circle container */}
      <div className="relative w-32 h-32 mb-8">
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-300 animate-[spin_3s_linear_infinite]"></div>
        <div className="absolute inset-2 rounded-full border-4 border-blue-400 animate-[spin_3s_linear_infinite_reverse]"></div>
        <div className="absolute inset-4 rounded-full border-4 border-blue-500 animate-[spin_3s_linear_infinite]"></div>
        
        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-serif text-blue-600">SP</span>
        </div>
      </div>

      {/* Hotel name */}
      <h1 className="text-3xl font-serif text-blue-600 mb-4 tracking-wide">
        SAROVAR PORTICO
      </h1>
      
      {/* Loading text */}
      <div className="text-lg text-gray-600 font-light tracking-wider">
        Welcome to Luxury{dots}
      </div>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-gray-100 rounded-full mt-6 overflow-hidden">
        <div className="h-full bg-blue-500 animate-[loading_2s_ease-in-out_infinite] rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;