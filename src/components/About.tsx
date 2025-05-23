
import React from 'react';
import { Briefcase, GraduationCap, Calendar, User, Award, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const About = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const animateContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const defaultTiltOptions = {
    max: 15,
    scale: 1.05,
    speed: 1000,
    transition: true,
  };

  const softSkills = [
    {
      icon: <User className="text-portfolio-teal" />,
      title: "Self-Learning",
      description: "Always eager to learn new technologies and expand my knowledge base."
    },
    {
      icon: <Users className="text-portfolio-blue" />,
      title: "Team Collaboration",
      description: "Effective team player with strong communication skills."
    },
    {
      icon: <BookOpen className="text-portfolio-teal" />,
      title: "Problem Solving",
      description: "Analytical thinker with a knack for finding elegant solutions."
    },
    {
      icon: <Award className="text-portfolio-blue" />,
      title: "Creativity",
      description: "Bringing innovative approaches to technical challenges."
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,227,194,0.1)_0%,rgba(10,26,47,0)_70%)]"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Image Start */}
          <Tilt options={defaultTiltOptions}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full mb-4 border-4 border-portfolio-teal shadow-lg object-cover"
              />
            </motion.div>
          </Tilt>
          {/* Profile Image End */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-blue to-portfolio-teal rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            variants={animateContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              variants={fadeInUpVariants} 
              custom={0}
              className="text-2xl font-bold mb-4 text-portfolio-teal"
            >
              My Background
            </motion.h3>
            <motion.p variants={fadeInUpVariants} custom={1} className="text-portfolio-gray mb-6">
              I'm a passionate IT student with a deep interest in creating beautiful, functional web experiences. 
              Currently pursuing my 2nd year at Kongunadu College of Engineering and Technology with an expected graduation in 2027.
            </motion.p>
            <motion.p variants={fadeInUpVariants} custom={2} className="text-portfolio-gray mb-6">
              My journey in web development started with a fascination for how technology can be made more intuitive and accessible.
              I believe in creating designs that not only look good but also provide exceptional user experiences.
            </motion.p>
            <motion.p variants={fadeInUpVariants} custom={3} className="text-portfolio-gray">
              Currently doing a Micro IT Internship, focusing on E-commerce and Blog Websites, which has allowed me to apply my skills in real-world projects and gain valuable industry experience.
            </motion.p>
            
            <motion.div
              variants={fadeInUpVariants}
              custom={4}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                  <div className="mr-3">
                    <div className="h-10 w-10 rounded-full bg-gray-800/50 flex items-center justify-center">
                      {skill.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{skill.title}</h4>
                    <p className="text-xs text-portfolio-gray mt-1">{skill.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 glassmorphism"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-portfolio-teal">Education & Experience</h3>

            <div className="space-y-6">
              <motion.div 
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="mr-4">
                  <div className="h-10 w-10 rounded-full bg-portfolio-teal/20 flex items-center justify-center">
                    <GraduationCap className="text-portfolio-teal" size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">B.Tech Information Technology</h4>
                  <p className="text-portfolio-gray">Kongunadu College of Engineering and Technology</p>
                  <div className="flex items-center mt-1 text-sm text-portfolio-gray">
                    <Calendar size={14} className="mr-1" /> 
                    <span>2023 - 2027 (Expected)</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="mr-4">
                  <div className="h-10 w-10 rounded-full bg-portfolio-blue/20 flex items-center justify-center">
                    <Briefcase className="text-portfolio-blue" size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Micro IT Internship</h4>
                  <p className="text-portfolio-gray">E-commerce and Blog Websites</p>
                  <div className="flex items-center mt-1 text-sm text-portfolio-gray">
                    <Calendar size={14} className="mr-1" /> 
                    <span>Present</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="mr-4">
                  <div className="h-10 w-10 rounded-full bg-portfolio-blue/20 flex items-center justify-center">
                    <Award className="text-portfolio-blue" size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Smart Traffic Management System</h4>
                  <p className="text-portfolio-gray">SIH 2024 Project</p>
                  <div className="flex items-center mt-1 text-sm text-portfolio-gray">
                    <Calendar size={14} className="mr-1" /> 
                    <span>2024</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="mr-4">
                  <div className="h-10 w-10 rounded-full bg-portfolio-teal/20 flex items-center justify-center">
                    <Award className="text-portfolio-teal" size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">AI Habit Tracker</h4>
                  <p className="text-portfolio-gray">HackIndia Spark 2 Project</p>
                  <div className="flex items-center mt-1 text-sm text-portfolio-gray">
                    <Calendar size={14} className="mr-1" /> 
                    <span>2024</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
