import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Phone } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Let's Build the Future Together</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-semibold"
          >
            <Users className="w-5 h-5 mr-2" />
            Join Competition
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-700 text-gray-300 rounded-lg hover:border-blue-500 hover:text-white transition-all duration-300 text-lg font-semibold"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;