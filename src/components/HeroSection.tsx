import React from 'react';
import { Calendar, Clock, GraduationCap, Users, AlertTriangle } from 'lucide-react';
import simpleHackerBg from '../assets/images/simple_hacker_bg_1790231903079.jpg';

interface HeroSectionProps {
  onReserveClick: () => void;
  seatsLeft: number | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onReserveClick,
  seatsLeft,
}) => {
  const registeredCount = seatsLeft !== null ? 50 - seatsLeft : '...';

  return (
    <section id="hero-section" className="relative bg-[#09090b] text-white pt-3 pb-16 overflow-hidden">
      {/* Simple Cyber Hacker Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src={simpleHackerBg}
          alt="Cyber Security Hacker at Workstation"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 sm:opacity-45 filter contrast-115 brightness-95"
        />
        {/* Balanced radial & linear overlays ensuring clean text contrast while keeping the hacker image clearly visible */}
        <div className="absolute inset-0 bg-radial from-[#09090b]/35 via-[#09090b]/65 to-[#09090b]/90" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09090b] via-[#09090b]/85 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#09090b] via-[#09090b]/60 to-transparent" />
      </div>

      {/* Ambient cyber orange radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[340px] bg-gradient-to-b from-orange-500/15 via-orange-950/10 to-transparent blur-3xl pointer-events-none rounded-full z-0" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-700/80 text-xs font-bold uppercase tracking-wider text-zinc-200 mb-8 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span>FREE WORKSHOP • LUDHIANA • 10 OCT</span>
        </div>

        {/* Big Display Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.12] mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          See how{' '}
          <span className="text-orange-500 font-black inline-block drop-shadow-[0_2px_20px_rgba(249,115,22,0.4)]">
            hackers break in.
          </span>
          <br className="hidden sm:inline" />
          {' '}Then learn to{' '}
          <span className="text-orange-500 font-black inline-block underline decoration-orange-500 decoration-4 underline-offset-8 drop-shadow-[0_2px_20px_rgba(249,115,22,0.4)]">
            stop them.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-zinc-200 font-medium leading-relaxed mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          A free, hands-on cyber security workshop for students. No prior experience or complex programming background needed.
        </p>

        {/* Mentors Badge */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
          {/* Mentors Pill */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-800 shadow-xl">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-600 to-amber-700 flex items-center justify-center text-white text-xs font-black ring-2 ring-zinc-900">
                SK
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center text-white text-xs font-black ring-2 ring-zinc-900">
                VK
              </div>
            </div>
            <div className="text-left text-xs">
              <div className="font-bold text-white leading-tight">
                Mentors: Suraj Kumar &amp; Vivek
              </div>
              <div className="text-zinc-400 text-[11px] leading-tight">
                Active Cyber Security Engineers • Threat Intel &amp; AppSec
              </div>
            </div>
          </div>

        </div>

        {/* Main Hero CTA Button */}
        <div className="mb-4">
          <button
            id="hero-reserve-btn"
            onClick={onReserveClick}
            className="w-full sm:w-auto px-10 sm:px-14 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base sm:text-lg font-black uppercase tracking-wider shadow-2xl shadow-orange-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            RESERVE MY FREE SEAT
          </button>
        </div>

        {/* Urgency warning */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300 mb-14 drop-shadow-md">
          <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0" />
          <span>Only {seatsLeft !== null ? seatsLeft : '...'} seats available. Registration closes 10 Oct, Midnight.</span>
        </div>

        {/* 4 Meta Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {/* Date */}
          <div className="bg-zinc-950/85 backdrop-blur-md border border-zinc-800/90 rounded-2xl p-4 sm:p-5 text-left transition-all hover:border-orange-500/40 shadow-xl">
            <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4" />
              <span>DATE</span>
            </div>
            <div className="text-base sm:text-lg font-extrabold text-white leading-tight">
              10 Oct, 2024
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              Thursday Masterclass
            </div>
          </div>

          {/* Time */}
          <div className="bg-zinc-950/85 backdrop-blur-md border border-zinc-800/90 rounded-2xl p-4 sm:p-5 text-left transition-all hover:border-orange-500/40 shadow-xl">
            <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4" />
              <span>TIME</span>
            </div>
            <div className="text-base sm:text-lg font-extrabold text-white leading-tight">
              10:00 AM - 12:00 PM
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              2 Full Practical Hours
            </div>
          </div>

          {/* Admission */}
          <div className="bg-zinc-950/85 backdrop-blur-md border border-zinc-800/90 rounded-2xl p-4 sm:p-5 text-left transition-all hover:border-orange-500/40 shadow-xl">
            <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>ADMISSION</span>
            </div>
            <div className="text-base sm:text-lg font-extrabold text-white leading-tight">
              100% Free
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              For College Students
            </div>
          </div>

          {/* Capacity */}
          <div className="bg-zinc-950/85 backdrop-blur-md border border-zinc-800/90 rounded-2xl p-4 sm:p-5 text-left transition-all hover:border-orange-500/40 shadow-xl">
            <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-4 h-4" />
              <span>CAPACITY</span>
            </div>
            <div className="text-base sm:text-lg font-extrabold text-white leading-tight">
              Strict 50 Seats
            </div>
            <div className="text-xs text-orange-400 font-bold mt-1">
              {registeredCount} Registered
            </div>
          </div>
        </div>
      </div>

      {/* Cyber Waveform Divider Transition */}
      <div className="w-full mt-16 overflow-hidden select-none opacity-80 relative z-10">
        <div className="flex items-center justify-center space-x-1 sm:space-x-1.5 text-orange-500/70 font-mono text-xs overflow-hidden h-6">
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={i} className="animate-pulse" style={{ animationDelay: `${(i % 8) * 120}ms` }}>
              {i % 4 === 0 ? 'N' : i % 4 === 1 ? '~' : i % 4 === 2 ? '^' : '/'}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

