
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Smart Traffic Management System",
      description: "A project focused on intelligent traffic solutions using AI to optimize traffic flow and reduce congestion in urban areas.",
      category: "SIH 2024",
      technologies: ["Python", "TensorFlow", "OpenCV", "React"],
      image: "bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format')]"
    },
    {
      title: "AI Habit Tracker",
      description: "An AI-powered tool to help users build and maintain habits by providing personalized insights and motivation.",
      category: "HackIndia 2025",
      technologies: ["React", "Node.js", "MongoDB", "TensorFlow.js"],
      image: "bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format')]"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-900/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-blue to-portfolio-teal rounded"></div>
          <p className="text-portfolio-gray text-center mt-6 max-w-2xl">
            Here are some of my notable projects that showcase my skills and expertise
            in developing innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="portfolio-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-60 w-full ${project.image} bg-cover bg-center`}>
                <div className="h-full w-full bg-portfolio-dark/50 backdrop-blur-sm flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-portfolio-light">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-portfolio-teal bg-portfolio-teal/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-portfolio-gray mb-4">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-800 text-portfolio-gray px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button size="sm" variant="ghost" className="text-portfolio-blue hover:bg-portfolio-blue/10 hover:text-portfolio-blue border border-portfolio-blue/30">
                    <Github size={16} className="mr-2" /> Source Code
                  </Button>
                  <Button size="sm" variant="ghost" className="text-portfolio-teal hover:bg-portfolio-teal/10 hover:text-portfolio-teal border border-portfolio-teal/30">
                    <ExternalLink size={16} className="mr-2" /> Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6">Interested in my work?</h3>
          <p className="text-portfolio-gray mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities.
          </p>
          <Button className="bg-portfolio-blue hover:bg-portfolio-blue/80 text-white">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
