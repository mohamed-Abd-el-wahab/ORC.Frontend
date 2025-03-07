import React from 'react';
import ServiceCard from './ServiceCard';
import { serviceData } from './data/serviceData';

const ServicesList = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;