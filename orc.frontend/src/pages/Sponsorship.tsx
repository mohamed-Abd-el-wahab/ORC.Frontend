import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Users, BarChart, Megaphone, Send, AlertCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface SponsorshipTier {
  name: string;
  price: string;
  color: string;
  benefits: string[];
}

interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  tier: string;
  message: string;
}

const tiers: SponsorshipTier[] = [
  {
    name: "Title Sponsor",
    price: "$10,000",
    color: "from-yellow-400 to-yellow-600",
    benefits: [
      "Exclusive naming rights for the competition",
      "Premium logo placement on all materials",
      "VIP access to all events",
      "Direct access to participating teams",
      "Custom activation opportunities",
      "First right of refusal for next season"
    ]
  },
  {
    name: "Gold",
    price: "$5,000",
    color: "from-amber-400 to-amber-600",
    benefits: [
      "Prime logo placement on competition materials",
      "Dedicated sponsor showcase area",
      "VIP event access",
      "Social media promotion package",
      "Team meet and greet opportunities"
    ]
  },
  {
    name: "Silver",
    price: "$1,000",
    color: "from-gray-300 to-gray-500",
    benefits: [
      "Logo on competition materials",
      "Sponsor booth at events",
      "Social media mentions",
      "Event tickets package",
      "Brand visibility in live streams"
    ]
  },
  {
    name: "Bronze",
    price: "$500",
    color: "from-orange-700 to-orange-900",
    benefits: [
      "Logo on website and program",
      "Social media recognition",
      "Event tickets",
      "Brand mention in announcements",
      "Networking opportunities"
    ]
  }
];

const Sponsorship = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedTier, setSelectedTier] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    tier: '',
    message: ''
  });

  useEffect(() => {
    // Check if there's a tier selection in the URL
    const params = new URLSearchParams(location.search);
    const tierParam = params.get('tier');
    if (tierParam) {
      setSelectedTier(tierParam);
      setFormData(prev => ({ ...prev, tier: tierParam }));
      setShowForm(true);
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const handleTierSelect = (tierName: string) => {
    setSelectedTier(tierName);
    setFormData(prev => ({ ...prev, tier: tierName }));
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccess(true);
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        tier: selectedTier,
        message: ''
      });
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Partner with Innovation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us in shaping the future of robotics through strategic partnership and sponsorship opportunities.
          </p>
        </div>
      </div>

      {/* Sponsorship Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${tier.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-blue-400 mb-6">{tier.price}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleTierSelect(tier.name)}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Become a Sponsor
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
            <Users className="w-12 h-12 text-blue-500 mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Audience Reach</h4>
            <p className="text-gray-300">10,000+ attendees across events</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
            <BarChart className="w-12 h-12 text-blue-500 mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Media Coverage</h4>
            <p className="text-gray-300">Featured in 50+ tech publications</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
            <Megaphone className="w-12 h-12 text-blue-500 mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Social Impact</h4>
            <p className="text-gray-300">1M+ social media impressions</p>
          </div>
        </div>

        {/* Sponsorship Form */}
        {showForm && (
          <div ref={formRef} className="mt-20 bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Sponsorship Application</h2>
            
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                Thank you for your interest! Our team will contact you shortly.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Sponsorship Tier *
                </label>
                <select
                  name="tier"
                  value={formData.tier}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option value="">Select a tier</option>
                  {tiers.map((tier) => (
                    <option key={tier.name} value={tier.name}>{tier.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Tell us about your goals and interests..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sponsorship;