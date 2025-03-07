import React from 'react';
import { Trophy, Award } from 'lucide-react';

const PrizePool = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">PRIZE POOL</h2>
        <div className="max-w-lg mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
            <div className="relative bg-gray-800/50 p-8 rounded-xl text-center backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Grand Champion</h3>
              <p className="text-4xl font-bold text-blue-400 mb-2">£100,000</p>
              <p className="text-gray-400">Winner Takes All</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 px-6 py-3 rounded-full backdrop-blur-sm border border-gray-700">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">+ Special Category Awards</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;