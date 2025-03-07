import React from 'react';
import { Rocket } from 'lucide-react';

const AboutHero = () => {
  return (
    <div className="relative bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070"
          alt="Robot in workshop"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col items-center text-center">
          <Rocket className="w-16 h-16 text-blue-500 mb-8 animate-bounce" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Revolutionizing Robotics
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            ORC is more than a competition—it's a movement to inspire the next generation of engineers
            and innovators through the excitement of robot combat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;