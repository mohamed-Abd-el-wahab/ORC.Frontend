import React from 'react';
import { Users, Building2, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

const ParticipationOptions = () => {
  const options = [
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Team Registration",
      description: "Up to 5 members per team",
      features: [
        "Get the chance to be the champion",
        "Join our robotics community",
        "Test your engineering skills"
      ],
      cta: {
        text: "Register Now",
        link: "/register"
      }
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-500" />,
      title: "Sponsorship",
      description: "Support the future of robotics",
      features: [
        "Showcase your brand and support cutting-edge robotics",
        "Partner with individual teams to power their innovation",
        "Display your products or services to a passionate robotics audience"
      ],
      cta: {
        text: "Become a Sponsor",
        link: "/sponsorship"
      }
    },
    {
      icon: <Ticket className="w-12 h-12 text-blue-500" />,
      title: "Spectator Access",
      description: "Experience the excitement live",
      features: [
        "Step into the heart of the competition",
        "Interactive pit access",
        "Live streaming worldwide"
      ],
      cta: {
        text: "Get Tickets",
        link: "/watch"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">PARTICIPATION OPTIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {options.map((option, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="relative group flex-1">
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
                <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {option.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-300">{option.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={option.cta.link}
                    className="block w-full py-3 px-6 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors duration-300 mt-auto transform hover:-translate-y-1"
                  >
                    {option.cta.text}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipationOptions;