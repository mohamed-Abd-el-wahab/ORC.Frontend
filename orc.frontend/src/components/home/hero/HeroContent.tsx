import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Trophy } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="flex flex-col items-center justify-center">
        <img 
          src="/header_logo.svg" 
          alt="Logo" 
          className="w-72 h-auto mb-12"
        />
        
        <p className="text-xl md:text-3xl text-gray-300 mb-12">
          A Place for Builders
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
          <Link
            to="/competition"
            className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-lg font-medium"
          >
            <span className="relative z-10 flex items-center">
              <Trophy className="w-5 h-5 mr-2" />
              Join Competition
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            to="/services"
            className="group flex items-center px-10 py-4 border border-gray-700 hover:border-blue-500 text-white rounded-lg text-lg font-medium transition-all duration-300 backdrop-blur-sm"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;