import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/schoolData';

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 inline-block mb-3">
            Voices of Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            What Parents & Alumni <span className="text-gradient">Say</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Real stories from our community members about their journey at The Kalyani School.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between relative hover:border-emerald-500/40 transition duration-300 shadow-xl"
            >
              <Quote className="w-10 h-10 text-emerald-500/20 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center space-x-3">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border border-emerald-400/50"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.author}</h4>
                  <p className="text-[11px] text-emerald-400 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
