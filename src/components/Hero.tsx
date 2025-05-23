
import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Tilt } from 'react-tilt';

const Hero = () => {
  const constraintsRef = useRef(null);
  
  const defaultTiltOptions = {
    max: 25,
    scale: 1.05,
    speed: 1000,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)"
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(51,204,255,0.15)_0%,rgba(10,26,47,0)_70%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-blue/20 to-transparent"></div>
      </div>
      
      <div ref={constraintsRef} className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <motion.div 
          className="w-full md:w-2/3 md:pr-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h3 
            className="text-portfolio-teal font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello, my name is
          </motion.h3>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Karthikeyan S
          </motion.h1>
          
          <motion.div
            className="text-2xl md:text-4xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center h-12">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'Tech Enthusiast',
                    'Problem Solver',
                    'Hackathon Participant'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </motion.div>
          
          <motion.p 
            className="text-portfolio-gray text-lg mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Building Modern Web Experiences. A passionate IT student skilled in Java, Python, C, and web development,
            focused on creating exceptional digital experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-portfolio-blue hover:bg-portfolio-blue/80 text-white font-medium py-2 px-6 rounded-md transition-all duration-300">
                <a href="#projects" className="flex items-center">
                  View My Work <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="/Resume.pdf" 
                download 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 font-medium py-2 px-6 rounded-md flex items-center border transition"
                style={{ textDecoration: 'none' }}
              >
                <Download size={16} className="mr-2" /> Download Resume
              </a>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="#contact" 
                className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 font-medium py-2 px-6 rounded-md flex items-center border transition"
                style={{ textDecoration: 'none' }}
              >
                <ExternalLink size={16} className="mr-2" /> Contact Me
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <div className="w-full md:w-1/3 mt-12 md:mt-0 flex justify-center">
          <Tilt options={defaultTiltOptions}>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.4
              }}
            >
              <div className="h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-2 border-portfolio-blue/30 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-portfolio-blue/20 to-portfolio-teal/20">
                  {/* Profile Image */}
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-portfolio-teal/20 backdrop-blur-md"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-portfolio-blue/20 backdrop-blur-md"
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              ></motion.div>
            </motion.div>
          </Tilt>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5,
          duration: 0.6 
        }}
        style={{ x: "-50%" }}
      >
        <motion.a 
          href="#about" 
          className="text-portfolio-gray hover:text-portfolio-light transition-colors duration-300"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <ChevronDown size={30} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
