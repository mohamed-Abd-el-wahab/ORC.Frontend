import React from 'react';
import AboutHero from '../components/about/AboutHero';
import Mission from '../components/about/Mission';
import Education from '../components/about/Education';

const About = () => {
  return (
    <div className="bg-black">
      <AboutHero />
      <Mission />
      <Education />
    </div>
  );
};

export default About;