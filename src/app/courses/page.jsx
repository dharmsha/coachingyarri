'use client'

import { useState } from 'react'
import { FaGraduationCap, FaBook, FaClock, FaClipboardList, FaArrowRight, FaDownload, FaStar, FaUsers } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('Foundation')

  const courseData = [
    // FOUNDATION (8th - 10th)
    { id: 1, title: 'Class 8th: Junior Foundation', category: 'Foundation', level: 'Class 8th', duration: '1 Year', lectures: '250+', price: '₹4,999', rating: 4.8, students: '2k+' },
    { id: 2, title: 'Class 9th: Pre-Olympics Batch', category: 'Foundation', level: 'Class 9th', duration: '1 Year', lectures: '300+', price: '₹5,999', rating: 4.9, students: '3.5k+' },
    { id: 3, title: 'Class 10th: Board & NTSE Prep', category: 'Foundation', level: 'Class 10th', duration: '1 Year', lectures: '350+', price: '₹6,999', rating: 4.9, students: '5k+' },

    // MEDICAL & ENGINEERING (11th - 12th)
    { id: 4, title: 'JEE Main & Advanced: Lakshya', category: 'Target', level: 'Class 11/12/Drop', duration: '2 Years', lectures: '800+', price: '₹25,000', rating: 5.0, students: '12k+' },
    { id: 5, title: 'NEET Victory: Biology Focused', category: 'Target', level: 'Class 11/12/Drop', duration: '2 Years', lectures: '750+', price: '₹22,000', rating: 4.9, students: '15k+' },

    // GENERAL COMPETITION
    { id: 6, title: 'SSC CGL: Zero to Hero Batch', category: 'Competition', level: 'Graduate', duration: '6 Months', lectures: '400+', price: '₹3,499', rating: 4.7, students: '8k+' },
    { id: 7, title: 'Railway Special (NTPC/Group D)', category: 'Competition', level: '10th/12th', duration: '4 Months', lectures: '300+', price: '₹1,999', rating: 4.6, students: '10k+' },
    { id: 8, title: 'BPSC/UPSC: GS Foundation', category: 'Competition', level: 'Graduate', duration: '1.5 Years', lectures: '1000+', price: '₹45,000', rating: 4.9, students: '4k+' }
  ]

  const filtered = activeTab === 'All' ? courseData : courseData.filter(c => c.category === activeTab)

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* --- ELITE HERO --- */}
      <section className="bg-[#002B5B] pt-32 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Academic <span className="text-blue-400">Programs</span>
          </motion.h1>
          <p className="text-blue-100 text-lg opacity-80 max-w-2xl mx-auto mb-12">
            Quality education from Class 8th to General Competitive exams. Find your goal and start learning today.
          </p>

          {/* Quick Nav Filter */}
          <div className="inline-flex flex-wrap justify-center gap-3 bg-white/10 p-2 rounded-[2rem] backdrop-blur-md border border-white/20">
            {['Foundation', 'Target', 'Competition'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-[1.5rem] font-black text-xs transition-all uppercase tracking-widest
                  ${activeTab === tab ? 'bg-white text-blue-900 shadow-xl scale-105' : 'text-white hover:bg-white/10'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- COURSES GRID --- */}
      <section className="container mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode='popLayout'>
            {filtered.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                key={course.id}
                className="bg-white rounded-[2.5rem] p-1 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group"
              >
                <div className="bg-white rounded-[2.3rem] p-8 h-full flex flex-col">
                  {/* Icon & Label */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                      <FaGraduationCap size={28} />
                    </div>
                    <span className="text-[10px] font-black bg-slate-900 text-white px-3 py-1 rounded-full uppercase tracking-tighter">
                      {course.level}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {course.title}
                  </h3>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                      <FaClock className="text-blue-400" /> {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                      <FaClipboardList className="text-blue-400" /> {course.lectures} Lectures
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                      <FaUsers className="text-blue-400" /> {course.students} Students
                    </div>
                    <div className="flex items-center gap-2 text-yellow-500 text-sm font-bold">
                      <FaStar /> {course.rating}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Course Fee</p>
                        <p className="text-3xl font-black text-slate-900">{course.price}</p>
                      </div>
                      <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:text-blue-600 hover:bg-blue-50 transition-all">
                        <FaDownload />
                      </button>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-slate-900 text-white py-5 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-100">
                      Enroll Now <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* --- COUNSELING CTA --- */}
      <section className="container mx-auto px-4 mt-20">
        <div className="bg-white rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between border border-blue-100 shadow-sm gap-8">
          <div className="flex gap-6 items-center flex-col md:flex-row text-center md:text-left">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl shadow-xl shadow-blue-200">
              ?
            </div>
            <div>
              <h4 className="text-2xl font-black text-slate-900 mb-1">Confused about which course to pick?</h4>
              <p className="text-slate-500 font-medium">Talk to our career experts for free counseling.</p>
            </div>
          </div>
          <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black whitespace-nowrap hover:bg-blue-600 transition-all shadow-xl">
            Request Call Back
          </button>
        </div>
      </section>
    </div>
  )
}