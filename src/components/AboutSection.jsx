import React, { useState } from 'react';
import { Target, Eye, Trophy, Award, Medal, Leaf, ShieldCheck, CheckCircle2, Quote } from 'lucide-react';
import { schoolInfo, awardsData } from '../data/schoolData';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('vision');

  const coreValues = [
    { title: "Intellectual Curiosity", desc: "Encouraging students to question, explore, and innovate through hands-on learning." },
    { title: "Ethical Integrity", desc: "Instilling deep moral grounding, empathy, and responsibility toward society." },
    { title: "Global Citizenship", desc: "Preparing students to lead in an interconnected, diverse global economy." },
    { title: "Resilience & Grit", desc: "Fostering perseverance, emotional strength, and continuous self-improvement." }
  ];

  const getAwardIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'Award': return <Award className="w-6 h-6 text-emerald-400" />;
      case 'Medal': return <Medal className="w-6 h-6 text-amber-400" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      default: return <Trophy className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 inline-block mb-3">
            About The Kalyani School
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Nurturing Tomorrow's <span className="text-gradient">Visionaries</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Promoted by the <strong className="text-emerald-300">Kalyani Group</strong> with academic collaboration from <strong className="text-amber-400">The Shri Ram School & Educare</strong>.
          </p>
        </div>

        {/* Awards & Accreditation Grid Showcase (From Real Site) */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              <Trophy className="w-6 h-6 text-amber-400" />
              Our Awards & Global Accreditations
            </h3>
            <p className="text-xs text-slate-400 mt-1">Recognized nationally for academic excellence, sustainability, and student leadership.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsData.map((award) => (
              <div
                key={award.id}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-105 transition-transform">
                      {getAwardIcon(award.icon)}
                    </div>
                    <span className="text-[11px] font-bold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800/80">
                      {award.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition">{award.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{award.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between text-[11px] text-emerald-400 font-semibold">
                  <span>Verified Recognition</span>
                  <span className="text-slate-400">Official Award</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision & Mission Tabs */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex space-x-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('vision')}
                className={`flex-1 py-3 rounded-lg text-sm font-semibold transition flex items-center justify-center space-x-2 ${
                  activeTab === 'vision'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>Our Vision</span>
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`flex-1 py-3 rounded-lg text-sm font-semibold transition flex items-center justify-center space-x-2 ${
                  activeTab === 'mission'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </button>
            </div>

            {/* Tab Content Box */}
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 min-h-[220px]">
              {activeTab === 'vision' ? (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Eye className="text-emerald-400 w-6 h-6" />
                    Inspiring Lifelong Excellence
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    To provide a harmonious stimulating environment which inspires all to strive for excellence and emerge as responsible future-ready citizens.
                  </p>
                  <div className="pt-2 grid grid-cols-2 gap-3 text-sm text-emerald-300 font-medium">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" /> Student-Centric Pedagogy
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" /> UNESCO Green Campus
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Target className="text-emerald-400 w-6 h-6" />
                    Empowering Every Individual
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Our mission is to cultivate a dynamic, inclusive, and inquiry-driven academic environment where every student develops critical thinking, creative expression, environmental stewardship, and leadership skills.
                  </p>
                  <div className="pt-2 grid grid-cols-2 gap-3 text-sm text-emerald-300 font-medium">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" /> Holistic Growth
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" /> Global Standards
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreValues.map((val, idx) => (
                <div key={idx} className="glass-card p-5 rounded-xl border border-slate-800/80">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Director / Principal Quote */}
          <div className="lg:col-span-5">
            <div className="relative glass-panel p-8 rounded-3xl border border-emerald-500/30 overflow-hidden group shadow-2xl">
              
              <Quote className="w-16 h-16 text-emerald-500/10 absolute top-6 right-6" />

              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-400/50 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                    alt="Director / Principal"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">Mrs. Deeksha Sharma</h4>
                  <p className="text-xs text-emerald-400 font-semibold">Director & Principal, The Kalyani School</p>
                </div>

                <p className="text-slate-300 italic text-sm leading-relaxed">
                  "Education is not merely the accumulation of facts, but the ignition of a fire within. At The Kalyani School, we nurture every child's unique spark so they can illuminate the world with knowledge, kindness, and courage."
                </p>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
                  <span>QS Diamond+ Rated Institution</span>
                  <span className="text-amber-400 font-semibold">Kalyani Group Flagship</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
