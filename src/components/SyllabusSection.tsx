import React from 'react';
import { Wifi, Smartphone, Globe, RefreshCw, FlaskConical, Key, ArrowRight } from 'lucide-react';
import { SYLLABUS_MODULES } from '../data/workshopData';
import { SyllabusModule } from '../types';

interface SyllabusSectionProps {
  onReserveClick: () => void;
  onSelectModule: (module: SyllabusModule) => void;
}

export const SyllabusSection: React.FC<SyllabusSectionProps> = ({
  onReserveClick,
  onSelectModule,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'wifi':
        return <Wifi className="w-6 h-6 text-orange-600" />;
      case 'smartphone':
        return <Smartphone className="w-6 h-6 text-orange-600" />;
      case 'globe':
        return <Globe className="w-6 h-6 text-orange-600" />;
      case 'key-round':
        return <RefreshCw className="w-6 h-6 text-orange-600" />;
      case 'microscope':
        return <FlaskConical className="w-6 h-6 text-orange-600" />;
      case 'shield-alert':
      default:
        return <Key className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <section id="curriculum" className="bg-[#fcfdfd] text-zinc-900 pt-20 pb-20 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4">
            PRACTICAL SYLLABUS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-4">
            What You'll Learn in 2 Hands-On Hours
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Live attack simulations and real mitigation techniques conducted in safe, legal isolated sandboxes.
          </p>
        </div>

        {/* 6 Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SYLLABUS_MODULES.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectModule(item)}
              className="group bg-white rounded-2xl p-7 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top indicator hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-orange-100/70 transition-all">
                  {getIcon(item.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Badge & Interactive Prompt */}
              <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
                <span className="inline-flex items-center text-xs font-bold text-orange-600 bg-orange-50/80 px-3 py-1 rounded-full border border-orange-100">
                  {item.badge}
                </span>
                <span className="text-xs font-semibold text-zinc-400 group-hover:text-orange-600 flex items-center gap-1 transition-colors">
                  Details <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA in Syllabus */}
        <div className="text-center">
          <button
            id="syllabus-reserve-btn"
            onClick={onReserveClick}
            className="px-10 sm:px-14 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base font-extrabold uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            RESERVE MY FREE SEAT
          </button>
          <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-3">
            No coding background or prerequisites required • 100% Student-Friendly
          </p>
        </div>
      </div>
    </section>
  );
};
