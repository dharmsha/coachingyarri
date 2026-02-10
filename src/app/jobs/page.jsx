'use client'

import { useState } from 'react'
import { FaMapMarkerAlt, FaBriefcase, FaDoorOpen, FaArrowRight, FaWallet, FaShieldAlt } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState('All')

  const jobs = [
    { id: 1, role: 'Physics Faculty (JEE)', location: 'Patna, Bihar', salary: '₹10L - ₹18L PA', type: 'Full Time', category: 'Faculty', link: 'https://classdoor.com/apply' },
    { id: 2, role: 'Biology Mentor (NEET)', location: 'Madhepura, Bihar', salary: '₹6L - ₹12L PA', type: 'Full Time', category: 'Faculty', link: 'https://classdoor.com/apply' },
    { id: 3, role: 'Academic Counselor', location: 'Purnea, Bihar', salary: '₹3L - ₹5L PA', type: 'Full Time', category: 'Management', link: 'https://classdoor.com/apply' },
    { id: 4, role: 'Center Head', location: 'Delhi, NCR', salary: '₹15L - ₹25L PA', type: 'Full Time', category: 'Management', link: 'https://classdoor.com/apply' },
    { id: 5, role: 'Chemistry Specialist', location: 'Jaipur, RJ', salary: '₹8L - ₹14L PA', type: 'Full Time', category: 'Faculty', link: 'https://classdoor.com/apply' },
    { id: 6, role: 'Branch Administrator', location: 'Gaya, Bihar', salary: '₹4L - ₹7L PA', type: 'Full Time', category: 'Management', link: 'https://classdoor.com/apply' }
  ]

  const filteredJobs = activeTab === 'All' ? jobs : jobs.filter(j => j.category === activeTab)

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* --- ELITE TOP HEADER --- */}
      <div className="bg-[#0F172A] pt-32 pb-24 px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 uppercase">
            Career <span className="text-blue-500">Portal</span>
          </h1>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 font-bold tracking-widest text-sm uppercase">Official CoachingYaari Openings</p>
        </motion.div>
      </div>

      {/* --- FILTER INTERFACE --- */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-white p-2 rounded-2xl shadow-2xl inline-flex gap-2 border border-slate-100 mx-auto w-full max-w-md flex-wrap justify-center">
          {['All', 'Faculty', 'Management'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl font-black text-sm transition-all
                ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'bg-transparent text-slate-500 hover:bg-slate-50'}`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* --- JOB GRID --- */}
      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid gap-4">
          <AnimatePresence mode='popLayout'>
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 flex flex-col md:flex-row items-center gap-8 hover:border-blue-500 hover:shadow-2xl transition-all duration-300"
              >
                {/* Status Icon */}
                <div className="hidden md:flex w-16 h-16 bg-slate-50 rounded-2xl items-center justify-center text-blue-600 shrink-0">
                  <FaBriefcase size={28} />
                </div>

                {/* Job Info */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-2">
                    <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-md uppercase tracking-wider border border-blue-100">
                      {job.category}
                    </span>
                    <span className="text-[10px] font-black bg-emerald-50 text-emerald-600 px-3 py-1 rounded-md uppercase tracking-wider border border-emerald-100 flex items-center gap-1">
                      <FaShieldAlt size={8}/> Verified
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{job.role}</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-6">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase">
                      <FaMapMarkerAlt className="text-blue-500" /> {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase">
                      <FaWallet className="text-blue-500" /> {job.salary}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="w-full md:w-auto">
                  <a
                    href={job.link}
                    target="_blank"
                    className="flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-sm group hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
                  >
                    <FaDoorOpen className="text-blue-400 group-hover:text-white" />
                    APPLY VIA CLASS DOOR
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="mt-24 text-center">
          <div className="p-12 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
             <h4 className="text-xl font-black text-slate-900 mb-2">Internal Hiring Only</h4>
             <p className="text-slate-500 font-medium">All applications are strictly processed via Class Door portal for CoachingYaari branches.</p>
          </div>
        </div>
      </div>
    </div>
  )
}