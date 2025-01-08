import React from 'react';
import { Facebook, Twitter, Instagram, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-white w-full">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="w-40 md:w-48 h-24 md:h-32 bg-white flex items-center justify-center rounded-lg border border-white">
              <img 
                src="images/logo.png"
                alt="Sarovar Hotels Logo" 
                className="max-w-full p-2 h-auto"
              />
            </div>
            <p className="text-base md:text-lg text-center md:text-left leading-relaxed">
              India's Leading Hotel Chain
              <br />
              120 Hotels Across 75 Destinations 
              <br />
              in India & Beyond
            </p>
          </div>

          {/* Address Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl md:text-2xl libre-caslon-display-regular font-semibold">
              Address
            </h3>
            <p className="text-base md:text-lg text-center md:text-left leading-relaxed">
              Aamantran, Gautam Palvi Rd,
              <br />
              Sector 3F, Sector 3, Vaishali,
              <br />
              Ghaziabad, Uttar Pradesh 201012
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl md:text-2xl libre-caslon-display-regular font-semibold">
              Contact Us
            </h3>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <a 
                href="tel:+919058033474" 
                className="text-base md:text-lg hover:text-[#d98600] transition-colors"
              >
                +91-9058033474
              </a>
              <a 
                href="mailto:info@sarovarporticobook.in" 
                className="text-base md:text-lg hover:text-[#d98600] transition-colors text-center md:text-left"
              >
                info@sarovarporticobook.in
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl md:text-2xl libre-caslon-display-regular font-semibold">
              Connect With Us
            </h3>
            <div className="flex space-x-4 md:space-x-6">
              <a 
                href="/" 
                className="text-white hover:bg-[#2d2d2d] transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={24} className="md:w-8 md:h-8" />
              </a>
              <a 
                href="/" 
                className="text-white hover:bg-[#2d2d2d] transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter size={24} className="md:w-8 md:h-8" />
              </a>
              <a 
                href="/" 
                className="text-white hover:bg-[#2d2d2d] transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={24} className="md:w-8 md:h-8" />
              </a>
              <a 
                href="/" 
                className="text-white hover:bg-[#2d2d2d] transition-colors p-2 rounded-full"
                aria-label="Music"
              >
                <Music size={24} className="md:w-8 md:h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white mt-8 md:mt-12 pt-6 md:pt-8">
          <p className="text-center text-sm md:text-base">
            © {new Date().getFullYear()} Sarovar Hotels Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;