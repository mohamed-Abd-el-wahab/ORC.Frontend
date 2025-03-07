import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Activity, Shield, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Robotics Consultation",
      description: "Expert guidance for optimizing your robotics strategy and implementation.",
      link: "/services#consultation"
    },
    {
      icon: Activity,
      title: "Simulation & Optimization",
      description: "Advanced virtual testing and performance analysis for perfect deployment.",
      link: "/services#simulation"
    },
    {
      icon: Shield,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing protocols ensuring highest quality standards.",
      link: "/services#testing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ChevronRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View All Services
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;