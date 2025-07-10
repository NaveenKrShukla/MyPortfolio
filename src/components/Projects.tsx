import React from 'react';
import { ExternalLink, Github, Globe, Dumbbell } from 'lucide-react';

// ✅ Local image imports from src/assets
import tomatoImage from '../assets/tomato.png';
import gurucoolImage from '../assets/gurucool.png';
import fitooImage from '../assets/fitoo.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tomato – Food Delivery App",
      description: "React-based food delivery app with category browsing, cart, and toast notifications.",
      longDescription: "Built using React and Vite, this app features a modern UI, category-based food browsing, cart functionality, and responsive design. Toast messages improve user experience during cart operations.",
      image: tomatoImage,
      tech: ["React", "Vite", "Tailwind", "Toastify"],
      liveUrl: "https://tomato-a-food-delivery-app.vercel.app/",
      githubUrl: "https://github.com/NaveenKrShukla/Tomato-A-Food-Delivery-App",
      featured: true,
      icon: Globe
    },
    {
      id: 2,
      title: "GuruCool – EdTech Platform",
      description: "Educational website using React with custom UI elements and smooth scroll experience.",
      longDescription: "GuruCool is a responsive single-page educational platform built with React. It includes a testimonial slider, video player, reusable components, and scroll-based navigation.",
      image: gurucoolImage,
      tech: ["React", "CSS", "JSX", "Netlify"],
      liveUrl: "https://mygurucool.netlify.app/",
      githubUrl: "https://github.com/NaveenKrShukla/GuruCool",
      featured: false,
      icon: Globe
    },
    {
      id: 3,
      title: "Fitoo – Fitness Tracker",
      description: "Full-stack fitness tracker with JWT auth and MongoDB storage.",
      longDescription: "A MERN stack web application where users can register, log workouts, and track fitness goals. Implemented JWT authentication, REST APIs, and responsive dashboard using React.",
      image: fitooImage,
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      liveUrl: "q",
      githubUrl: "https://github.com/NaveenKrShukla/FitnessWebsite-MERN-Project",
      featured: false,
      icon: Dumbbell
    }
  ];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
  <div
    className="group relative overflow-hidden rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all duration-300 hover:scale-[1.02]"
    style={{ animationDelay: `${index * 200}ms` }}
  >
    {/* Image with overlay */}
    <div className="relative w-full h-56 md:h-64 lg:h-60 overflow-hidden rounded-t-2xl">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
    </div>

    {/* Content */}
    <div className="relative z-20 p-6">
      <project.icon className="h-8 w-8 text-blue-400 mb-3" />
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{project.title}</h3>
      <p className="text-slate-300 mb-4 leading-relaxed line-clamp-4">
        {project.longDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
        >
          <Github className="h-4 w-4" />
          Code
        </a>
      </div>
    </div>
  </div>
);



  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Here are a few of my recent projects that showcase my passion for building scalable 
              full-stack applications with clean UI and real-world usability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://github.com/NaveenKrShukla?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
