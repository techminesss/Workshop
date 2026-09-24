import React, { useState } from 'react';
import { WORKSHOP_DETAILS } from '../data/constants';
import { MapPin, Clock, Headphones, Lock, MessageSquare, GraduationCap, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { RegistrationData } from '../types';

interface VenueAndRegisterSectionProps {
  onRegisterSubmit: (data: RegistrationData) => void;
  seatsLeft: number | null;
  registeredUser: RegistrationData | null;
  onViewPass: () => void;
}

export const VenueAndRegisterSection: React.FC<VenueAndRegisterSectionProps> = ({
  onRegisterSubmit,
  seatsLeft,
  registeredUser,
  onViewPass,
}) => {
  const [fullName, setFullName] = useState(registeredUser?.fullName || '');
  const [phone, setPhone] = useState(registeredUser?.phone || '');
  const [college, setCollege] = useState(registeredUser?.college || '');
  const [degree, setDegree] = useState(registeredUser?.degree || '');

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError('Please enter your full name for the certification.');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (!/^\d{10}$/.test(cleanPhone)) {
      setError('Enter a valid 10-digit phone number');
      return;
    }

    if (!college.trim()) {
      setError('Please provide your college or institution name.');
      return;
    }

    if (!degree.trim()) {
      setError('Please enter your degree and branch.');
      return;
    }



    setIsSubmitting(true);
    setTimeout(() => {
      onRegisterSubmit({
        fullName: fullName.trim(),
        phone: cleanPhone,
        college: college.trim(),
        degree: degree.trim(),
        registeredAt: new Date().toISOString(),
      });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="venue" className="bg-[#09090b] text-white py-24 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Venue Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
                OFFLINE VENUE
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                {WORKSHOP_DETAILS.VENUE_NAME}
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                State-of-the-art interactive tech lab equipped with gigabit fiber, presentation rigs, and offline cyber range sandboxes.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                    Address
                  </h4>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                    {WORKSHOP_DETAILS.VENUE_ADDRESS}
                  </p>
                </div>
              </div>

              {/* Timing & Date Block */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                    Timing &amp; Date
                  </h4>
                  <p className="text-sm text-zinc-200 font-bold">
                    Sunday, 30 September 2024
                  </p>
                  <p className="text-xs text-zinc-400">
                    10:00 AM - 1:00 PM IST (Reporting at 9:30 AM)
                  </p>
                </div>
              </div>

              {/* Coordinator Helpdesk Block */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                  <Headphones className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                    Coordinator Helpdesk
                  </h4>
                  <p className="text-sm text-zinc-300 font-medium">
                    Phone / WhatsApp: {WORKSHOP_DETAILS.PHONE_DISPLAY}
                  </p>
                  <p className="text-xs text-zinc-400">
                    {WORKSHOP_DETAILS.EMAIL}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Secure Your Pass / Registration Form */}
          <div className="lg:col-span-7">
            <div
              id="registration-card"
              className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-9 shadow-2xl relative overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 mb-7">
                <div>
                  <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                    SECURE YOUR PASS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Register for Free
                  </h3>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-black uppercase tracking-wider shrink-0">
                  {seatsLeft !== null ? seatsLeft : '...'} SEATS REMAINING
                </div>
              </div>

              {registeredUser ? (
                /* Already Registered View */
                <div className="bg-zinc-950/70 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Seat Confirmed for {registeredUser.fullName}!
                  </h4>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto">
                    Your VIP Admission pass for the Ludhiana Workshop has been issued. Ticket ID:{' '}
                    <span className="font-mono text-orange-400 font-bold">{registeredUser.ticketId || 'CS-LDH-43'}</span>.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={onViewPass}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider cursor-pointer"
                    >
                      View &amp; Download Pass
                    </button>
                    <button
                      onClick={() => onRegisterSubmit({} as any)}
                      className="w-full sm:w-auto px-5 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Register Another Student
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Registration Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-950/50 border border-red-500/40 text-red-300 text-xs font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-zinc-300 mb-2">
                      Full Name (for Certification)
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Harpreet Singh"
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-zinc-300 mb-2">
                      WhatsApp Number (to receive entry ticket)
                    </label>
                    <div className="flex rounded-xl bg-zinc-950 border border-zinc-800 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500 transition-all overflow-hidden">
                      <span className="px-4 py-3.5 bg-zinc-900 border-r border-zinc-800 text-zinc-400 text-sm font-semibold flex items-center">
                        +91
                      </span>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                          setPhone(val);
                          if (val.length === 10 && error === 'Enter a valid 10-digit phone number') {
                            setError(null);
                          }
                        }}
                        placeholder="70876 91111"
                        className="w-full px-4 py-3.5 bg-transparent text-white text-sm placeholder:text-zinc-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* College & Degree 2-cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="college" className="block text-xs font-semibold text-zinc-300 mb-2">
                        College / Institution
                      </label>
                      <input
                        id="college"
                        type="text"
                        required
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        placeholder="e.g. GNDEC, PCTE, CTU"
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="degree" className="block text-xs font-semibold text-zinc-300 mb-2">
                        Degree &amp; Branch
                      </label>
                      <input
                        id="degree"
                        type="text"
                        required
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                        placeholder="e.g. B.Tech CSE, BCA"
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      />
                    </div>
                  </div>



                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-black uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? 'Securing Seat & Generating Pass...' : 'CONFIRM MY FREE SEAT NOW'}
                    </button>
                  </div>

                  {/* Trust Badges */}
                  <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-4 text-[11px] font-medium text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-zinc-400" />
                      100% Encrypted
                    </span>
                    <span className="text-zinc-700">•</span>
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
                      Instant SMS Pass
                    </span>
                    <span className="text-zinc-700">•</span>
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
                      Student ID Entry
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
