import React from 'react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <div className="w-1 h-16 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0" />
      <div className="w-2 h-2 rounded-full bg-blue-500" />
    </div>
  );
};

export default ScrollIndicator;