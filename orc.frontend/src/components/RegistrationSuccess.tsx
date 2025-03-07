import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const RegistrationSuccess = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/50 rounded-xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Thank you for registering for the Open Robot Combat competition. We've received your information and will be in touch soon.
          </p>
          
          <p className="text-gray-400 mb-8">
            A confirmation email has been sent to your provided email address with further details.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Return to Home
            </Link>
            
            <Link
              to="/competition"
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
            >
              Competition Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess; 