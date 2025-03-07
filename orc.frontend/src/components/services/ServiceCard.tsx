import React from 'react';
import { Service } from './types';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  isReversed?: boolean;
}

const ServiceCard = ({ service, isReversed = false }: ServiceCardProps) => {
  return (
    <div 
      id={service.sectionId} 
      className="relative group scroll-mt-24" // Increased scroll margin to account for fixed header
    >
      <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
      <div className={`relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 ${
        isReversed ? 'md:flex-row-reverse' : ''
      } md:flex items-start gap-8`}>
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="md:w-2/3">
          <div className="flex items-center gap-4 mb-4">
            {React.createElement(service.icon, { className: "w-8 h-8 text-blue-500" })}
            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
          </div>
          
          <p className="text-gray-300 mb-6">{service.description}</p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3">What We Offer:</h4>
            <ul className="space-y-2">
              {service.offerings.map((offering, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <ChevronRight className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{offering}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-2">Technical Capabilities:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {service.capabilities.map((capability, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {capability}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;