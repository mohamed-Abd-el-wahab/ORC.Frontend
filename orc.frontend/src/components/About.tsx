import React from 'react';
import { Shield, Target, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          About the Competition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Shield className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Arena Combat</h3>
            <p className="text-gray-300">
              Battle in our 15m x 15m arena equipped with obstacles, traps, and challenging
              surfaces designed to test your robot's durability and adaptability.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Target className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Survival Challenge</h3>
            <p className="text-gray-300">
              Face off against other competitors and autonomous predator robots in intense
              matches lasting up to 1 hour. Only the strongest will survive.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Trophy className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Prize Pool</h3>
            <p className="text-gray-300">
              Compete for the grand prize of 30,000 EGP and the title of ORC Champion.
              Second chance "Battle of Revenge" prize of 10,000 EGP.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-8">Competition Format</h3>
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3" />
                <span>Up to 10 robots compete simultaneously in survival-style matches</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3" />
                <span>Autonomous predator robots add an extra layer of challenge</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3" />
                <span>Teams manage a budget of 15,000 EGP for robot construction</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3" />
                <span>Choice between manual or autonomous control systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;