import React from 'react';
import { Code, Palette, Database, Zap, Shield, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML / CSS / JS", level: 95 },
        { name: "Tailwind CSS", level: 95 }
      ]
    },
    {
      title: "UI/UX & Design Tools",
      icon: Palette,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "Framer Motion / Animations", level: 85 },
        { name: "Accessibility (A11y)", level: 80 }
      ]
    },
    {
      title: "Backend & Databases",
      icon: Database,
      skills: [
        { name: "Node.js & Express.js", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "MySQL / PostgreSQL", level: 70 },
        { name: "REST API / JWT Auth", level: 90 }
      ]
    },
    {
      title: "Testing & Performance",
      icon: Zap,
      skills: [
        { name: "Performance Optimization", level: 85 },
        { name: "Lighthouse & Web Vitals", level: 80 },
        { name: "Jest / React Testing Library", level: 75 },
        { name: "Bundle Analysis", level: 80 }
      ]
    },
    {
      title: "DevOps & Deployment",
      icon: Shield,
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "CI/CD (GitHub Actions)", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Vercel / Netlify / Railway", level: 90 }
      ]
    },
    {
      title: "Productivity Tools",
      icon: Cpu,
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Postman / ThunderClient", level: 90 },
        { name: "Vite / Webpack", level: 85 },
        { name: "Notion / Trello / Slack", level: 90 }
      ]
    }
  ];

  const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }, delay: number }) => (
    <div className="mb-4" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 font-medium">{skill.name}</span>
        <span className="text-blue-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Here's a breakdown of my technical strengths across the frontend, backend, tools, and devops landscape.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-6 bg-slate-900/50 rounded-2xl hover:bg-slate-900/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      delay={categoryIndex * 150 + skillIndex * 50}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "30+", label: "Projects Completed" },
                { number: "2+", label: "Years Experience" },
                { number: "20+", label: "Tech Tools Used" },
                { number: "100%", label: "Learning Mindset" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
