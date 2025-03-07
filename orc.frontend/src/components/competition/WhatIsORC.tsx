import React from 'react';
import { Clock, Sword, Brain, Coins } from 'lucide-react';

const WhatIsORC = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Extended Combat Time",
      description: "1-hour matches that test endurance and strategy, not just raw power."
    },
    {
      icon: <Sword className="w-8 h-8 text-blue-500" />,
      title: "Weapon Diversity",
      description: "Multiple weapon systems allowed, encouraging innovative design approaches."
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "Strategic Depth",
      description: "Resource management and tactical decisions matter as much as combat ability."
    },
    {
      icon: <Coins className="w-8 h-8 text-blue-500" />,
      title: "Budget-Based",
      description: "Budget limit ensures focus on efficiency and clever engineering."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">What is ORC?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Open Robot Combat (ORC) revolutionizes traditional robot competitions by emphasizing
              strategic thinking, resource management, and sustained performance over quick knockouts.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1470"
                alt="Robot competition"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsORC;