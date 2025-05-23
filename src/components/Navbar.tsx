
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      } 
    })
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 
          ? 'bg-portfolio-dark/90 shadow-lg backdrop-blur-sm py-3' 
          : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-bold text-gradient">PORTFOLIO</a>
          </motion.div>

          {/* Theme Toggle */}
          <div className="flex items-center md:order-3">
            <motion.div 
              className="mr-4 md:mr-0"
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-800/40 text-gray-300 hover:text-white hover:bg-gray-700/60"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </motion.div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden ml-4">
              <motion.button 
                onClick={toggleMenu} 
                className="text-portfolio-light p-2"
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.a
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              custom={navLinks.length}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <Button variant="ghost" className="border border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 transition-all duration-300">
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className="md:hidden fixed top-[60px] right-0 left-0 bg-portfolio-dark/95 backdrop-blur-md pt-5 pb-10"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="nav-link text-lg"
                onClick={closeMenu}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Button variant="ghost" className="border border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10" onClick={closeMenu}>
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
