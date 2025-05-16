
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(51,204,255,0.15)_0%,rgba(10,26,47,0)_70%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-blue/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 animate-fade-in-up md:pr-8">
          <h3 className="text-portfolio-teal font-medium mb-2">Hello, my name is</h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Karthikeyan S</h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gradient">Full-Stack Developer</h2>
          <p className="text-portfolio-gray text-lg mb-8 max-w-xl">
            A passionate IT student skilled in Java, C, Python, and DBMS, 
            aiming to develop the best UI/UX web pages.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-portfolio-blue hover:bg-portfolio-blue/80 text-white font-medium py-2 px-6 rounded-md transition-all duration-300">
              <a href="#portfolio" className="flex items-center">
                View My Work <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
            <Button variant="outline" className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 font-medium py-2 px-6 rounded-md transition-all duration-300">
              <Download size={16} className="mr-2" /> Download Resume
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 mt-12 md:mt-0 flex justify-center">
          <div className="relative">
            <div className="h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-2 border-portfolio-blue/30 p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-portfolio-blue/20 to-portfolio-teal/20">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-portfolio-dark/50 flex items-center justify-center">
                  <span className="text-5xl text-portfolio-blue">K</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-portfolio-teal/20 backdrop-blur-md"></div>
            <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-portfolio-blue/20 backdrop-blur-md"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-portfolio-gray hover:text-portfolio-light transition-colors duration-300">
          <ChevronDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
