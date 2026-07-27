import React, { useState } from 'react';
import { GraduationCap, Phone, Mail, MapPin, Send, Heart, CheckCircle2, ShieldCheck } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Footer({ onOpenAdmissionModal }) {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-900 flex items-center justify-center text-white shadow-lg border border-emerald-400/30">
                <svg viewBox="0 0 100 100" className="w-7 h-7">
                  <path d="M50,10 C45,30 20,40 25,65 C30,85 70,85 75,65 C80,40 55,30 50,10 Z" fill="#10B981" />
                  <path d="M50,20 C48,35 32,45 35,62 C38,76 62,76 65,62 C68,45 52,35 50,20 Z" fill="#F59E0B" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg text-white">The Kalyani School</h3>
                <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">{schoolInfo.sanskritMotto} • Pune</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Promoted by the <strong>Kalyani Group</strong> in academic collaboration with <strong>Educare & The Shri Ram School</strong>. A co-educational CBSE institution where happiness is at the heart of learning.
            </p>

            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/80 text-[11px] text-emerald-300 font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{schoolInfo.accreditation}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-emerald-400 transition">About School & Awards</a></li>
              <li><a href="#academics" className="hover:text-emerald-400 transition">Academic Curriculum</a></li>
              <li><a href="#facilities" className="hover:text-emerald-400 transition">Campus & Bus Routes</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition">Photo & Video Gallery</a></li>
              <li><a href="#admissions" className="hover:text-emerald-400 transition">Admissions 2026-27</a></li>
            </ul>
          </div>

          {/* Student Life & Portals */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Portals & Life</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-400 hover:underline font-semibold">Parent Portal Login</a></li>
              <li><a href="#student-life" className="hover:text-emerald-400 transition">Guiding Alumni Network</a></li>
              <li><a href="#student-life" className="hover:text-emerald-400 transition">House System & Sports</a></li>
              <li><a href="#events" className="hover:text-emerald-400 transition">School Calendar & Fests</a></li>
              <li><button onClick={onOpenAdmissionModal} className="text-emerald-400 hover:underline font-semibold">Admission Enquiry</button></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Newsletter</h4>
            <p className="text-xs text-slate-400">Subscribe for official circulars, event invites, and campus news.</p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950 text-emerald-300 rounded-xl border border-emerald-700 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter parent email..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl font-heading font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} The Kalyani School, Manjari Budruk, Pune. All Rights Reserved. Redesign for DETTROIN Technical Assessment.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Terms of Use</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">CBSE Mandatory Disclosure</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
