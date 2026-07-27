import React from 'react';
import { Shield, Sparkles, Users, Award, Music, Dumbbell } from 'lucide-react';

export default function StudentLife() {
  const houses = [
    { name: "Ignis House", color: "from-red-500 to-amber-600", symbol: "🔥", motto: "Courage & Passion" },
    { name: "Aqua House", color: "from-blue-500 to-cyan-600", symbol: "💧", motto: "Wisdom & Adaptability" },
    { name: "Terra House", color: "from-emerald-500 to-teal-700", symbol: "🌱", motto: "Integrity & Resilience" },
    { name: "Ventus House", color: "from-amber-400 to-orange-500", symbol: "⚡", motto: "Innovation & Speed" }
  ];

  const clubs = [
    { icon: <Music className="w-5 h-5 text-amber-400" />, title: "Symphony & Theater Academy", desc: "Indian classical music, Western band, choir, and dramatic arts production." },
    { icon: <Dumbbell className="w-5 h-5 text-emerald-400" />, title: "Elite Sports Academies", desc: "Professional coaching in football, basketball, lawn tennis, and swimming." },
    { icon: <Users className="w-5 h-5 text-blue-400" />, title: "Model United Nations (MUN)", desc: "Debating global diplomacy, international law, and resolution writing." },
    { icon: <Award className="w-5 h-5 text-amber-400" />, title: "Young Inventors & AI Club", desc: "Coding, app development, robotics competitions, and patent workshops." }
  ];

  return (
    <section id="student-life" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 inline-block mb-3">
            Beyond Academics
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Vibrant <span className="text-gradient">Student Life</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Developing leadership, character, and lifelong passions through our House system and co-curricular academies.
          </p>
        </div>

        {/* Four House System */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            The Four Kalyani House System
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {houses.map((h, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden group hover:border-emerald-500/50 transition duration-300"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${h.color} flex items-center justify-center text-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                  {h.symbol}
                </div>
                <h4 className="text-lg font-extrabold text-white">{h.name}</h4>
                <p className="text-xs text-amber-400 font-semibold mt-1 uppercase tracking-wider">{h.motto}</p>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Fostering healthy competition, esprit de corps, and student leadership across inter-house tournaments.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {clubs.map((club, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-slate-800 flex items-start space-x-4 hover:border-emerald-500/50 transition duration-300"
            >
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                {club.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{club.title}</h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{club.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
