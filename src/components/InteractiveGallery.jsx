import React, { useState } from 'react';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';
import { galleryItems } from '../data/schoolData';

export default function InteractiveGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['All', 'Events', 'Sports', 'STEM', 'Campus', 'Arts'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 inline-block mb-3">
            Life at Kalyani
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Photo & Video <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Moments of joy, achievement, creativity, and camaraderie captured across our campus.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition ${
                activeFilter === f
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-slate-950/60 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 p-2 rounded-lg bg-slate-950/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60 inline-block">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-white leading-snug">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="h-[70vh] bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 border-t border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">{selectedImage.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 border border-slate-700 hover:bg-slate-800"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
