import React from 'react';
import { Ruler, Lightbulb, Users, ArrowUpDown } from 'lucide-react';

const ArenaSpecs = () => {
  const specs = [
    {
      icon: <Ruler className="w-8 h-8 text-blue-500" />,
      title: "Dimensions",
      description: "20m x 40m indoor arena with professional-grade synthetic footing"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
      title: "Lighting",
      description: "Full arena lighting system with consistent temperature control"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Spectator Area",
      description: "Dedicated seating along one long side of the arena"
    },
    {
      icon: <ArrowUpDown className="w-8 h-8 text-blue-500" />,
      title: "Infrastructure",
      description: "Proper drainage and ventilation systems throughout"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">ARENA SPECIFICATIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="mb-4">{spec.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{spec.title}</h3>
              <p className="text-gray-300">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArenaSpecs;