
import React from 'react';
import { Code, Database, Layout, CodeXml, Server, Shield, FileCode, BrainCircuit } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const Skills = () => {
  const programmingSkills = [
    { name: "Java", level: 85 },
    { name: "Python", level: 75 },
    { name: "C", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "HTML & CSS", level: 85 },
    { name: "MySQL", level: 70 },
    { name: "Data Structures", level: 75 },
    { name: "Cybersecurity", level: 65 },
  ];

  const skillCards = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern web technologies.",
      icon: <Layout className="h-8 w-8 text-portfolio-teal" />
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs.",
      icon: <Server className="h-8 w-8 text-portfolio-blue" />
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database structures for efficient data storage and retrieval.",
      icon: <Database className="h-8 w-8 text-portfolio-teal" />
    },
    {
      title: "UI/UX Design",
      description: "Crafting beautiful and intuitive user experiences with a focus on usability.",
      icon: <CodeXml className="h-8 w-8 text-portfolio-blue" />
    },
    {
      title: "Data Structures",
      description: "Implementing efficient algorithms and data structures for optimal performance.",
      icon: <FileCode className="h-8 w-8 text-portfolio-teal" />
    },
    {
      title: "Cybersecurity",
      description: "Understanding security fundamentals to build safer applications.",
      icon: <Shield className="h-8 w-8 text-portfolio-blue" />
    },
    {
      title: "Problem Solving",
      description: "Analytical thinking and creative approaches to complex technical challenges.",
      icon: <BrainCircuit className="h-8 w-8 text-portfolio-teal" />
    },
    {
      title: "Web Development",
      description: "Full-stack development of modern web applications.",
      icon: <Code className="h-8 w-8 text-portfolio-blue" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const defaultTiltOptions = {
    max: 10,
    scale: 1.05,
    speed: 1000,
    glare: true,
    "max-glare": 0.1
  };

  return (
    <section id="skills" className="section-padding bg-gray-900/30 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-blue to-portfolio-teal rounded"></div>
          <p className="text-portfolio-gray text-center mt-6 max-w-2xl">
            I've developed a diverse set of skills in various programming languages and technologies, 
            with a focus on both frontend and backend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {programmingSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                custom={index}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-portfolio-gray">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-portfolio-blue to-portfolio-teal"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 glassmorphism"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-center text-portfolio-teal">What I Do</h3>
            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li className="flex items-start" variants={itemVariants}>
                <div className="h-1.5 w-1.5 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <p className="text-portfolio-gray">Develop responsive and user-friendly web applications</p>
              </motion.li>
              <motion.li className="flex items-start" variants={itemVariants}>
                <div className="h-1.5 w-1.5 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <p className="text-portfolio-gray">Create intuitive UI designs with exceptional user experience</p>
              </motion.li>
              <motion.li className="flex items-start" variants={itemVariants}>
                <div className="h-1.5 w-1.5 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <p className="text-portfolio-gray">Implement database solutions with efficient query optimization</p>
              </motion.li>
              <motion.li className="flex items-start" variants={itemVariants}>
                <div className="h-1.5 w-1.5 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <p className="text-portfolio-gray">Build backend services that are reliable and scalable</p>
              </motion.li>
              <motion.li className="flex items-start" variants={itemVariants}>
                <div className="h-1.5 w-1.5 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <p className="text-portfolio-gray">Apply cybersecurity principles to ensure application safety</p>
              </motion.li>
              <motion.li className="flex items-start" variants={itemVariants}>
                <div className="h-1.5 w-1.5 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <p className="text-portfolio-gray">Use data structures and algorithms to solve complex problems</p>
              </motion.li>
              <motion.li className="flex items-start" variants={itemVariants}>
                <div className="h-1.5 w-1.5 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <p className="text-portfolio-gray">Collaborate in team environments on hackathon projects</p>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCards.map((card, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Tilt options={defaultTiltOptions}>
                <div className="skill-card flex flex-col items-center text-center h-full">
                  <div className="mb-4 p-3 rounded-full bg-gray-800/50 animate-pulse-glow">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-portfolio-gray text-sm">{card.description}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
