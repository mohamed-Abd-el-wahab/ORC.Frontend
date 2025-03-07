import React from 'react';
import { Shield } from 'lucide-react';

const CompetitionHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <Shield className="w-16 h-16 text-blue-500 mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Welcome to ORC: Battle of Survival
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-8">
          The Ultimate Robot Combat Championship
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Enter the arena where engineering excellence meets combat strategy in the world's most advanced robot fighting competition. ORC challenges teams to design, build, and battle their ultimate combat robots for glory, prizes, and technological advancement.
        </p>
      </div>
    </section>
  );
};

export default CompetitionHero;