import React from 'react';
import { Code, Lightbulb, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "MERN Stack Developer",
      description: "Built full-stack projects like fitness tracker, e-learning & food delivery apps"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Enjoy tackling real-world problems with clean and scalable code"
    },
    {
      icon: Users,
      title: "Community Contributor",
      description: "Conducted 10+ sessions as GDSC & Elixir coordinator"
    },
    {
      icon: Award,
      title: "Consistent Learner",
      description: "8.05 CGPA, certifications from Cisco, NPTEL, and FreeCodeCamp"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate frontend developer with a love for creating beautiful, functional, 
              and accessible web experiences. My journey in web development has been driven by 
              curiosity and a commitment to continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">My Story</h3>
              <div className="space-y-4 text-slate-300">
                <p>
                  I'm currently pursuing B.Tech in Computer Science from ABES Engineering College with a CGPA of 8.05. 
                  I started as a self-learner and now specialize in building modern web applications using React, 
                  Node.js, and MongoDB.
                </p>
                <p>
                  I’ve built projects like Tomato (food delivery), GuruCool (education platform), and Fitoo 
                  (fitness tracker), combining UI/UX with strong backend logic. I actively take part in college 
                  tech communities and enjoy mentoring juniors.
                </p>
                <p>
                  Beyond coding, I enjoy learning human behavior, contributing to open-source projects, 
                  and exploring the latest tech innovations.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-slate-900/50 hover:bg-slate-900/70 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">{title}</h4>
                    <p className="text-slate-300">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Technologies I Work With</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'React.js', 'TypeScript', 'Tailwind CSS', 'Node.js',
                'Express.js', 'MongoDB', 'JavaScript', 'Python',
                'Git', 'VS Code', 'Excel', 'Jupyter'
              ].map((tech) => (
                <div
                  key={tech}
                  className="text-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <span className="text-slate-300 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
