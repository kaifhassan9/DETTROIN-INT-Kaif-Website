import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Award, ShieldCheck, Sparkles, User, FileText, Bus, GraduationCap } from 'lucide-react';
import { heroSlides, quickUtilityLinks } from '../data/schoolData';

export default function Hero({ onOpenAdmissionModal, onOpenVirtualTour }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const getUtilIcon = (iconName) => {
    switch (iconName) {
      case 'User': return <User className="w-5 h-5 text-white" />;
      case 'FileText': return <FileText className="w-5 h-5 text-white" />;
      case 'Bus': return <Bus className="w-5 h-5 text-white" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-white" />;
      default: return <FileText className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 bg-slate-950">
      
      /* Background Images with Overlay */
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>
      ))}

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{heroSlides[currentSlide].badge}</span>
            </div>

            {/* Headline with authentic "THE HAPPY PLACE" slogan */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
              {heroSlides[currentSlide].title}{' '}
              <span className="block text-gradient">
                {heroSlides[currentSlide].highlightText}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAdmissionModal}
                className="px-7 py-3.5 rounded-xl font-heading font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 shadow-xl shadow-amber-500/20 hover:scale-105 transition duration-300 flex items-center space-x-2.5"
              >
                <span>Enroll For 2026-27</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVirtualTour}
                className="px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white glass-panel hover:bg-slate-800/80 transition duration-300 flex items-center space-x-2 border border-slate-700 hover:border-emerald-500/50"
              >
                <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Watch School Tour</span>
              </button>
            </div>

            {/* Highlights Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-400">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">#1 Day School in Pune</h4>
                  <p className="text-xs text-slate-400">Education World 2023-24</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-400">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">QS DIAMOND+ Rated</h4>
                  <p className="text-xs text-slate-400">Highest School Rating</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Floating Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group hover:border-emerald-500/50 transition duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Admissions Open 2026-27
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Limited seats for Nursery to Grade 11. Interactive campus interactions are currently scheduling.
              </p>
              
              <div className="space-y-2.5 mb-6 text-xs text-slate-200">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Affiliation</span>
                  <span className="font-semibold text-emerald-300">CBSE No. 1130643</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Promoted By</span>
                  <span className="font-semibold text-amber-400">Kalyani Group</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Collaborator</span>
                  <span className="font-semibold text-emerald-300">The Shri Ram School</span>
                </div>
              </div>

              <button
                onClick={onOpenAdmissionModal}
                className="w-full py-3 rounded-xl font-heading font-bold text-xs tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 transition shadow-md text-center block"
              >
                Inquire Now
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Quick Action Utilities Bar (Recreated from Real Site's Top 4 Banner Blocks) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickUtilityLinks.map((util, idx) => (
            <a
              key={idx}
              href={util.link}
              onClick={util.link === '#admissions' ? onOpenAdmissionModal : undefined}
              className={`p-4 rounded-2xl bg-gradient-to-r ${util.color} shadow-lg border border-white/10 hover:scale-[1.02] transition-transform flex items-center space-x-3.5 group`}
            >
              <div className="p-2.5 rounded-xl bg-white/15 backdrop-blur-md shrink-0">
                {getUtilIcon(util.icon)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1">
                  {util.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h4>
                <p className="text-[11px] text-white/80 mt-0.5 leading-snug">{util.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Slider Controls */}
      <div className="relative z-20 mt-6 flex justify-center items-center space-x-3">
        <button
          onClick={prevSlide}
          className="p-1.5 rounded-full glass-panel hover:bg-slate-800 text-slate-300 hover:text-white transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex space-x-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-emerald-400' : 'w-2 bg-slate-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-1.5 rounded-full glass-panel hover:bg-slate-800 text-slate-300 hover:text-white transition"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
