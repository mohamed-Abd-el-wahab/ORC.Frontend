import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ContactCTA from '../components/services/ContactCTA';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="bg-black">
      <ServicesHero />
      <ServicesList />
      <ContactCTA />
    </div>
  );
};

export default Services;