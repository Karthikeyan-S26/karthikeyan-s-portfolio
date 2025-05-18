import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,227,194,0.1)_0%,rgba(10,26,47,0)_70%)]"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-12">
          {/* Profile Image Start */}
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 border-4 border-portfolio-teal shadow-lg object-cover"
          />
          {/* Profile Image End */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-blue to-portfolio-teal rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 text-portfolio-teal">My Background</h3>
            <p className="text-portfolio-gray mb-6">
              I'm a passionate IT student with a deep interest in creating beautiful, functional web experiences. 
              Currently pursuing my 2nd year at Kongunadu College of Engineering and Technology with an expected graduation in 2027.
            </p>
            <p className="text-portfolio-gray mb-6">
              My journey in UI/UX design started with a fascination for how technology can be made more intuitive and accessible.
              I believe in creating designs that not only look good but also provide exceptional user experiences.
            </p>
            <p className="text-portfolio-gray">
              Outside of academics, I'm constantly exploring new technologies and techniques to enhance my skills and stay ahead in this rapidly evolving field.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-teal">Education & Experience</h3>

            <div className="space-y-6">
              <div className="flex">
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
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="h-10 w-10 rounded-full bg-portfolio-blue/20 flex items-center justify-center">
                    <Briefcase className="text-portfolio-blue" size={20} />
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
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="h-10 w-10 rounded-full bg-portfolio-blue/20 flex items-center justify-center">
                    <Briefcase className="text-portfolio-blue" size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">AI Habit Tracker</h4>
                  <p className="text-portfolio-gray">HackIndia 2025 Project</p>
                  <div className="flex items-center mt-1 text-sm text-portfolio-gray">
                    <Calendar size={14} className="mr-1" /> 
                    <span>2025 (Upcoming)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
