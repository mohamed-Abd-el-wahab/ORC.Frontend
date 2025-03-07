import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineEventProps {
  icon: React.ReactNode;
  date: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

const TimelineEvent = ({ icon, date, title, description, position }: TimelineEventProps) => {
  const content = (
    <div className={`flex flex-col items-center justify-center bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 w-[280px] ${position === 'left' ? 'ml-auto' : ''}`}>
      <div className="text-blue-400 text-sm font-medium text-center">{date}</div>
      <h3 className="text-lg font-semibold text-white my-1 text-center">{title}</h3>
      <p className="text-sm text-gray-300 text-center m-0">{description}</p>
    </div>
  );

  return (
    <div className="relative flex items-center">
      <div className="w-1/2 pr-4">
        {position === 'left' && content}
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gray-800 border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
        {icon}
      </div>

      <div className="w-1/2 pl-4">
        {position === 'right' && content}
      </div>
    </div>
  );
};

export default TimelineEvent;