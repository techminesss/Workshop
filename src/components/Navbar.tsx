import React, { useState, useEffect } from 'react';
import { Shield, User, Menu, X, Ticket } from 'lucide-react';
import { RegistrationData } from '../types';
import techminesLogo from '../assets/images/techmines-logo.png';

interface NavbarProps {
  onReserveClick: () => void;
  registeredUser: RegistrationData | null;
  onViewTicket: () => void;
  seatsLeft: number | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  onReserveClick,
  registeredUser,
  onViewTicket,
  seatsLeft
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Curriculum', href: '#curriculum' },
    { label: "Who It's For", href: '#eligibility' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Bonuses', href: '#bonuses' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'bg-[#09090b] border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand & Badge */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img src={techminesLogo} alt="Techmines" className="w-full h-full object-contain drop-shadow-md" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-white leading-none">
                Techmines
              </span>
              <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase leading-none mt-1">
                LUDHIANA
              </span>
            </div>
          </a>

          {/* Top Pill Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/80 text-[11px] font-semibold text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="tracking-wide">FREE WORKSHOP • LUDHIANA • 10 OCT</span>
          </div>
        </div>

        {/* Center Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-zinc-300 hover:text-orange-400 transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          {registeredUser ? (
            <button
              id="header-view-ticket-btn"
              onClick={onViewTicket}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider hover:bg-emerald-500/30 transition-all shadow-sm"
              title="View Entry Pass"
            >
              <Ticket className="w-4 h-4" />
              <span className="hidden sm:inline">Pass Confirmed</span>
              <span className="sm:hidden">Pass</span>
            </button>
          ) : (
            <button
              id="header-reserve-seat-btn"
              onClick={onReserveClick}
              className="hidden sm:block px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Reserve My Free Seat
            </button>
          )}

          {/* User / Pass Action icon */}
          <button
            id="header-profile-action-btn"
            onClick={registeredUser ? onViewTicket : onReserveClick}
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            title={registeredUser ? `Registered: ${registeredUser.fullName}` : 'Login / Seat Status'}
          >
            <User className="w-5 h-5" />
          </button>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0e12] border-b border-zinc-800 px-6 py-5 space-y-4 animate-in slide-in-from-top-2">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-400">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span>Only {seatsLeft !== null ? seatsLeft : '...'} Seats Remaining</span>
            </div>
            <span className="text-xs text-zinc-400">Ludhiana Hub</span>
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-200 hover:text-orange-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (registeredUser) onViewTicket();
                else onReserveClick();
              }}
              className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wider text-sm text-center shadow-lg"
            >
              {registeredUser ? 'View My Confirmed Pass' : 'Reserve My Free Seat'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
