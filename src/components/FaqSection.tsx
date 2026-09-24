import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/workshopData';

export const FaqSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#09090b] text-white py-24 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            GOT QUESTIONS?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Everything you need to know before attending this Sunday masterclass.
          </p>
        </div>

        {/* 6 FAQs Grid (2 columns x 3 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {FAQS.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggleExpand(index)}
                className="bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-750 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer"
              >
                <div>
                  <div className="flex items-start gap-3.5">
                    {/* Orange Question Icon */}
                    <div className="w-7 h-7 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                      <HelpCircle className="w-4 h-4" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mt-2.5">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
