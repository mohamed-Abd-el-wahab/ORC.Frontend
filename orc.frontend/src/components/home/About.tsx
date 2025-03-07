import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] bg-repeat bg-center"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-8">Who We Are</h2>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">

At ORC, we are reshaping the future of robotic innovation. With deep expertise in advanced robotics solutions, we empower organizations to unlock the full potential of cutting-edge technology, driving unmatched efficiency and performance.
          </p>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
Our mission is to become the Formula 1 of robotics—setting new standards and pushing the boundaries of what robotics can achieve.</p>
          <Link
            to="/about"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Learn More <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;