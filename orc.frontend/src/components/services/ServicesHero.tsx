import React from 'react';
import { Settings } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <Settings className="w-16 h-16 text-blue-500 mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Professional Robotics Services
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Expert consultation, advanced simulation, and comprehensive testing solutions for your robotics needs
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;