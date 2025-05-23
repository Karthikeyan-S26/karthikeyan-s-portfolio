
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Code, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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

  return (
    <section id="contact" className="section-padding relative">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-blue to-portfolio-teal rounded"></div>
          <p className="text-portfolio-gray text-center mt-6 max-w-2xl">
            Feel free to contact me for any project inquiries or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-portfolio-teal"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            
            <motion.div 
              className="space-y-6 mb-8"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="h-10 w-10 rounded-full bg-portfolio-blue/20 flex items-center justify-center mr-4 animate-pulse-glow">
                  <Mail className="text-portfolio-blue" size={18} />
                </div>
                <div>
                  <h4 className="font-bold">Email Address</h4>
                  <a 
                    href="mailto:karthikeyans.official@gmail.com" 
                    className="text-portfolio-gray hover:text-portfolio-blue transition-colors duration-300"
                  >
                    karthikeyans.official@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="h-10 w-10 rounded-full bg-portfolio-teal/20 flex items-center justify-center mr-4 animate-pulse-glow">
                  <Phone className="text-portfolio-teal" size={18} />
                </div>
                <div>
                  <h4 className="font-bold">Phone Number</h4>
                  <a 
                    href="tel:+918939533725" 
                    className="text-portfolio-gray hover:text-portfolio-teal transition-colors duration-300"
                  >
                    +91 8939533725
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="h-10 w-10 rounded-full bg-portfolio-blue/20 flex items-center justify-center mr-4 animate-pulse-glow">
                  <MapPin className="text-portfolio-blue" size={18} />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-portfolio-gray">
                    Kongunadu College of Engineering and Technology
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.h3 
              className="text-xl font-bold mb-4"
              variants={itemVariants}
            >
              Connect With Me
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              <motion.a 
                href="https://github.com/karthiks2004"
                target="_blank"
                rel="noreferrer"
                className="flex items-center p-3 rounded-lg bg-gray-900/70 hover:bg-gray-800 transition-colors duration-300 social-icon"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Github size={20} className="mr-3" />
                <span>Github</span>
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/karthikeyan-s"
                target="_blank"
                rel="noreferrer"
                className="flex items-center p-3 rounded-lg bg-gray-900/70 hover:bg-gray-800 transition-colors duration-300 social-icon"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Linkedin size={20} className="mr-3" />
                <span>LinkedIn</span>
              </motion.a>
              
              <motion.a 
                href="https://leetcode.com/karthiks2004"
                target="_blank"
                rel="noreferrer"
                className="flex items-center p-3 rounded-lg bg-gray-900/70 hover:bg-gray-800 transition-colors duration-300 social-icon"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Code size={20} className="mr-3" />
                <span>LeetCode</span>
              </motion.a>
              
              <motion.a 
                href="https://www.codechef.com/users/karthiks2004"
                target="_blank"
                rel="noreferrer"
                className="flex items-center p-3 rounded-lg bg-gray-900/70 hover:bg-gray-800 transition-colors duration-300 social-icon"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Code size={20} className="mr-3" />
                <span>CodeChef</span>
              </motion.a>
              
              <motion.a 
                href="https://codetantra.com/login"
                target="_blank"
                rel="noreferrer"
                className="flex items-center p-3 rounded-lg bg-gray-900/70 hover:bg-gray-800 transition-colors duration-300 social-icon"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <BookOpen size={20} className="mr-3" />
                <span>CodeTantra</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 glassmorphism"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-portfolio-teal">Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-700 focus:border-portfolio-blue"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-700 focus:border-portfolio-blue"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-700 focus:border-portfolio-blue"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-700 focus:border-portfolio-blue min-h-[120px]"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-portfolio-blue to-portfolio-teal hover:from-portfolio-blue/90 hover:to-portfolio-teal/90 relative overflow-hidden group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" /> Send Message
                        <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></div>
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
