import React from 'react';
import { Swords, Cpu, Target } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Swords className="w-12 h-12 text-blue-500" />,
      title: "Battle Format",
      items: [
        "No Time Limits",
        "Open Arena Combat",
        "Multiple Robot Battles"
      ]
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
      title: "Technical Innovation",
      items: [
        "Custom Weapon Systems",
        "Advanced Robotics",
        "Cutting-edge Technology"
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "Strategic Elements",
      items: [
        "Team Tactics",
        "Alliance Formation",
        "Battle Planning"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Competition Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of robotics competition where strategy, innovation, and engineering excellence collide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
              <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;