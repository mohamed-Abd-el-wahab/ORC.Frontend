import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="mailto:compete@ORCbattle.com"
            className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
          >
            <Mail className="w-8 h-8 text-blue-500 mb-3" />
            <span className="text-white font-medium">Email Us</span>
            <span className="text-sm text-gray-400">competition@openrobotcombat.com</span>
          </a>

          <a
            href="tel:+441234567890"
            className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
          >
            <Phone className="w-8 h-8 text-blue-500 mb-3" />
            <span className="text-white font-medium">Call Us</span>
            <span className="text-sm text-gray-400">+4915730223392</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;