import React from 'react';
import { TimelineEventType } from './types';

interface TimelineMobileProps {
  events: TimelineEventType[];
}

const TimelineMobile = ({ events }: TimelineMobileProps) => {
  return (
    <div className="md:hidden space-y-4">
      {events.map((event, index) => (
        <div key={index} className="relative pl-4 border-l-2 border-blue-500/30">
          <div className="absolute left-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gray-800 border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
            {event.icon}
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700 w-[280px]">
            <div className="text-blue-400 text-sm font-medium text-center">{event.date}</div>
            <h3 className="text-lg font-semibold text-white my-1 text-center">{event.title}</h3>
            <p className="text-sm text-gray-300 text-center m-0">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineMobile;