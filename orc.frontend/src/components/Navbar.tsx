import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const services = [
    { name: "Robotics Consultation", path: "/services#consultation" },
    { name: "Simulation & Optimization", path: "/services#simulation" },
    { name: "Testing & Quality Assurance", path: "/services#testing" }
  ];

  const handleServiceClick = (path: string) => {
    if (location.pathname === '/services') {
      // If already on services page, scroll to section
      const sectionId = path.split('#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsServicesOpen(false);
  };

  const handleServicesClick = () => {
    navigate('/services');
    setIsServicesOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/header_logo.svg" 
              alt="ORC Logo" 
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link to="/competition" className="text-gray-300 hover:text-blue-500 transition-colors">
              Competition
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={handleServicesClick}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center text-gray-300 hover:text-blue-500 transition-colors"
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {/* Dropdown menu */}
              <div
                className={`absolute left-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-xl transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => handleServiceClick(service.path)}
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-blue-500 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800"
            >
              About
            </Link>
            <Link
              to="/competition"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Competition
            </Link>
            
            {/* Mobile Services Menu */}
            <div className="px-3 py-2">
              <button
                onClick={handleServicesClick}
                className="flex items-center w-full text-gray-300 hover:text-white"
              >
                Services
                <ChevronDown className={`ml-2 w-4 h-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="mt-2 ml-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => handleServiceClick(service.path)}
                      className="block py-2 text-gray-400 hover:text-white"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;