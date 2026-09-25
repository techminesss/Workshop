import React from 'react';
import { WORKSHOP_DETAILS } from '../data/constants';
import techminesLogo from '../assets/images/techmines-logo.png';
import { Shield, Star, Calendar, MapPin, Phone, Mail, Headphones, Send, Youtube, MessageSquare, Share2 } from 'lucide-react';

interface FooterProps {
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#070709] text-white pt-16 pb-12 border-t border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 flex items-center justify-center">
                <img src={techminesLogo} alt="Techmines" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white leading-none">
                  Techmines
                </span>
                <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase leading-none mt-1">
                  LUDHIANA
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Hands-on Cyber Defense and Penetration Testing masterclass engineered for ambitious engineers and aspiring professionals in Punjab.
            </p>

            {/* Rating Stars */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center text-orange-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 stroke-orange-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">
                4.92/5 <span className="text-zinc-500 font-normal">(12,400+ Enrolled)</span>
              </span>
            </div>
          </div>

          {/* Venue & Date (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Venue &amp; Date
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  Thursday, 10 October 2026 <br />
                  10:00 AM - 12:00 PM IST
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  {WORKSHOP_DETAILS.VENUE_NAME}, {WORKSHOP_DETAILS.VENUE_ADDRESS}
                </span>
              </div>
            </div>
          </div>

          {/* Direct Contact (Col 8-10) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <a href={`tel:${WORKSHOP_DETAILS.PHONE_LINK}`} className="hover:text-white transition-colors">
                  {WORKSHOP_DETAILS.PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <a href={`mailto:${WORKSHOP_DETAILS.EMAIL}`} className="hover:text-white transition-colors truncate">
                  {WORKSHOP_DETAILS.EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1 text-emerald-400 font-medium">
                <Headphones className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Live Seat Helpdesk Available</span>
              </div>
            </div>
          </div>

          {/* Community Hub (Col 11-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Community Hub
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Join over 45,000+ ethical hackers in our private Telegram defense squad.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="#telegram"
                onClick={(e) => { e.preventDefault(); alert("You'll receive the VIP Telegram Defense Squad link via SMS upon reserving your seat!"); }}
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-orange-500/20 hover:text-orange-400 text-zinc-400 border border-zinc-800 flex items-center justify-center transition-colors"
                title="Telegram Group"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                onClick={(e) => { e.preventDefault(); alert("Lab recordings and walkthroughs will be unlocked after the masterclass."); }}
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-orange-500/20 hover:text-orange-400 text-zinc-400 border border-zinc-800 flex items-center justify-center transition-colors"
                title="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#discord"
                onClick={(e) => { e.preventDefault(); alert("Discord server invite is embedded inside your workshop ticket pass!"); }}
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-orange-500/20 hover:text-orange-400 text-zinc-400 border border-zinc-800 flex items-center justify-center transition-colors"
                title="Discord Server"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Techmines Ludhiana Workshop',
                      text: 'Free hands-on ethical hacking masterclass in Ludhiana on 10 Oct. Register your seat!',
                      url: window.location.href,
                    }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Workshop invite link copied to clipboard!');
                  }
                }}
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-orange-500/20 hover:text-orange-400 text-zinc-400 border border-zinc-800 flex items-center justify-center transition-colors cursor-pointer"
                title="Share Workshop"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © 2026 Techmines Ludhiana Workshop. All rights reserved. Certified under National Skills Initiative.
          </div>
          <div className="flex items-center gap-6">
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Techmines Ludhiana Terms: Strict educational sandbox testing only. No unlawful network intrusion is permitted."); }} className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Techmines Privacy: Your phone number and student details are encrypted and solely used for issuing entry tickets."); }} className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#refund" onClick={(e) => { e.preventDefault(); alert("Admission is 100% free for approved students. No fee is charged."); }} className="hover:text-zinc-300 transition-colors">
              Refund &amp; Cancellation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
