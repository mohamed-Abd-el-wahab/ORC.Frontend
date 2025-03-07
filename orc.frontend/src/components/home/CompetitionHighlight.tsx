import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ChevronRight } from 'lucide-react';

const CompetitionHighlight = () => {
  return (
    <section className="py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Trophy className="w-16 h-16 text-yellow-500 mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Robot Combat Competition</h2>
          <p className="text-3xl font-bold text-yellow-500 mb-8">100,000 EGP Grand Prize</p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Open arena combat format",
              "Multiple robot battles",
              "Advanced safety systems",
              "Live streaming worldwide",
              "Technical support provided"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <ChevronRight className="w-5 h-5 text-blue-500 mr-2" />
                {item}
              </li>
            ))}
          </ul>
          
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-semibold"
          >
            Register Now
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompetitionHighlight;