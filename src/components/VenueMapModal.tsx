import React from 'react';
import { WORKSHOP_DETAILS } from '../data/constants';
import { X, MapPin, Navigation, Bus, Train, Car, ExternalLink } from 'lucide-react';

interface VenueMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VenueMapModal: React.FC<VenueMapModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const mapsQuery = WORKSHOP_DETAILS.MAPS_URL;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0f0f14] border border-zinc-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">
                {WORKSHOP_DETAILS.VENUE_NAME}
              </h3>
              <p className="text-xs text-zinc-400">
                {WORKSHOP_DETAILS.VENUE_ADDRESS}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-800 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-zinc-300">
          {/* Visual Stylized Map Sandbox */}
          <div className="relative h-60 rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden flex flex-col items-center justify-center p-4 text-center">
            {/* Grid background effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Canal bridge visual styling */}
            <div className="absolute inset-x-0 h-12 bg-sky-950/30 border-y border-sky-600/30 rotate-[-6deg] top-1/3 flex items-center justify-center text-[10px] font-mono text-sky-400">
              ~~~ MODEL TOWN EXTENSION ~~~
            </div>

            {/* Ferozepur road diagonal */}
            <div className="absolute inset-y-0 w-16 bg-zinc-800/60 border-x border-zinc-700/60 rotate-[35deg] flex flex-col items-center justify-around py-4 text-[9px] font-mono text-zinc-400">
              <span>RADHA</span>
              <span>SWAMI</span>
              <span>FATAK</span>
            </div>

            {/* Pin Target */}
            <div className="relative z-10 flex flex-col items-center animate-bounce">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/50 ring-4 ring-orange-500/20">
                <Navigation className="w-5 h-5 fill-current" />
              </div>
              <div className="mt-2 px-3 py-1 rounded-md bg-zinc-900 border border-orange-500/40 text-xs font-black text-white shadow-xl">
                {WORKSHOP_DETAILS.VENUE_NAME} (Venue)
              </div>
            </div>

            {/* Coordinates tag */}
            <div className="absolute bottom-2 right-2 text-[10px] font-mono text-zinc-500 bg-black/70 px-2 py-0.5 rounded">
              30.9010° N, 75.8573° E
            </div>
          </div>

          {/* Transit & Commute Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-xs">
                <Train className="w-4 h-4" />
                <span>Railway Station</span>
              </div>
              <div className="text-white font-bold text-sm">4.2 km (12 min)</div>
              <div className="text-zinc-400 text-xs">Direct auto-rickshaw or e-rickshaw along Model Town Road.</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-xs">
                <Bus className="w-4 h-4" />
                <span>ISBT Bus Stand</span>
              </div>
              <div className="text-white font-bold text-sm">3.8 km (10 min)</div>
              <div className="text-zinc-400 text-xs">Frequent city buses stop directly opposite the Radha Swami Fatak.</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-xs">
                <Car className="w-4 h-4" />
                <span>Free Parking</span>
              </div>
              <div className="text-white font-bold text-sm">On-Campus Lot</div>
              <div className="text-zinc-400 text-xs">Designated 2-wheeler and 4-wheeler parking for attendees.</div>
            </div>
          </div>

          <div className="text-xs text-zinc-400 bg-zinc-900/30 p-3.5 rounded-xl border border-zinc-800">
            <strong className="text-zinc-200">Landmark note:</strong> Located opposite Radha Swami Fatak in Block D, Model Town. Look for the Techmines event banner at the main gate.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-bold uppercase cursor-pointer"
          >
            Close
          </button>

          <a
            href={mapsQuery}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-black uppercase tracking-wider shadow-md transition-all"
          >
            Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
