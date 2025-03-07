import React from 'react';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' }
];

const HeroStats = () => {
  return (
    <div className="grid grid-cols-3 gap-8 py-6 border-t border-gray-800">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;