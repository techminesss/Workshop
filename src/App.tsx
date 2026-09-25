import React, { useState, useEffect, Suspense, lazy } from 'react';
import { db } from './lib/firebase';
import { doc, getDoc, runTransaction, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SyllabusSection } from './components/SyllabusSection';
import { EligibilitySection } from './components/EligibilitySection';
import { MentorsSection } from './components/MentorsSection';
import { FaqSection } from './components/FaqSection';
import { VenueAndRegisterSection } from './components/VenueAndRegisterSection';
import { Footer } from './components/Footer';
const TicketModal = lazy(() => import('./components/TicketModal').then(m => ({ default: m.TicketModal })));
const ModuleDetailModal = lazy(() => import('./components/ModuleDetailModal').then(m => ({ default: m.ModuleDetailModal })));
import { RegistrationData, SyllabusModule } from './types';

const DISPLAY_SEAT_OFFSET = 40;

export default function App() {
  const [seatsLeft, setSeatsLeft] = useState<number | null>(null);
  const displaySeatsLeft = seatsLeft !== null ? Math.max(0, seatsLeft - DISPLAY_SEAT_OFFSET) : null;

  const [registeredUser, setRegisteredUser] = useState<RegistrationData | null>(() => {
    const saved = localStorage.getItem('techmines_registered_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Modal States
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<SyllabusModule | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const docRef = doc(db, "meta", "seats");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSeatsLeft(docSnap.data().seatsLeft);
        } else {
          setSeatsLeft(0);
        }
      } catch (e) {
        console.error("Error fetching seats:", e);
        setSeatsLeft(0);
      }
    };
    fetchSeats();
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const scrollToRegistration = () => {
    const section = document.getElementById('registration-card');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegisterSubmit = async (data: RegistrationData) => {
    // If resetting
    if (!data.fullName) {
      setRegisteredUser(null);
      localStorage.removeItem('techmines_registered_user');
      showToast('Registration reset. You can now register another attendee.');
      return;
    }

    try {
      const seatRef = doc(db, "meta", "seats");
      const newRegistrationRef = doc(collection(db, "registrations"));

      let assignedSeat = 0;

      await runTransaction(db, async (transaction) => {
        const seatDoc = await transaction.get(seatRef);
        if (!seatDoc.exists()) {
          throw new Error("Seats data not found.");
        }

        const currentSeats = seatDoc.data().seatsLeft;
        if (currentSeats <= 0) {
          throw new Error("Sold out");
        }

        assignedSeat = 50 - currentSeats + 1;

        const completeData = {
          ...data,
          seatNumber: assignedSeat,
          registeredAt: serverTimestamp(),
        };

        transaction.update(seatRef, { seatsLeft: currentSeats - 1 });
        transaction.set(newRegistrationRef, completeData);
      });

      const newTicketId = `CS-LDH-${assignedSeat < 10 ? '0' + assignedSeat : assignedSeat}`;
      const localData: RegistrationData = {
        ...data,
        seatNumber: assignedSeat,
        ticketId: newTicketId,
      };

      setRegisteredUser(localData);
      localStorage.setItem('techmines_registered_user', JSON.stringify(localData));

      setSeatsLeft((prev) => (prev !== null ? Math.max(0, prev - 1) : 0));

      setIsTicketModalOpen(true);
      showToast(`🎉 Seat #${assignedSeat} confirmed! Your official ticket has been generated.`);
    } catch (error: any) {
      if (error.message === "Sold out") {
        showToast("Sorry, all seats are sold out!");
      } else {
        showToast("Error during registration. Please try again.");
        console.error("Registration error:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-orange-500 selection:text-white font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 max-w-sm px-4 py-3 rounded-2xl bg-zinc-900 border border-orange-500/50 shadow-2xl text-white text-xs font-bold flex items-center gap-2 animate-in slide-in-from-top-4">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        onReserveClick={scrollToRegistration}
        registeredUser={registeredUser}
        onViewTicket={() => setIsTicketModalOpen(true)}
        seatsLeft={displaySeatsLeft}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onReserveClick={scrollToRegistration}
          seatsLeft={displaySeatsLeft}
        />

        {/* Practical Syllabus Section (Light Contrast Theme) */}
        <SyllabusSection
          onReserveClick={scrollToRegistration}
          onSelectModule={(mod) => setSelectedModule(mod)}
        />

        {/* Who Is This Workshop For / Eligibility Section */}
        <EligibilitySection />

        {/* Know Your Mentors Section (Dark Cyber Theme) */}
        <MentorsSection
          onReserveClick={scrollToRegistration}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Offline Venue & Registration Section */}
        <VenueAndRegisterSection
          onRegisterSubmit={handleRegisterSubmit}
          seatsLeft={displaySeatsLeft}
          registeredUser={registeredUser}
          onViewPass={() => setIsTicketModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <Suspense fallback={null}>
        {registeredUser && (
          <TicketModal
            user={registeredUser}
            isOpen={isTicketModalOpen}
            onClose={() => setIsTicketModalOpen(false)}
          />
        )}

        <ModuleDetailModal
          module={selectedModule}
          onClose={() => setSelectedModule(null)}
          onReserveClick={scrollToRegistration}
        />
      </Suspense>

    </div>
  );
}
