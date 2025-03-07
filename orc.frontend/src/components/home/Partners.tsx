import React from 'react';

const Partners = () => {
  const partners = [
    {
      name: "Tech Corp",
      logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&h=300&q=80",
      type: "Platinum Sponsor"
    },
    {
      name: "Robotics Inc",
      logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=300&h=300&q=80",
      type: "Gold Sponsor"
    },
    {
      name: "Future Labs",
      logo: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?auto=format&fit=crop&w=300&h=300&q=80",
      type: "Silver Sponsor"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Our Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm text-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-32 h-32 mx-auto mb-6 rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
              <p className="text-blue-400">{partner.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;