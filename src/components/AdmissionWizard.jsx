import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Calculator, FileText, Send, User, Mail, Phone, Calendar, School } from 'lucide-react';
import { admissionSteps } from '../data/schoolData';

export default function AdmissionWizard() {
  const [activeTab, setActiveTab] = useState('process');
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: 'Grade 1',
    academicYear: '2026-2027',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Fee Estimator State
  const [estimatedGrade, setEstimatedGrade] = useState('Primary (Grades 1-5)');

  const feeStructures = {
    'Pre-Primary (Nursery - KG)': { tuition: '₹1,20,000', development: '₹15,000', labActivity: '₹10,000', total: '₹1,45,000' },
    'Primary (Grades 1-5)': { tuition: '₹1,45,000', development: '₹20,000', labActivity: '₹15,000', total: '₹1,80,000' },
    'Middle (Grades 6-8)': { tuition: '₹1,65,000', development: '₹25,000', labActivity: '₹20,000', total: '₹2,10,000' },
    'Secondary (Grades 9-10)': { tuition: '₹1,85,000', development: '₹30,000', labActivity: '₹25,000', total: '₹2,40,000' },
    'Sr. Secondary (Grades 11-12)': { tuition: '₹2,05,000', development: '₹35,000', labActivity: '₹30,000', total: '₹2,70,000' },
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.email || !formData.phone) {
      alert("Please fill in required student and contact details.");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <section id="admissions" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60 inline-block mb-3">
            Admissions Open 2026-27
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Join The <span className="text-gradient">Kalyani Family</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Transparent, streamlined admission process designed to help you make the best decision for your child's future.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="glass-panel p-1.5 rounded-2xl border border-slate-800 flex space-x-2">
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
                activeTab === 'process'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>4-Step Admission Process</span>
            </button>
            
            <button
              onClick={() => setActiveTab('apply')}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
                activeTab === 'apply'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>Online Application Form</span>
            </button>

            <button
              onClick={() => setActiveTab('fees')}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
                activeTab === 'fees'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Fee Structure Estimator</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: Process */}
        {activeTab === 'process' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionSteps.map((s) => (
                <div
                  key={s.step}
                  className="glass-panel p-6 rounded-2xl border border-slate-800 relative group hover:border-emerald-500/50 transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-4xl font-extrabold font-heading text-gradient-emerald">
                      {s.step}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-3">{s.title}</h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center text-xs text-emerald-400 font-semibold">
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 text-amber-400" />
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-8 rounded-3xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white">Ready to take the first step?</h3>
                <p className="text-xs text-slate-300 mt-1">Fill out the quick online inquiry form to schedule a personal campus interaction.</p>
              </div>
              <button
                onClick={() => setActiveTab('apply')}
                className="px-6 py-3 rounded-xl font-heading font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 transition shadow-md shrink-0"
              >
                Start Online Application
              </button>
            </div>
          </div>
        )}

        {/* Tab Content 2: Application Form */}
        {activeTab === 'apply' && (
          <div className="max-w-3xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl animate-in fade-in duration-300">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-950 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">Inquiry Received Successfully!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for your interest in The Kalyani School. Our Admissions Desk will contact you within 24 hours to confirm your interaction slot.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-white hover:bg-slate-700 transition"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-extrabold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
                  <FileText className="text-emerald-400 w-6 h-6" />
                  Student Admission Inquiry Form
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Student Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Aarav Sharma"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Parent / Guardian Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="parent@example.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Mobile Phone Number *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Applying for Grade</label>
                    <div className="relative">
                      <School className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option>Nursery / Junior KG</option>
                        <option>Senior KG</option>
                        <option>Grade 1 to 5</option>
                        <option>Grade 6 to 8</option>
                        <option>Grade 9 & 10</option>
                        <option>Grade 11 & 12 (Science/Commerce/Humanities)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Academic Session</label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                      <select
                        name="academicYear"
                        value={formData.academicYear}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option>2026-2027 (Current Admissions)</option>
                        <option>2027-2028 (Advance Registration)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Additional Notes / Queries</label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Specify previous school, preferred interaction dates, or transport inquiry..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 transition shadow-lg"
                >
                  Submit Admission Inquiry
                </button>
              </form>
            )}
          </div>
        )}

        {/* Tab Content 3: Fee Estimator */}
        {activeTab === 'fees' && (
          <div className="max-w-3xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl animate-in fade-in duration-300">
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2 border-b border-slate-800 pb-4 mb-6">
              <Calculator className="text-emerald-400 w-6 h-6" />
              Interactive Fee Structure Estimator (Annual)
            </h3>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-300 mb-2">Select Grade Level:</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.keys(feeStructures).map((g) => (
                  <button
                    key={g}
                    onClick={() => setEstimatedGrade(g)}
                    className={`p-3 rounded-xl text-xs font-semibold text-left border transition ${
                      estimatedGrade === g
                        ? 'bg-emerald-600 text-white border-emerald-400'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Fee Breakdown Display */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">
                Estimated Breakdown for {estimatedGrade}
              </h4>
              <div className="flex justify-between py-2 border-b border-slate-800 text-xs">
                <span className="text-slate-400">Annual Tuition Fee</span>
                <span className="font-semibold text-white">{feeStructures[estimatedGrade].tuition}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-xs">
                <span className="text-slate-400">Infrastructure & Development</span>
                <span className="font-semibold text-white">{feeStructures[estimatedGrade].development}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-xs">
                <span className="text-slate-400">STEM, Sports & Digital Resources</span>
                <span className="font-semibold text-white">{feeStructures[estimatedGrade].labActivity}</span>
              </div>
              <div className="flex justify-between py-3 pt-4 border-t-2 border-emerald-500 text-sm">
                <span className="font-bold text-white">Total Annual Fee</span>
                <span className="font-extrabold text-amber-400 text-base">{feeStructures[estimatedGrade].total}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 mt-4 italic">
              * Note: Transport and optional specialized sports coaching are charged separately. Flexible quarterly payment plans available upon request.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
