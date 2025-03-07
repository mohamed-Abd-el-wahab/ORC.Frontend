import React from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <HeroBackground />
      <HeroContent />
      <ScrollIndicator />
    </div>
  );
};

export default Hero;