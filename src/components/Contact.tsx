
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,227,194,0.1)_0%,rgba(10,26,47,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-blue to-portfolio-teal rounded"></div>
          <p className="text-portfolio-gray text-center mt-6 max-w-2xl">
            Feel free to contact me for any project inquiries or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-teal">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-portfolio-blue/20 flex items-center justify-center mr-4">
                  <Mail className="text-portfolio-blue" size={18} />
                </div>
                <div>
                  <h4 className="font-bold">Email Address</h4>
                  <a 
                    href="mailto:karthisenthil026@gmail.com" 
                    className="text-portfolio-gray hover:text-portfolio-blue transition-colors duration-300"
                  >
                    karthisenthil026@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-portfolio-teal/20 flex items-center justify-center mr-4">
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
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-portfolio-blue/20 flex items-center justify-center mr-4">
                  <MapPin className="text-portfolio-blue" size={18} />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-portfolio-gray">
                    Kongunadu College of Engineering and Technology
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Karthikeyan-S26"
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 rounded-full bg-gray-900 flex items-center justify-center social-icon hover:bg-gray-800 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/karthikeyan-s-tech"
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 rounded-full bg-gray-900 flex items-center justify-center social-icon hover:bg-gray-800 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 animate-fade-in-up">
            <h3 className="text-xl font-bold mb-6 text-portfolio-teal">Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-700 focus:border-portfolio-blue"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-700 focus:border-portfolio-blue"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-700 focus:border-portfolio-blue"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-700 focus:border-portfolio-blue min-h-[120px]"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-portfolio-blue to-portfolio-teal hover:from-portfolio-blue/90 hover:to-portfolio-teal/90"
                >
                  <Send size={16} className="mr-2" /> Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
