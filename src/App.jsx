import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import AcademicExplorer from './components/AcademicExplorer';
import CampusFacilities from './components/CampusFacilities';
import InteractiveGallery from './components/InteractiveGallery';
import AdmissionWizard from './components/AdmissionWizard';
import StudentLife from './components/StudentLife';
import EventsCalendar from './components/EventsCalendar';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import VirtualTourModal from './components/VirtualTourModal';
import Footer from './components/Footer';

export default function App() {
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);

  const handleScrollToAdmissions = () => {
    const section = document.getElementById('admissions');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        onOpenAdmissionModal={handleScrollToAdmissions}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onOpenAdmissionModal={handleScrollToAdmissions}
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        />
        <StatsBar />
        <AboutSection />
        <AcademicExplorer />
        <CampusFacilities onOpenVirtualTour={() => setIsVirtualTourOpen(true)} />
        <InteractiveGallery />
        <AdmissionWizard />
        <StudentLife />
        <EventsCalendar />
        <Testimonials />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenAdmissionModal={handleScrollToAdmissions} />

      {/* Interactive 360 Virtual Tour Modal */}
      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
      />
    </div>
  );
}
