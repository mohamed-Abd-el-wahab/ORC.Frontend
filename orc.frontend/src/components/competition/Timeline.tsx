import React from 'react';
import { Calendar, ClipboardCheck, Flag, Trophy } from 'lucide-react';
import TimelineEvent from './timeline/TimelineEvent';
import TimelineMobile from './timeline/TimelineMobile';
import { TimelineEventType } from './timeline/types';

const Timeline = () => {
  const events: TimelineEventType[] = [
    {
      icon: <Calendar className="w-4 h-4 text-blue-500" />,
      date: "February 1, 2025",
      title: "Registration Deadline",
      description: "Last day to submit team applications"
    },
    {
      icon: <ClipboardCheck className="w-4 h-4 text-blue-500" />,
      date: "April 15, 2025",
      title: "Evaluation Test",
      description: "Robot safety and compliance check"
    },
    {
      icon: <Flag className="w-4 h-4 text-blue-500" />,
      date: "July 1-3, 2025",
      title: "Qualification Rounds",
      description: "Initial battles and rankings"
    },
    {
      icon: <Trophy className="w-4 h-4 text-blue-500" />,
      date: "August 15, 2025",
      title: "Championship Event",
      description: "Final battles and awards ceremony"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">KEY DATES</h2>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-blue-500/50" />
          <div className="space-y-8">
            {events.map((event, index) => (
              <TimelineEvent
                key={index}
                {...event}
                position={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <TimelineMobile events={events} />
      </div>
    </section>
  );
};

export default Timeline;