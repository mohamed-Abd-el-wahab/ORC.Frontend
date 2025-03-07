import React from 'react';

const ArenaLayout = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">ARENA LAYOUT</h2>
        
        <div className="relative aspect-[2/1] max-w-4xl mx-auto">
          {/* Arena outline */}
          <div className="absolute inset-0 border-2 border-blue-500/50 rounded-lg">
            {/* Entry/Exit Gate */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-500/20 px-4 py-2 rounded-b-lg">
              <span className="text-blue-400 font-semibold">Entry/Exit Gate (A)</span>
            </div>
            
            {/* Spectator Area */}
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
              <span className="text-gray-300">Spectator Seating</span>
            </div>
            
            {/* Warm-up Area */}
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
              <span className="text-gray-300">Warm-up Area</span>
            </div>
            
            {/* Arena Letters */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 w-full h-full">
                {['A', 'X', 'C'].map((letter, i) => (
                  <div key={letter} className="flex items-center justify-center">
                    <span className="text-blue-400 font-semibold">{letter}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>Professional-grade synthetic footing throughout the arena</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>Full enclosure with proper lighting and ventilation</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
              <span>Sound system for music performances and announcements</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ArenaLayout;