import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Hi, I'm Naveen Shukla
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Frontend Developer skilled in the MERN Stack. I build modern, user-friendly, and scalable web apps.
              Passionate about clean UI, smooth UX, and solving real-world problems through code.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToNext}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
            <a
             href="https://drive.google.com/file/d/1iaK5ChLgFYCedYeXjd8gDQICLcqbUcN0/view?usp=drive_link"

              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            {[
              { icon: Github, href: 'https://github.com/NaveenKrShukla', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/naveenkrshukla', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:itsnaveenshukla@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-slate-300 hover:text-white" />
              </a>
            ))}
          </div>

          {/* Scroll Button */}
          <button
            onClick={scrollToNext}
            className="animate-bounce p-2 rounded-full bg-slate-800/50 hover:bg-slate-700 transition-all duration-300"
          >
            <ArrowDown className="h-6 w-6 text-slate-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
