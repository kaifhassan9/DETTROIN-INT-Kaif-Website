import React from 'react';
import { schoolInfo } from '../data/schoolData';

export default function StatsBar() {
  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl bg-slate-900/90 backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {schoolInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-2 ${
                idx !== 0 ? 'pt-4 md:pt-0' : ''
              }`}
            >
              <span className="text-3xl sm:text-4xl font-extrabold font-heading text-gradient-emerald">
                {stat.value}
              </span>
              <h4 className="text-sm font-semibold text-slate-100 mt-1">{stat.label}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
