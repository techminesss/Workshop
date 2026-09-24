import React, { useRef } from 'react';
import { X, Shield, Calendar, Clock, MapPin, Download, CheckCircle2, User, School, QrCode, Share2 } from 'lucide-react';
import { RegistrationData } from '../types';
import { WORKSHOP_DETAILS } from '../data/constants';

interface TicketModalProps {
  user: RegistrationData;
  isOpen: boolean;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ user, isOpen, onClose }) => {
  const ticketRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const ticketId = user.ticketId || 'CS-LDH-43';
  const seatNumber = user.seatNumber || 43;

  const handlePrint = () => {
    window.print();
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent('Techmines Ludhiana Workshop - Ethical Hacking Masterclass');
    const details = encodeURIComponent(`Free hands-on Cyber Defense and Penetration Testing Masterclass at ${WORKSHOP_DETAILS.VENUE_NAME}. Bring your laptop and student ID.`);
    const location = encodeURIComponent(WORKSHOP_DETAILS.VENUE_ADDRESS);
    const startDate = '20240930T043000Z'; // 10:00 AM IST
    const endDate = '20240930T073000Z'; // 1:00 PM IST
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0e0e12] border border-zinc-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
              Official Workshop VIP Entry Pass
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-800 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Ticket Body (printable area) */}
        <div ref={ticketRef} className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Confirmed Banner */}
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Registration Confirmed • Physical Entry Authorized with Student ID</span>
          </div>

          {/* Ticket Card */}
          <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-700 rounded-2xl p-6 shadow-xl overflow-hidden">
            {/* Corner Notch / Perforation Circles */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0e0e12] border border-zinc-700"></div>
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0e0e12] border border-zinc-700"></div>

            {/* Top Pass Title & ID */}
            <div className="flex items-start justify-between pb-5 border-b border-dashed border-zinc-700">
              <div>
                <div className="text-[11px] font-mono font-bold text-orange-400 uppercase tracking-widest">
                  TECHMINES MASTERCLASS PASS
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  Ludhiana Cyber Range
                </h3>
              </div>

              <div className="text-right">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">TICKET ID</div>
                <div className="font-mono text-sm sm:text-base font-black text-orange-400">
                  {ticketId}
                </div>
              </div>
            </div>

            {/* Attendee Details */}
            <div className="grid grid-cols-2 gap-4 py-5 border-b border-dashed border-zinc-700">
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  ATTENDEE NAME
                </span>
                <div className="text-sm sm:text-base font-extrabold text-white truncate mt-0.5">
                  {user.fullName || 'Harpreet Singh'}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  ASSIGNED SEAT
                </span>
                <div className="text-sm sm:text-base font-black text-emerald-400 mt-0.5">
                  SEAT #{seatNumber} <span className="text-zinc-500 font-normal text-xs">(Strict 50)</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  COLLEGE / INSTITUTION
                </span>
                <div className="text-xs sm:text-sm font-semibold text-zinc-200 truncate mt-0.5">
                  {user.college || 'GNDEC Ludhiana'}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  PROGRAM &amp; BRANCH
                </span>
                <div className="text-xs sm:text-sm font-semibold text-zinc-200 truncate mt-0.5">
                  {user.degree || 'B.Tech CSE'}
                </div>
              </div>
            </div>

            {/* Schedule & Location */}
            <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <Calendar className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Sunday, 30 Sept 2024</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>10:00 AM - 1:00 PM (Report 9:30 AM)</span>
              </div>
              <div className="flex items-start gap-2 text-zinc-300 sm:col-span-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="truncate">{WORKSHOP_DETAILS.VENUE_SHORT_ADDRESS}</span>
              </div>
            </div>

            {/* Barcode & Security Stamp */}
            <div className="pt-4 border-t border-dashed border-zinc-700 flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <div className="font-mono text-[9px] text-zinc-500 tracking-widest mb-1">
                  SECURITY TOKEN: 0x9F4B2-SEC-AUTH
                </div>
                {/* Visual Barcode Pattern */}
                <div className="h-9 w-40 sm:w-48 bg-zinc-950 p-1.5 rounded flex items-center justify-between border border-zinc-800">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-full ${i % 3 === 0 ? 'w-1 bg-white' : i % 5 === 0 ? 'w-1.5 bg-orange-400' : 'w-0.5 bg-zinc-400'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Security QR Box */}
              <div className="w-14 h-14 bg-white rounded-lg p-1.5 flex flex-col items-center justify-center shrink-0 shadow-md">
                <QrCode className="w-full h-full text-black" />
              </div>
            </div>
          </div>

          {/* Quick instructions */}
          <div className="text-xs text-zinc-400 space-y-1.5 bg-zinc-900/40 p-4 rounded-xl border border-zinc-800">
            <div className="font-bold text-zinc-200">Important Attendee Checklist:</div>
            <ul className="list-disc pl-4 space-y-1">
              <li>Please arrive by <strong>9:30 AM IST</strong> for seat allocation and lab Wi-Fi key provisioning.</li>
              <li>Bring your laptop (charger included) to execute terminal sandbox exploits.</li>
              <li>Carry your valid college/university student ID card for identity verification.</li>
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-zinc-950 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleAddToCalendar}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-750 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-orange-400" />
            Add to Calendar
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download / Print Pass
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
