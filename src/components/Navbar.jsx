import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Navbar({ onOpenVirtualTour, onOpenAdmissionModal }) {
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
    { name: "About Us", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Facilities", href: "#facilities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Admissions", href: "#admissions" },
    { name: "Student Life", href: "#student-life" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Info Bar */}
      <div className={`bg-emerald-950/95 text-xs text-slate-300 py-1.5 border-b border-emerald-800/40 transition-all duration-300 ${isScrolled ? 'hidden md:block opacity-90' : 'block'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-200">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{schoolInfo.phone}</span>
            </span>
            <span className="hidden sm:flex items-center space-x-1.5 text-slate-200">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{schoolInfo.email}</span>
            </span>
            <span className="hidden lg:flex items-center space-x-1.5 text-amber-300 font-semibold">
              <span>{schoolInfo.sanskritMotto}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-emerald-300 font-semibold text-[11px] bg-emerald-900/80 px-2.5 py-0.5 rounded border border-emerald-700/60 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              <span>CBSE 1130643</span>
            </span>
            <button 
              onClick={onOpenVirtualTour}
              className="flex items-center space-x-1 text-emerald-300 hover:text-white transition font-medium"
            >
              <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Virtual Tour 360°</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'glass-panel shadow-2xl py-3 border-b border-slate-800' : 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Authentic Flame Logo Replica */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 rounded-2xl bg-slate-900 border border-emerald-500/40 p-1 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              {/* Custom SVG Flame Logo representing Kalyani emblem */}
              <svg viewBox="0 0 100 100" className="w-8 h-8">
                <path d="M50,10 C45,30 20,40 25,65 C30,85 70,85 75,65 C80,40 55,30 50,10 Z" fill="#10B981" />
                <path d="M50,20 C48,35 32,45 35,62 C38,76 62,76 65,62 C68,45 52,35 50,20 Z" fill="#F59E0B" />
                <path d="M50,32 C49,42 40,48 42,58 C44,66 56,66 58,58 C60,48 51,42 50,32 Z" fill="#34D399" />
              </svg>
            </div>
            <div>
              <div className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                <span>The Kalyani School</span>
              </div>
              <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                || अक्षयं ज्ञानम् || • Pune
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenAdmissionModal}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-heading font-semibold text-xs tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 shadow-lg shadow-amber-500/20 transition-all duration-300 active:scale-95 flex items-center space-x-2"
            >
              <span>Apply 2026-27</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel mt-2 mx-4 p-5 rounded-2xl border border-slate-700/80 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-emerald-950/60 hover:text-emerald-400 transition"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissionModal();
                  }}
                  className="w-full py-3 rounded-xl font-heading font-bold text-center text-slate-950 bg-amber-400 hover:bg-amber-300 transition shadow-md"
                >
                  Apply for Admission 2026-27
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVirtualTour();
                  }}
                  className="w-full py-2.5 rounded-xl text-center text-xs font-semibold text-emerald-300 border border-emerald-600/50 bg-emerald-950/40"
                >
                  360° Virtual Campus Tour
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
