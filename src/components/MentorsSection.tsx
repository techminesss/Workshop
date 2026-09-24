import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import { MENTORS } from '../data/workshopData';
import { Mentor } from '../types';

interface MentorsSectionProps {
  onReserveClick: () => void;
  onSelectMentor?: (mentor: Mentor) => void;
}

export const MentorsSection: React.FC<MentorsSectionProps> = ({
  onReserveClick,
  onSelectMentor,
}) => {
  return (
    <section id="mentors" className="bg-[#09090b] text-white py-24 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            DIRECT MENTORSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Know Your Mentors
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Learn directly from active industry practitioners who defend mission-critical systems and hunt vulnerabilities daily.
          </p>
        </div>

        {/* 2 Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {MENTORS.map((mentor) => (
            <div
              key={mentor.id}
              onClick={() => onSelectMentor && onSelectMentor(mentor)}
              className="bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300"
            >
              <div>
                {/* Header with Avatar & Names */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 via-orange-700 to-amber-800 flex items-center justify-center text-white font-black text-lg shadow-md shrink-0 ring-1 ring-orange-500/30">
                    {mentor.initials}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      {mentor.name}
                    </h3>
                    <div className="text-xs font-bold text-orange-400 mt-1 uppercase tracking-wide">
                      {mentor.role}
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5 font-medium">
                      {mentor.specialization}
                    </div>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-sm text-zinc-300 leading-relaxed font-normal mb-6">
                  {mentor.bio}
                </p>
              </div>

              {/* Bottom Credential Badge */}
              <div className="pt-4 border-t border-zinc-800/80">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 bg-zinc-950/80 px-3.5 py-1.5 rounded-lg border border-zinc-800">
                  <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>{mentor.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA in Mentors */}
        <div className="text-center">
          <button
            id="mentors-reserve-btn"
            onClick={onReserveClick}
            className="px-10 sm:px-14 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base font-extrabold uppercase tracking-wider shadow-xl shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            RESERVE MY FREE SEAT
          </button>
        </div>
      </div>
    </section>
  );
};
