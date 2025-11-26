import React from 'react';
import { Megaphone } from 'lucide-react';

const UPDATES = [
  "Admissions Open for 2024-2025: Apply before Oct 30",
  "EduPrime Ranked #1 Innovation College by Global Education Summit",
  "New Robotics & AI Lab Inauguration Ceremony on Friday",
  "International Student Exchange Program Applications are Live",
  "Congratulations to our Football Team for winning the National Championship!",
  "Guest Lecture: 'Future of Tech' by Industry Leaders - Nov 12"
];

const Announcements= () => {
  const loopedUpdates = [...UPDATES, ...UPDATES, ...UPDATES];

  return (
    <div className="bg-slate-950 relative z-30  ">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-stretch overflow-hidden">
          
          {/* Label Section with Arrow Effect */}
          <div className="relative z-20 shrink-0 bg-amber-500 py-4 px-4 flex items-center justify-center shadow-[4px_0_24px_rgba(245,158,11,0.2)]">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span className="font-extrabold text-white tracking-wider text-xs sm:text-sm uppercase">Updates</span>
            </div>
            {/* Slanted edge */}
            <div className="absolute top-0 bottom-0 right-0 translate-x-1/2 w-6 bg-amber-500 transform -skew-x-12 z-[-1]"></div>
          </div>

          {/* Icon Separator Area */}
          <div className="relative z-10 shrink-0 w-12 bg-slate-900 flex items-center justify-center -skew-x-12 ml-2 border-l border-slate-800">
            <Megaphone className="w-4 h-4 text-amber-500 skew-x-12" />
          </div>

          {/* Marquee Container */}
          <div className="flex-1 overflow-hidden py-4 flex items-center relative bg-slate-950">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-slate-950 to-transparent z-10"></div>

            <div className="animate-marquee flex items-center">
              {loopedUpdates.map((item, index) => (
                <div key={index} className="flex items-center whitespace-nowrap px-8 group cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-4 group-hover:bg-amber-500 transition-colors duration-300"></span>
                  <span className="text-sm font-medium text-slate-400 group-hover:text-amber-400 transition-colors duration-300 tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Announcements;