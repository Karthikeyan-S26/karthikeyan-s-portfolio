
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-portfolio-dark/90 shadow-lg backdrop-blur-sm py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div>
            <a href="#home" className="text-2xl font-bold text-gradient">PORTFOLIO</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
            <Button variant="ghost" className="border border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 transition-all duration-300">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-portfolio-light p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-[60px] right-0 left-0 bg-portfolio-dark/95 backdrop-blur-md pt-5 pb-10 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-lg"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <Button variant="ghost" className="border border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10" onClick={closeMenu}>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
