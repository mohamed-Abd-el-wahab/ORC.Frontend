import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Benefits from '../components/home/Benefits';
import CompetitionHighlight from '../components/home/CompetitionHighlight';
import CTABanner from '../components/home/CTABanner';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <About />
      <Services />
      <Benefits />
      <CompetitionHighlight />
      <CTABanner />
      <Newsletter />
    </div>
  );
};

export default Home;