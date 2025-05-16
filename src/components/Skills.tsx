
import React from 'react';
import { Code, Database, Layout, CodeXml } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const programmingSkills = [
    { name: "Java", level: 85 },
    { name: "C", level: 80 },
    { name: "Python", level: 75 },
    { name: "DBMS", level: 70 },
    { name: "HTML & CSS", level: 85 },
    { name: "UI/UX Design", level: 80 },
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
      icon: <Code className="h-8 w-8 text-portfolio-blue" />
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
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-900/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-blue to-portfolio-teal rounded"></div>
          <p className="text-portfolio-gray text-center mt-6 max-w-2xl">
            I've developed a diverse set of skills in various programming languages and technologies, 
            with a special focus on creating exceptional UI/UX experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="space-y-6">
            {programmingSkills.map((skill, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-portfolio-gray">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-gray-800">
                  <div 
                    className="h-full bg-gradient-to-r from-portfolio-blue to-portfolio-teal rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </Progress>
              </div>
            ))}
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 animate-fade-in-up">
            <h3 className="text-xl font-bold mb-6 text-center text-portfolio-teal">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <p className="text-portfolio-gray">Develop responsive and user-friendly web applications</p>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <p className="text-portfolio-gray">Create intuitive UI designs with exceptional user experience</p>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <p className="text-portfolio-gray">Implement database solutions with efficient query optimization</p>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <p className="text-portfolio-gray">Build backend services that are reliable and scalable</p>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-portfolio-teal mt-2 mr-2"></div>
                <p className="text-portfolio-gray">Solve complex problems with elegant, efficient solutions</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCards.map((card, index) => (
            <div 
              key={index} 
              className="skill-card flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-portfolio-gray text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
