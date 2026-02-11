'use client'

import { useState } from 'react'
import { FaMapMarkerAlt, FaBriefcase, FaDoorOpen, FaArrowRight, FaWallet, FaShieldAlt, FaChartLine, FaLightbulb, FaUserTie } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState('All')

  const jobs = [
    { id: 1, role: 'Senior Physics Faculty (JEE)', location: 'Patna, Bihar', salary: '₹10L - ₹18L PA', type: 'Full Time', category: 'Faculty', link: 'https://www.classdoor.in/' },
    { id: 2, role: 'Biology Mentor (NEET)', location: 'Madhepura, Bihar', salary: '₹6L - ₹12L PA', type: 'Full Time', category: 'Faculty', link: 'https://www.classdoor.in/' },
    { id: 3, role: 'Academic Counselor', location: 'Purnea, Bihar', salary: '₹3L - ₹5L PA', type: 'Full Time', category: 'Management', link: 'https://www.classdoor.in/' },
    { id: 4, role: 'Regional Center Head', location: 'Delhi, NCR', salary: '₹15L - ₹25L PA', type: 'Full Time', category: 'Management', link: 'https://www.classdoor.in/' },
    { id: 5, role: 'Chemistry Specialist', location: 'Jaipur, RJ', salary: '₹8L - ₹14L PA', type: 'Full Time', category: 'Faculty', link: 'https://www.classdoor.in/' },
    { id: 6, role: 'Branch Administrator', location: 'Gaya, Bihar', salary: '₹4L - ₹7L PA', type: 'Full Time', category: 'Management', link: 'https://www.classdoor.in/' }
  ]

  const filteredJobs = activeTab === 'All' ? jobs : jobs.filter(j => j.category === activeTab)

  return (
    <div className="min-h-screen bg-[#FDFEFF] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700">
      
      {/* --- ELITE HERO SECTION --- */}
      <section className="relative pt-32 pb-40 bg-[#0A1628] overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Official Hiring Portal
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">CoachingYaari</span> <br /> 
              Legacy.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              We are building Indias most student-centric educational ecosystem. 
              Find your place in our growing family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- DASHBOARD WRAPPER --- */}
      <div className="container mx-auto px-4 -mt-24 relative z-20">
        
        {/* STATS OVERLAY */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Open Positions', val: '45+', icon: <FaBriefcase /> },
            { label: 'Cities', val: '50+', icon: <FaMapMarkerAlt /> },
            { label: 'Faculties', val: '1200+', icon: <FaUserTie /> },
            { label: 'Growth Rate', val: '200%', icon: <FaChartLine /> },
          ].map((s, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white/80 backdrop-blur-xl border border-white p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center">
              <div className="text-blue-600 text-xl mb-2 flex justify-center opacity-80">{s.icon}</div>
              <div className="text-2xl font-black text-slate-900">{s.val}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* --- FILTER CONTROL --- */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-100 p-1.5 rounded-[2rem] inline-flex items-center gap-1 shadow-inner">
            {['All', 'Faculty', 'Management'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-3.5 rounded-[1.8rem] text-sm font-black transition-all duration-300 tracking-tight
                  ${activeTab === tab ? 'bg-white text-blue-600 shadow-xl scale-105' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* --- JOBS FEED --- */}
        <div className="max-w-5xl mx-auto space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={job.id}
                className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,43,91,0.1)] transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.1em] border 
                        ${job.category === 'Faculty' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-indigo-50 text-indigo-600 border-indigo-100'}`}>
                        {job.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-black text-emerald-600 uppercase tracking-[0.1em] bg-emerald-50 px-4 py-1 rounded-full border border-emerald-100">
                        <FaShieldAlt size={10} /> Verified Listing
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                      {job.role}
                    </h3>

                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                      <div className="flex items-center gap-3 text-slate-500 font-bold text-sm uppercase">
                        <div className="p-2 bg-slate-50 rounded-lg"><FaMapMarkerAlt className="text-blue-500" /></div>
                        {job.location}
                      </div>
                      <div className="flex items-center gap-3 text-slate-500 font-bold text-sm uppercase">
                        <div className="p-2 bg-slate-50 rounded-lg"><FaWallet className="text-blue-500" /></div>
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-3 text-slate-500 font-bold text-sm uppercase">
                        <div className="p-2 bg-slate-50 rounded-lg"><FaBriefcase className="text-blue-500" /></div>
                        {job.type}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 pt-6 lg:pt-0 border-t lg:border-t-0 border-slate-50 flex flex-col gap-3">
                    <a
                      href={job.link}
                      target="_blank"
                      className="inline-flex items-center justify-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-2xl font-black text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 group/btn"
                    >
                      <FaDoorOpen /> APPLY ON CLASS DOOR <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- PARTNER FOOTER BANNER --- */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#0A1628] to-[#1E293B] rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
              <div>
                <h2 className="text-3xl font-black text-white mb-4">Official Hiring Partner</h2>
                <p className="text-slate-400 text-lg mb-8 max-w-md font-medium">
                  We have partnered with <span className="text-blue-400 font-bold italic">Class Door</span> to ensure a transparent and fast recruitment process. 
                </p>
                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 p-2 pr-6 rounded-2xl">
                  <div className="bg-white px-4 py-2 rounded-xl">
                    <span className="text-blue-900 font-black text-lg">Class Door</span>
                  </div>
                  <span className="text-white/60 text-xs font-black uppercase tracking-widest">Verified Portal</span>
                </div>
              </div>
              <a href="https://www.classdoor.in" className="bg-blue-500 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-blue-500/20 hover:bg-white hover:text-blue-900 transition-all">
                Visit Career Portal
              </a>
            </div>
          </div>
        </div>

        {/* --- FINAL BENEFITS --- */}
        <div className="mt-32 text-center pb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-16 uppercase tracking-tight">The <span className="text-blue-600">Perks</span> of Yaari</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: 'High Pay', d: 'Top industry compensation packages.', i: <FaWallet /> },
              { t: 'Fast Track', d: 'Get promoted twice a year based on performance.', i: <FaChartLine /> },
              { t: 'Innovation', d: 'Work with the latest EdTech tools.', i: <FaLightbulb /> }
            ].map((b, i) => (
              <div key={i} className="group">
                <div className="w-16 h-16 bg-slate-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 text-2xl shadow-inner">
                  {b.i}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-2">{b.t}</h4>
                <p className="text-slate-500 font-medium">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}