import React from 'react';
import { Ruler, Power, Shield, Cpu } from 'lucide-react';

const TechnicalSpecs = () => {
  const specs = [
    {
      icon: <Ruler className="w-8 h-8 text-blue-500" />,
      title: "Size Limits",
      description: "Maximum dimensions of 2m x 2m x 2m"
    },
    {
      icon: <Power className="w-8 h-8 text-blue-500" />,
      title: "Weapon Systems",
      description: "Any weapon type (subject to safety approval)"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Safety Features",
      description: "Must include remote kill switch"
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: "Control Systems",
      description: "Autonomous features permitted"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">TECHNICAL SPECIFICATIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="mb-4">{spec.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;