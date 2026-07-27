import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Visit Our <span className="text-gradient">Green Campus</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            We welcome parents and students to tour our facilities and experience the Kalyani difference firsthand.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Campus Address</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{schoolInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Admissions Desk</h4>
                  <p className="text-xs text-slate-300 mt-1 font-mono">{schoolInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Email Inquiry</h4>
                  <p className="text-xs text-slate-300 mt-1">{schoolInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-800 text-amber-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Office Hours</h4>
                  <p className="text-xs text-slate-300 mt-1">Monday - Saturday: 08:30 AM to 04:30 PM</p>
                </div>
              </div>

            </div>

            {/* Simulated Google Map View */}
            <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
                alt="Map Location"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="glass-panel p-4 rounded-xl text-center border border-white/20">
                  <MapPin className="w-6 h-6 text-amber-400 mx-auto animate-bounce" />
                  <p className="text-xs font-bold text-white mt-1">The Kalyani School, Manjari Budruk</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-emerald-400 hover:underline font-semibold mt-1 inline-block"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-xs text-slate-300">Our representative will get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                  <Send className="text-emerald-400 w-5 h-5" />
                  Direct Message / Campus Visit Request
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anish Kulkarni"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white">
                    <option>Campus Visit Request</option>
                    <option>General Information Inquiry</option>
                    <option>Transport & Fee Details</option>
                    <option>Career Opportunities</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="How can we assist you today?"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 transition shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
