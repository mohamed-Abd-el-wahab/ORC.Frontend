import React from 'react';
import { GraduationCap, Lightbulb, Rocket } from 'lucide-react';

const Impact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Educational Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ORC is more than a competition - it's a platform for learning, innovation, and technological advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <GraduationCap className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">STEM Integration</h3>
            <p className="text-gray-300">
              Hands-on experience in robotics, programming, and engineering principles through practical application.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <Lightbulb className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Real-world Applications</h3>
            <p className="text-gray-300">
              Develop solutions that translate directly to industrial robotics and automation technologies.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <Rocket className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Career Opportunities</h3>
            <p className="text-gray-300">
              Connect with industry leaders and discover pathways into robotics and engineering careers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;