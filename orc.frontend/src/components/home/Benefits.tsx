import React from 'react';
import { Shield, Clock, Users, Trophy } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Industry Expertise",
      description: "Over five years of experience in advanced robotics solutions and implementations."
    },
    {
      icon: Clock,
      title: "Rapid Development",
      description: "Accelerated project timelines through efficient processes and proven methodologies."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 expert technical support and consultation throughout your project lifecycle."
    },
    {
      icon: Trophy,
      title: "Proven Success",
      description: "Track record of successful deployments across various industries worldwide."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-300">
              Partner with us for unmatched expertise in robotics innovation and implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
                <benefit.icon className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;