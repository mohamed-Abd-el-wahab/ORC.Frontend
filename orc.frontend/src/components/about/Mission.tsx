import React from 'react';
import { Target, Zap, Users } from 'lucide-react';

const Mission = () => {
  const impacts = [
    {
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "Innovation Catalyst",
      description: "Like F1's impact on automotive technology, ORC drives robotics innovation through competition."
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "Future Engineers",
      description: "Inspiring the next generation of robotics engineers through hands-on experience."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Community Building",
      description: "Creating a collaborative ecosystem where competitors learn from each other."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Just as Formula 1 pushes the boundaries of automotive technology, ORC aims to accelerate
            robotics innovation through competitive engineering challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {impacts.map((impact, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm text-center">
              <div className="flex justify-center mb-6">{impact.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{impact.title}</h3>
              <p className="text-gray-300">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;