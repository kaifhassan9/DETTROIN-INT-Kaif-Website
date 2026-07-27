import React, { useState } from 'react';
import { BookOpen, Baby, Cpu, GraduationCap, ArrowUpRight, CheckCircle2, Download } from 'lucide-react';
import { academicsData } from '../data/schoolData';

export default function AcademicExplorer() {
  const [selectedLevel, setSelectedLevel] = useState(academicsData[0].id);

  const activeData = academicsData.find((item) => item.id === selectedLevel) || academicsData[0];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Baby': return <Baby className="w-5 h-5 text-amber-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-amber-400" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="academics" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 inline-block mb-3">
            Academic Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Curriculum <span className="text-gradient">Explorer</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            From early childhood exploration to board exam mastery, discover our progressive educational pathway designed for maximum student achievement.
          </p>
        </div>

        {/* Level Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {academicsData.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedLevel(item.id)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                selectedLevel === item.id
                  ? 'glass-panel border-emerald-500/60 bg-emerald-950/40 shadow-xl ring-1 ring-emerald-500/30'
                  : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="p-2 rounded-lg bg-slate-800/80">
                  {getIcon(item.icon)}
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-400">
                  {item.ageGroup}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mt-1">{item.title}</h3>
            </button>
          ))}
        </div>

        {/* Active Content Showcase Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 grid lg:grid-cols-12 gap-8 items-center shadow-2xl">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-md border border-emerald-800/60">
              <span>{activeData.ageGroup}</span>
            </div>

            <h3 className="text-3xl font-extrabold text-white">{activeData.title}</h3>

            <p className="text-slate-300 leading-relaxed text-base">
              {activeData.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Key Pedagogical Highlights:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {activeData.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button 
                onClick={() => alert(`Downloading ${activeData.title} Detailed Curriculum Brochure PDF`)}
                className="px-5 py-2.5 rounded-xl font-heading font-semibold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition flex items-center space-x-2 shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Syllabus PDF</span>
              </button>

              <a
                href="#admissions"
                className="px-5 py-2.5 rounded-xl font-heading font-semibold text-xs text-white glass-panel hover:bg-slate-800 transition flex items-center space-x-1.5 border border-slate-700"
              >
                <span>Admission Criteria</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>

          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
                alt={activeData.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-xl border border-white/10">
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Curriculum Standard</p>
                <h4 className="text-sm font-bold text-white mt-0.5">Central Board of Secondary Education (CBSE)</h4>
                <p className="text-[11px] text-slate-300 mt-1">Integrated with Experiential Learning & AI Modules</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
