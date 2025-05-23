
import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "E-commerce Website",
      description: "A responsive e-commerce platform with product listings, shopping cart functionality, and secure checkout process.",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      image: "bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format')]",
      type: "web"
    },
    {
      title: "Blog Website",
      description: "A modern blog platform with content management system, user authentication, and responsive design.",
      category: "Web Development",
      technologies: ["React", "Node.js", "MySQL", "Express"],
      image: "bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format')]",
      type: "web"
    },
    {
      title: "Smart Traffic Management System",
      description: "An intelligent traffic solution using AI to optimize traffic flow and reduce congestion in urban areas.",
      category: "SIH 2024",
      technologies: ["Python", "TensorFlow", "OpenCV", "React"],
      image: "bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format')]",
      type: "hackathon"
    },
    {
      title: "AI Habit Tracker",
      description: "An AI-powered tool to help users build and maintain habits by providing personalized insights and motivation.",
      category: "HackIndia Spark 2",
      technologies: ["React", "Node.js", "MongoDB", "TensorFlow.js"],
      image: "bg-[url('https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=500&auto=format')]",
      type: "hackathon"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const defaultTiltOptions = {
    max: 10,
    scale: 1,
    speed: 1000,
  };

  return (
    <section id="projects" className="section-padding bg-gray-900/30 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(51,204,255,0.05)_0%,rgba(10,26,47,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-blue to-portfolio-teal rounded"></div>
          <p className="text-portfolio-gray text-center mt-6 max-w-2xl">
            Here are some of my notable projects that showcase my skills and expertise
            in developing innovative solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['all', 'web', 'hackathon'].map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-portfolio-primary text-white' 
                    : 'bg-gray-800/50 text-portfolio-gray hover:bg-gray-700/70'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <Tilt options={defaultTiltOptions}>
                <div className="portfolio-card h-full flex flex-col glassmorphism">
                  <div className={`h-60 w-full ${project.image} bg-cover bg-center`}>
                    <div className="h-full w-full bg-portfolio-dark/60 backdrop-blur-sm flex items-center justify-center p-6">
                      <h3 className="text-2xl font-bold text-portfolio-light text-shadow text-center">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="text-xs font-medium uppercase tracking-wider text-portfolio-teal bg-portfolio-teal/10 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-portfolio-gray mb-4 flex-grow">
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
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <Button size="sm" variant="ghost" className="text-portfolio-blue hover:bg-portfolio-blue/10 hover:text-portfolio-blue border border-portfolio-blue/30">
                        <Github size={16} className="mr-2" /> Code
                      </Button>
                      <Button size="sm" variant="ghost" className="text-portfolio-teal hover:bg-portfolio-teal/10 hover:text-portfolio-teal border border-portfolio-teal/30">
                        <ExternalLink size={16} className="mr-2" /> Demo
                      </Button>
                      <Button size="sm" variant="ghost" className="text-portfolio-primary hover:bg-portfolio-primary/10 hover:text-portfolio-primary border border-portfolio-primary/30">
                        <Code size={16} className="mr-2" /> Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">Interested in my work?</h3>
          <p className="text-portfolio-gray mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-portfolio-blue hover:bg-portfolio-blue/80 text-white">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
