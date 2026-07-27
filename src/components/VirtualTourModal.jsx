import React, { useState } from 'react';
import { X, Compass, Eye, ShieldCheck, MapPin } from 'lucide-react';

export default function VirtualTourModal({ isOpen, onClose }) {
  const [activeZone, setActiveZone] = useState('quad');

  if (!isOpen) return null;

  const tourZones = [
    {
      id: 'quad',
      title: 'Main Academic Quadrangle',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop',
      desc: '10-acre lush green central quad surrounded by eco-friendly smart classrooms.'
    },
    {
      id: 'robotics',
      title: 'Robotics & Innovation Lab',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
      desc: 'Equipped with 3D printers, AI modules, and electronics workstations.'
    },
    {
      id: 'sports',
      title: 'Olympic Sports Arena',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop',
      desc: 'FINA-standard swimming pool, synthetic turf, and indoor badminton court.'
    },
    {
      id: 'auditorium',
      title: 'Grand Auditorium',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
      desc: '800-seat acoustic auditorium for theatrical productions and annual functions.'
    }
  ];

  const currentZone = tourZones.find(z => z.id === activeZone) || tourZones[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative max-w-5xl w-full glass-panel rounded-3xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col h-[85vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-emerald-950 border border-emerald-800 text-amber-400">
              <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">360° Virtual Campus Experience</h3>
              <p className="text-xs text-slate-400">Interactive walkthrough of The Kalyani School</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Viewport Box */}
        <div className="relative flex-1 bg-black overflow-hidden group">
          <img
            src={currentZone.image}
            alt={currentZone.title}
            className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />

          {/* Hotspot Badge */}
          <div className="absolute top-6 left-6 glass-panel px-4 py-2 rounded-xl border border-white/20 flex items-center space-x-2 text-xs text-white">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span className="font-bold">{currentZone.title}</span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-2xl border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h4 className="text-sm font-bold text-white">{currentZone.title}</h4>
              <p className="text-xs text-slate-300 mt-0.5">{currentZone.desc}</p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-800 shrink-0">
              360° Live Render
            </span>
          </div>
        </div>

        {/* Zone Selector Bar */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex overflow-x-auto space-x-3">
          {tourZones.map((z) => (
            <button
              key={z.id}
              onClick={() => setActiveZone(z.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition border ${
                activeZone === z.id
                  ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {z.title}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
