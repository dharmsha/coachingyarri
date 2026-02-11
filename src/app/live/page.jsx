'use client'

import { useState } from 'react'
import { FaCircle, FaUserFriends, FaClock, FaVideo, FaChalkboardTeacher, FaArrowRight, FaCalendarAlt } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function LivePage() {
  const [filter, setFilter] = useState('All')

  const liveClasses = [
    {
      id: 1,
      title: 'Rotational Motion: Part 02 (Advanced)',
      teacher: 'Niraj Kumar',
      subject: 'Physics',
      status: 'LIVE',
      viewers: '1.2k',
      startTime: 'Ongoing',
      link: 'https://www.classdoor.in/live/1'
    },
    {
      id: 2,
      title: 'Chemical Bonding & Geometry',
      teacher: 'Dharm Kumar',
      subject: 'Chemistry',
      status: 'LIVE',
      viewers: '850',
      startTime: 'Ongoing',
      link: 'https://www.classdoor.in/live/2'
    },
    {
      id: 3,
      title: 'Calculus: Integration by Parts',
      teacher: 'Rahul Gupta',
      subject: 'Mathematics',
      status: 'UPCOMING',
      viewers: '0',
      startTime: '05:00 PM Today',
      link: 'https://www.classdoor.in/live/3'
    },
    {
      id: 4,
      title: 'Human Reproduction: NCERT Decode',
      teacher: 'Sunil Chhetri',
      subject: 'Biology',
      status: 'UPCOMING',
      viewers: '0',
      startTime: '07:30 PM Today',
      link: 'https://www.classdoor.in/live/4'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* --- LIVE HEADER --- */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-600/20 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-red-600 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 animate-pulse"
          >
            <FaCircle size={8} /> Live Classroom
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Dont Just Learn, <span className="text-blue-400">Interact.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Attend live interactive sessions with Indias top mentors and get your doubts cleared instantly.
          </p>
        </div>
      </section>

      {/* --- LIVE NOW SECTION --- */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-10 border-l-4 border-red-600 pl-6">
          <h2 className="text-3xl font-black uppercase tracking-tight">Active Now</h2>
          <span className="bg-red-600/10 text-red-500 text-xs font-black px-3 py-1 rounded-lg">2 CLASSES</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {liveClasses.filter(c => c.status === 'LIVE').map((item) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={item.id}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 relative group"
            >
              <div className="absolute top-6 right-8 flex items-center gap-2 text-red-500 font-black text-xs">
                <FaUserFriends /> {item.viewers} WATCHING
              </div>
              
              <div className="mb-6">
                <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em]">{item.subject}</span>
                <h3 className="text-2xl md:text-3xl font-black mt-2 leading-tight group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center">
                  <FaChalkboardTeacher className="text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Master Mentor</p>
                  <p className="text-lg font-bold">{item.teacher}</p>
                </div>
              </div>

              <a 
                href={item.link} 
                className="w-full bg-blue-600 hover:bg-white hover:text-blue-900 text-white py-5 rounded-2xl font-black text-center flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/20"
              >
                <FaVideo /> JOIN CLASS NOW <FaArrowRight />
              </a>
            </motion.div>
          ))}
        </div>

        {/* --- UPCOMING SECTION --- */}
        <div className="flex items-center gap-4 mb-10 border-l-4 border-blue-600 pl-6">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-300">Scheduled Sessions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveClasses.filter(c => c.status === 'UPCOMING').map((item) => (
            <div key={item.id} className="bg-white/5 border border-white/5 p-6 rounded-[2rem] hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{item.subject}</span>
                <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black">
                  <FaClock /> {item.startTime}
                </div>
              </div>
              <h4 className="text-lg font-black mb-6 leading-tight text-slate-100">{item.title}</h4>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                   <p className="text-xs font-bold text-slate-400">{item.teacher}</p>
                </div>
                <button className="text-blue-400 font-black text-xs flex items-center gap-1 hover:text-white transition-colors">
                  REMIND ME <FaCalendarAlt size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CLASS DOOR FOOTER --- */}
      <section className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-4">Experience Zero-Lag Learning</h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto opacity-80">
              All our live classes are powered by Class Doors ultra-low latency streaming technology.
            </p>
            <button className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-black shadow-2xl hover:bg-slate-900 hover:text-white transition-all">
              Go to Dashboard
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}