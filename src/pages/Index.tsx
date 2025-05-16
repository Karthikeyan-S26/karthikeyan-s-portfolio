
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WaveAnimation from '@/components/WaveAnimation';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-dark text-portfolio-light overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <WaveAnimation />
    </div>
  );
};

export default Index;
