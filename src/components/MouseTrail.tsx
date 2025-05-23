
import React, { useState, useEffect } from 'react';

const MouseTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 h-6 w-6 rounded-full bg-portfolio-blue/30 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-70' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transition: 'transform 0.1s ease-out, opacity 0.3s ease',
        }}
      />
      <div
        className={`fixed pointer-events-none z-50 h-24 w-24 rounded-full bg-portfolio-teal/10 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transition: 'left 0.3s ease-out, top 0.3s ease-out, opacity 0.3s ease',
        }}
      />
    </>
  );
};

export default MouseTrail;
