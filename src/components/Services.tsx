
import React from 'react';
import { Laptop, Code, PenTool, Search, SlidersHorizontal, Database } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with focus on usability and aesthetics.",
      icon: <PenTool className="h-10 w-10 text-portfolio-blue" />
    },
    {
      title: "Web Development",
      description: "Building responsive websites and web applications that work smoothly on any device.",
      icon: <Laptop className="h-10 w-10 text-portfolio-teal" />
    },
    {
      title: "Frontend Development",
      description: "Transforming UI designs into functional websites using modern frontend technologies.",
      icon: <Code className="h-10 w-10 text-portfolio-blue" />
    },
    {
      title: "SEO Optimization",
      description: "Improving website visibility and search engine rankings to drive more traffic.",
      icon: <Search className="h-10 w-10 text-portfolio-teal" />
    },
    {
      title: "Performance Optimization",
      description: "Enhancing website speed and performance for better user experience.",
      icon: <SlidersHorizontal className="h-10 w-10 text-portfolio-blue" />
    },
    {
      title: "Database Design",
      description: "Creating efficient database structures that ensure optimal data management.",
      icon: <Database className="h-10 w-10 text-portfolio-teal" />
    }
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(51,204,255,0.1)_0%,rgba(10,26,47,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-blue to-portfolio-teal rounded"></div>
          <p className="text-portfolio-gray text-center mt-6 max-w-2xl">
            I specialize in creating best-in-class UI/UX designed web pages focused on user experience and visual appeal,
            along with other technical services to meet diverse project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-portfolio-blue/40 hover:shadow-lg hover:shadow-portfolio-blue/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="h-20 w-20 rounded-full bg-gray-800/80 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
              <p className="text-portfolio-gray text-center">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-3 text-gradient">Need a Custom Solution?</h3>
          <p className="text-portfolio-gray mb-6 max-w-2xl mx-auto">
            If you're looking for specific services tailored to your unique project requirements,
            I'd be happy to discuss how we can work together to bring your vision to life.
          </p>
          <Button className="bg-portfolio-blue hover:bg-portfolio-blue/80 text-white">
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
