import React, { useState } from 'react';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';
import { facilitiesData } from '../data/schoolData';

export default function CampusFacilities({ onOpenVirtualTour }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Academics', 'Sports', 'Arts', 'Campus Life', 'Safety'];

  const filteredFacilities = activeCategory === 'All'
    ? facilitiesData
    : facilitiesData.filter(item => item.category === activeCategory);

  return (
    <section id="facilities" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 inline-block mb-3">
              Infrastructure & Eco Campus
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              World-Class <span className="text-gradient">Facilities</span>
            </h2>
          </div>

          <button
            onClick={onOpenVirtualTour}
            className="mt-4 md:mt-0 px-6 py-3 rounded-xl font-heading font-semibold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 transition shadow-lg flex items-center space-x-2 w-fit"
          >
            <Compass className="w-4 h-4 text-slate-950" />
            <span>Launch 360° Interactive Tour</span>
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facility Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 group hover:border-emerald-500/50 transition duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] uppercase font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800">
                  {fac.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center text-xs text-emerald-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    High-Tech Infrastructure
                  </span>
                  <button 
                    onClick={onOpenVirtualTour}
                    className="hover:underline flex items-center gap-1 text-slate-300 hover:text-white"
                  >
                    <span>View 3D</span>
                    <ArrowRight className="w-3 h-3 text-amber-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
