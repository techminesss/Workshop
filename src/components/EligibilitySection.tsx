import React from 'react';
import { Check } from 'lucide-react';
import { ELIGIBILITY_POINTS } from '../data/workshopData';

export const EligibilitySection: React.FC = () => {
  return (
    <section id="eligibility" className="bg-[#fcfdfd] text-zinc-900 pb-24 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4">
            ELIGIBILITY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-4">
            Who Is This Workshop For?
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Designed from ground up for students looking to enter the high-demand cybersecurity sector.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ELIGIBILITY_POINTS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-zinc-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Orange Checkmark Badge */}
                <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white mb-6 shadow-md shadow-orange-500/20">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-zinc-900 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-8">
                  {item.body}
                </p>
              </div>

              {/* Bottom Pill Badge */}
              <div className="pt-4 border-t border-zinc-100">
                <span className="inline-block text-xs font-bold text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
                  {item.pill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
