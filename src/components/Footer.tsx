
import React from 'react';
import { Heart, Linkedin, Github, Code, BookOpen, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Check out Karthikeyan S's portfolio website!");
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`, '_blank');
  };
  
  const socialLinks = [
    { icon: <Github size={18} />, url: 'https://github.com/karthiks2004', name: 'GitHub' },
    { icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/karthikeyan-s', name: 'LinkedIn' },
    { icon: <Code size={18} />, url: 'https://leetcode.com/karthiks2004', name: 'LeetCode' },
    { icon: <Code size={18} />, url: 'https://www.codechef.com/users/karthiks2004', name: 'CodeChef' },
    { icon: <BookOpen size={18} />, url: 'https://codetantra.com/login', name: 'CodeTantra' },
    { icon: <Mail size={18} />, url: 'mailto:karthikeyans.official@gmail.com', name: 'Email' },
  ];
  
  return (
    <footer className="py-10 border-t border-gray-800 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(51,204,255,0.05)_0%,rgba(10,26,47,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gradient">Karthikeyan S</h2>
            <p className="text-portfolio-gray mt-2">Building Modern Web Experiences</p>
          </motion.div>
          
          <div className="flex flex-col items-center md:items-end space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-4 justify-center md:justify-end"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-gray hover:text-portfolio-blue transition-all duration-300 flex items-center gap-1"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  <span className="text-sm">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                variant="outline" 
                size="sm" 
                onClick={shareOnLinkedIn}
                className="text-portfolio-blue border-portfolio-blue/40 hover:bg-portfolio-blue/10"
              >
                <Linkedin size={16} className="mr-2" /> Share on LinkedIn
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-portfolio-gray text-sm">
                &copy; {currentYear} All rights reserved
              </p>
              <p className="text-sm flex items-center justify-center md:justify-end">
                Made with <Heart size={14} className="mx-1 text-red-500 animate-pulse" /> by Karthikeyan S
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
