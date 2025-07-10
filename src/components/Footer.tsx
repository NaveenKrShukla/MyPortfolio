import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code2 className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold text-white">Naveen Shukla</span>
            </div>

            <div className="flex items-center justify-center space-x-1 text-slate-400 mb-4">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>and lots of ☕</span>
            </div>

            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Naveen Shukla. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
