import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { upcomingEvents } from '../data/schoolData';

export default function EventsCalendar() {
  const [rsvpEvent, setRsvpEvent] = useState(null);
  const [rsvpConfirmed, setRsvpConfirmed] = useState(false);

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setRsvpConfirmed(true);
  };

  return (
    <section id="events" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 inline-block mb-3">
              School Calendar
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Upcoming <span className="text-gradient">Events & Festivities</span>
            </h2>
          </div>

          <p className="text-xs text-slate-400 max-w-sm mt-3 md:mt-0">
            Stay updated with academic symposiums, sports meets, cultural celebrations, and open houses.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingEvents.map((evt) => (
            <div
              key={evt.id}
              className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-emerald-500/50 transition duration-300 group"
            >
              {/* Date Badge */}
              <div className="w-20 h-24 rounded-2xl bg-gradient-to-b from-emerald-900 to-slate-950 border border-emerald-500/30 flex flex-col items-center justify-center shrink-0 shadow-lg text-center">
                <span className="text-2xl font-extrabold font-heading text-amber-400">{evt.day}</span>
                <span className="text-xs font-bold text-emerald-300 uppercase">{evt.month}</span>
                <span className="text-[10px] text-slate-400">{evt.year}</span>
              </div>

              {/* Event Details */}
              <div className="flex-1 space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    {evt.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition">
                  {evt.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">{evt.description}</p>

                <div className="flex flex-wrap gap-4 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {evt.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {evt.location}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setRsvpEvent(evt);
                    setRsvpConfirmed(false);
                  }}
                  className="mt-2 text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition"
                >
                  <span>RSVP / Register Attendance</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* RSVP Modal */}
      {rsvpEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-300">
          <div className="max-w-md w-full glass-panel p-6 rounded-3xl border border-slate-700 shadow-2xl">
            {rsvpConfirmed ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">RSVP Confirmed!</h4>
                <p className="text-xs text-slate-300">
                  You are registered for <strong>{rsvpEvent.title}</strong> on {rsvpEvent.day} {rsvpEvent.month} {rsvpEvent.year}.
                </p>
                <button
                  onClick={() => setRsvpEvent(null)}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <h4 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                  RSVP: {rsvpEvent.title}
                </h4>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setRsvpEvent(null)}
                    className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300"
                  >
                    Confirm RSVP
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
