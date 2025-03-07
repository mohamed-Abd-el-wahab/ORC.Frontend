import React from 'react';
import { Swords, Users, Weight, Layers } from 'lucide-react';

const CompetitionFormat = () => {
  const formats = [
    {
      icon: <Swords className="w-8 h-8 text-blue-500" />,
      title: "Open Arena Combat",
      description: "Unrestricted battle environment"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Multi-Robot Warfare",
      description: "Strategic team-based conflicts"
    },
    {
      icon: <Weight className="w-8 h-8 text-blue-500" />,
      title: "Unlimited Weight Class",
      description: "Push your engineering limits"
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-500" />,
      title: "Dynamic Battle Phases",
      description: "Qualification, elimination, and championship rounds"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">COMPETITION FORMAT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {formats.map((format, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="mb-4">{format.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{format.title}</h3>
              <p className="text-gray-300">{format.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionFormat;