import React from 'react';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

const Education = () => {
  const programs = [
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-500" />,
      title: "STEM Workshops",
      description: "Hands-on robotics workshops for students , covering mechanics, electronics, and programming."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      title: "Mentorship Program",
      description: "Connect with industry professionals and experienced roboticists for guidance and support."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "School Partnerships",
      description: "Collaborating with educational institutions to integrate robotics into STEM curricula."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Educational Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ORC bridges entertainment and education, making robotics accessible to students
            while fostering critical thinking and engineering skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <div className="mb-6">{program.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{program.title}</h3>
              <p className="text-gray-300">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;