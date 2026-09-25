import React, { useRef } from 'react';
import { X, Download, Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';
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

  const ticketId = user.ticketId || 'TM-LDH-001';
  const seatNumber = user.seatNumber || 1;

  const handleDownload = async () => {
    if (!ticketRef.current) return;

    // Use html2canvas-style approach with a canvas element
    const ticket = ticketRef.current;
    const canvas = document.createElement('canvas');
    const scale = 2; // For high-res output
    canvas.width = ticket.offsetWidth * scale;
    canvas.height = ticket.offsetHeight * scale;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(scale, scale);
    ctx.fillStyle = '#0e0e12';
    ctx.fillRect(0, 0, ticket.offsetWidth, ticket.offsetHeight);

    // Draw ticket content
    const w = ticket.offsetWidth;
    const pad = 32;

    // Header bar
    ctx.fillStyle = '#18181b';
    ctx.fillRect(0, 0, w, 52);
    ctx.fillStyle = '#f97316';
    ctx.font = 'bold 11px monospace';
    ctx.fillText('TECHMINES WORKSHOP ENTRY PASS', pad, 32);

    // Ticket ID
    ctx.fillStyle = '#a1a1aa';
    ctx.font = '10px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`TICKET: ${ticketId}`, w - pad, 32);
    ctx.textAlign = 'left';

    let y = 80;

    // Confirmed status
    ctx.fillStyle = '#065f46';
    ctx.fillRect(pad, y - 16, w - pad * 2, 36);
    ctx.fillStyle = '#6ee7b7';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('✓  REGISTRATION CONFIRMED', pad + 12, y + 6);
    y += 48;

    // Attendee name
    ctx.fillStyle = '#a1a1aa';
    ctx.font = 'bold 10px sans-serif';
    ctx.fillText('ATTENDEE', pad, y);
    y += 18;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText(user.fullName || 'Student', pad, y);
    y += 32;

    // Seat
    ctx.fillStyle = '#a1a1aa';
    ctx.font = 'bold 10px sans-serif';
    ctx.fillText('SEAT NUMBER', pad, y);
    ctx.fillText('COLLEGE', w / 2, y);
    y += 18;
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText(`#${seatNumber}`, pad, y);
    ctx.fillStyle = '#e4e4e7';
    ctx.font = '13px sans-serif';
    ctx.fillText(user.college || '', w / 2, y);
    y += 36;

    // Dashed separator
    ctx.strokeStyle = '#3f3f46';
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(w - pad, y);
    ctx.stroke();
    ctx.setLineDash([]);
    y += 24;

    // Date, Time, Venue
    ctx.fillStyle = '#a1a1aa';
    ctx.font = 'bold 10px sans-serif';
    ctx.fillText('DATE', pad, y);
    ctx.fillText('TIME', w / 2, y);
    y += 16;
    ctx.fillStyle = '#e4e4e7';
    ctx.font = '12px sans-serif';
    ctx.fillText('Thursday, 10 Oct 2026', pad, y);
    ctx.fillText('10:00 AM – 12:00 PM', w / 2, y);
    y += 28;

    ctx.fillStyle = '#a1a1aa';
    ctx.font = 'bold 10px sans-serif';
    ctx.fillText('VENUE', pad, y);
    y += 16;
    ctx.fillStyle = '#e4e4e7';
    ctx.font = '12px sans-serif';
    ctx.fillText(WORKSHOP_DETAILS.VENUE_NAME, pad, y);
    y += 18;
    // Wrap the address text
    const addrWords = WORKSHOP_DETAILS.VENUE_SHORT_ADDRESS.split(' ');
    let line = '';
    ctx.fillStyle = '#a1a1aa';
    ctx.font = '11px sans-serif';
    for (const word of addrWords) {
      const test = line + word + ' ';
      if (ctx.measureText(test).width > w - pad * 2) {
        ctx.fillText(line.trim(), pad, y);
        y += 15;
        line = word + ' ';
      } else {
        line = test;
      }
    }
    if (line.trim()) {
      ctx.fillText(line.trim(), pad, y);
      y += 24;
    }

    // Footer note
    ctx.strokeStyle = '#3f3f46';
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(w - pad, y);
    ctx.stroke();
    ctx.setLineDash([]);
    y += 20;

    ctx.fillStyle = '#71717a';
    ctx.font = '10px sans-serif';
    ctx.fillText('Bring your laptop & student ID. Report by 9:30 AM.', pad, y);

    // Trigger download
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `techmines-pass-${ticketId}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 'image/png');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0e0e12] border border-zinc-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
          <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
            Workshop Entry Pass
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-800 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Ticket Body */}
        <div ref={ticketRef} className="p-6 overflow-y-auto space-y-5">
          {/* Confirmed Banner */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Registration Confirmed</span>
          </div>

          {/* Simple Ticket Card */}
          <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-700 rounded-2xl p-5 shadow-xl overflow-hidden">
            {/* Perforation circles */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0e0e12] border border-zinc-700"></div>
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0e0e12] border border-zinc-700"></div>

            {/* Pass Title & Ticket ID */}
            <div className="flex items-start justify-between pb-4 border-b border-dashed border-zinc-700">
              <div>
                <div className="text-[11px] font-mono font-bold text-orange-400 uppercase tracking-widest">
                  TECHMINES WORKSHOP
                </div>
                <h3 className="text-lg font-black text-white mt-0.5">
                  Ludhiana Masterclass
                </h3>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">TICKET</div>
                <div className="font-mono text-sm font-black text-orange-400">{ticketId}</div>
              </div>
            </div>

            {/* Attendee Info */}
            <div className="grid grid-cols-2 gap-4 py-4 border-b border-dashed border-zinc-700">
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  NAME
                </span>
                <div className="text-sm font-extrabold text-white truncate mt-0.5">
                  {user.fullName}
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  SEAT
                </span>
                <div className="text-sm font-black text-emerald-400 mt-0.5">
                  #{seatNumber}
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  COLLEGE
                </span>
                <div className="text-xs font-semibold text-zinc-200 truncate mt-0.5">
                  {user.college}
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  PHONE
                </span>
                <div className="text-xs font-semibold text-zinc-200 mt-0.5">
                  +91 {user.phone}
                </div>
              </div>
            </div>

            {/* Date, Time, Venue */}
            <div className="py-3 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <Calendar className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Thursday, 10 Oct 2026</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>10:00 AM – 12:00 PM</span>
              </div>
              <div className="flex items-start gap-2 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                <span>{WORKSHOP_DETAILS.VENUE_SHORT_ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Brief note */}
          <p className="text-[11px] text-zinc-500 text-center">
            Bring your laptop & student ID. Report by 9:30 AM.
          </p>
        </div>

        {/* Footer Action */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex justify-center">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download Pass
          </button>
        </div>
      </div>
    </div>
  );
};
