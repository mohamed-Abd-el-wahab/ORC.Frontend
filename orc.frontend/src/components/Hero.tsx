import React from 'react';
import { Link } from 'react-router-dom';
import { CircuitBoard, Zap, Calendar, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Dynamic background with animated circuit patterns */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="absolute inset-0 bg-center bg-cover opacity-20"
             style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070)' }}>
        </div>
        
        <div className="relative z-20">
          <div className="flex items-center justify-center mb-8">
            <CircuitBoard className="w-24 h-24 text-blue-500 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
            ORC
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-400 mb-4 animate-slideIn">
            Battle of Survival
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
            The Ultimate Robot Combat Challenge where innovation meets survival
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to="/register"
              className="group flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-semibold"
            >
              Register Now
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center px-6 py-3 bg-gray-800/50 rounded-lg border border-blue-500/30">
              <Calendar className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400">Deadline: Feb 1, 2024</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <Zap className="w-5 h-5 text-blue-500 mr-2" />
              <span>£100,000 Prize Pool</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;