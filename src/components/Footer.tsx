
import React from 'react';
import { Heart, Share2, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Check out my portfolio website!");
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`, '_blank');
  };
  
  return (
    <footer className="py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gradient">Karthikeyan S</h2>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={shareOnLinkedIn}
              className="text-portfolio-blue border-portfolio-blue/40 hover:bg-portfolio-blue/10"
            >
              <Linkedin size={16} className="mr-2" /> Share on LinkedIn
            </Button>
            
            <p className="text-portfolio-gray text-sm mb-2">
              &copy; {currentYear} All rights reserved
            </p>
            <p className="text-sm flex items-center justify-center md:justify-end">
              Made with <Heart size={14} className="mx-1 text-red-500 animate-pulse" /> by Karthikeyan S
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
