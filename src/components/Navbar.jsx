import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navigationItems = [
    { name: 'Home', icon: <Home className="w-5 h-5" />, href: '/' },
    { name: 'About', icon: <Info className="w-5 h-5" />, href: '/about' },
    { name: 'Contact', icon: <Mail className="w-5 h-5" />, href: '/contact' },
  ];

  const navVariants = {
    hidden: { y: '-100%' },
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const logoVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <>
      <motion.nav
        initial="visible"
        animate={visible ? 'visible' : 'hidden'}
        variants={navVariants}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="backdrop-blur-xl  border-b border-white/10 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <motion.div 
                className="flex-shrink-0 flex items-center"
                variants={logoVariants}
                initial="rest"
                whileHover="hover"
              >
                <Link to="/">
                  <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="h-16 w-auto drop-shadow-2xl hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
                  />
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-12">
                {navigationItems.map((item) => (
                  <motion.div key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                        location.pathname === item.href
                          ? 'bg-black/20 text-black'
                          : 'text-black hover:text-gray hover:bg-black/10'
                      }`}
                    >
                      <motion.span
                        className="text-black/70 group-hover:text-black/90 transition-colors"
                        whileHover={{ rotate: 10 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="text-sm font-medium tracking-wide">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-3 rounded-full bg-black/10 text-black/90 hover:bg-black/20 hover:text-black focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 backdrop-blur-xl bg-white z-40 md:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="flex flex-col items-center justify-center h-full space-y-12"
            >
              {navigationItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.href}
                    className="flex flex-col items-center space-y-2 text-white/90 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      className="text-black/70 p-4 bg-black/10 rounded-full"
                      whileHover={{ rotate: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-4xl text-black/70 font-light tracking-wider">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;