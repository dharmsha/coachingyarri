'use client'

import { useState } from 'react'
import { FaGraduationCap, FaBook, FaClock, FaClipboardList, FaArrowRight, FaDownload, FaStar, FaUsers, FaLaptopCode, FaMobileAlt, FaChartLine, FaDatabase, FaRobot, FaPalette, FaBullhorn, FaHandshake, FaRocket, FaUsers as FaUsersIcon, FaPhone, FaEnvelope, FaLinkedin, FaBriefcase } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('Development')

  const courseData = [
    // WEB DEVELOPMENT COURSES
    { id: 1, title: 'Full Stack Web Development', category: 'Development', level: 'Beginner to Advanced', duration: '6 Months', lectures: '400+', price: '₹15,999', rating: 4.9, students: '5k+', icon: <FaLaptopCode /> },
    { id: 2, title: 'Frontend Development (React + Next.js)', category: 'Development', level: 'Intermediate', duration: '4 Months', lectures: '250+', price: '₹12,999', rating: 4.8, students: '3.5k+', icon: <FaLaptopCode /> },
    { id: 3, title: 'Backend Development (Node.js + Python)', category: 'Development', level: 'Intermediate', duration: '5 Months', lectures: '300+', price: '₹14,999', rating: 4.8, students: '2.8k+', icon: <FaLaptopCode /> },

    // APP DEVELOPMENT COURSES
    { id: 4, title: 'Android App Development (Kotlin)', category: 'App Development', level: 'Beginner to Advanced', duration: '5 Months', lectures: '280+', price: '₹13,999', rating: 4.7, students: '3.2k+', icon: <FaMobileAlt /> },
    { id: 5, title: 'iOS App Development (Swift)', category: 'App Development', level: 'Beginner to Advanced', duration: '5 Months', lectures: '260+', price: '₹14,999', rating: 4.8, students: '2.5k+', icon: <FaMobileAlt /> },
    { id: 6, title: 'Flutter (Cross Platform)', category: 'App Development', level: 'Intermediate', duration: '4 Months', lectures: '220+', price: '₹11,999', rating: 4.7, students: '4k+', icon: <FaMobileAlt /> },
    { id: 7, title: 'React Native Mobile Development', category: 'App Development', level: 'Intermediate', duration: '4 Months', lectures: '240+', price: '₹12,999', rating: 4.8, students: '3k+', icon: <FaMobileAlt /> },

    // SALES & MARKETING COURSES
    { id: 8, title: 'Digital Marketing Mastery', category: 'Sales & Marketing', level: 'Beginner to Advanced', duration: '4 Months', lectures: '200+', price: '₹9,999', rating: 4.6, students: '8k+', icon: <FaChartLine /> },
    { id: 9, title: 'Sales Funnel & CRM Management', category: 'Sales & Marketing', level: 'Intermediate', duration: '3 Months', lectures: '150+', price: '₹7,999', rating: 4.5, students: '4.5k+', icon: <FaChartLine /> },
    { id: 10, title: 'Social Media Marketing (SMM)', category: 'Sales & Marketing', level: 'Beginner', duration: '3 Months', lectures: '180+', price: '₹6,999', rating: 4.6, students: '6k+', icon: <FaChartLine /> },
    { id: 11, title: 'SEO & Content Marketing', category: 'Sales & Marketing', level: 'Beginner', duration: '3 Months', lectures: '160+', price: '₹7,499', rating: 4.5, students: '5.2k+', icon: <FaChartLine /> },

    // SALES DEVELOPMENT COURSES (NEW)
    { id: 12, title: 'Sales Development Representative (SDR)', category: 'Sales Development', level: 'Beginner', duration: '3 Months', lectures: '120+', price: '₹5,999', rating: 4.6, students: '3k+', icon: <FaBullhorn /> },
    { id: 13, title: 'B2B Sales & Lead Generation', category: 'Sales Development', level: 'Intermediate', duration: '4 Months', lectures: '160+', price: '₹8,999', rating: 4.7, students: '2.5k+', icon: <FaHandshake /> },
    { id: 14, title: 'Inside Sales & Cold Calling', category: 'Sales Development', level: 'Beginner', duration: '2 Months', lectures: '80+', price: '₹4,499', rating: 4.5, students: '4k+', icon: <FaPhone /> },
    { id: 15, title: 'Sales Automation & CRM Tools', category: 'Sales Development', level: 'Intermediate', duration: '3 Months', lectures: '100+', price: '₹6,999', rating: 4.6, students: '2.8k+', icon: <FaDatabase /> },

    // BUSINESS DEVELOPMENT COURSES (NEW)
    { id: 16, title: 'Business Development Fundamentals', category: 'Business Development', level: 'Beginner', duration: '4 Months', lectures: '180+', price: '₹9,999', rating: 4.7, students: '3.5k+', icon: <FaBriefcase /> },
    { id: 17, title: 'Strategic Partnerships & Alliances', category: 'Business Development', level: 'Advanced', duration: '5 Months', lectures: '200+', price: '₹12,999', rating: 4.8, students: '2k+', icon: <FaHandshake /> },
    { id: 18, title: 'Corporate Sales & Key Account Management', category: 'Business Development', level: 'Intermediate', duration: '4 Months', lectures: '150+', price: '₹11,999', rating: 4.7, students: '2.2k+', icon: <FaUsersIcon /> },
    { id: 19, title: 'International Business Development', category: 'Business Development', level: 'Advanced', duration: '6 Months', lectures: '220+', price: '₹15,999', rating: 4.8, students: '1.5k+', icon: <FaRocket /> },
    { id: 20, title: 'LinkedIn Sales Navigator Mastery', category: 'Business Development', level: 'Beginner', duration: '2 Months', lectures: '60+', price: '₹3,999', rating: 4.5, students: '5k+', icon: <FaLinkedin /> },

    // EXTRA COURSES
    { id: 21, title: 'Data Science & AI', category: 'Development', level: 'Advanced', duration: '7 Months', lectures: '500+', price: '₹24,999', rating: 4.9, students: '2k+', icon: <FaRobot /> },
    { id: 22, title: 'UI/UX Design', category: 'Development', level: 'Beginner', duration: '4 Months', lectures: '200+', price: '₹10,999', rating: 4.7, students: '3.8k+', icon: <FaPalette /> },
  ]

  const filtered = activeTab === 'All' ? courseData : courseData.filter(c => c.category === activeTab)

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Development': return <FaLaptopCode />;
      case 'App Development': return <FaMobileAlt />;
      case 'Sales & Marketing': return <FaChartLine />;
      case 'Sales Development': return <FaBullhorn />;
      case 'Business Development': return <FaBriefcase />;
      default: return <FaGraduationCap />;
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* --- ELITE HERO --- */}
      <section className="bg-gradient-to-r from-[#002B5B] to-[#004080] pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Skill <span className="text-blue-400">Development</span> Courses
          </motion.h1>
          <p className="text-blue-100 text-lg opacity-80 max-w-2xl mx-auto mb-12">
            Master Web Development, App Development, Sales, Marketing & Business Development. Get job-ready skills with industry experts.
          </p>

          {/* Quick Nav Filter - Updated with all categories */}
          <div className="inline-flex flex-wrap justify-center gap-3 bg-white/10 p-2 rounded-[2rem] backdrop-blur-md border border-white/20">
            {['Development', 'App Development', 'Sales & Marketing', 'Sales Development', 'Business Development'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-[1.5rem] font-black text-xs transition-all uppercase tracking-widest flex items-center gap-2
                  ${activeTab === tab ? 'bg-white text-blue-900 shadow-xl scale-105' : 'text-white hover:bg-white/10'}`}
              >
                {getCategoryIcon(tab)}
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- COURSES GRID --- */}
      <section className="container mx-auto px-4 mt-12">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Explore Our <span className="text-blue-600">Programs</span>
          </h2>
          <Link href="/brochure" className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
            <FaDownload /> Download Brochure
          </Link>
        </div>
        
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
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl">
                      {course.icon}
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
                      <FaClipboardList className="text-blue-400" /> {course.lectures}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                      <FaUsers className="text-blue-400" /> {course.students}
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

      {/* --- JOB READY PROGRAM BANNER --- */}
      <section className="container mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] p-6 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm">
                💼
              </div>
              <div>
                <h3 className="text-xl font-black">Job Ready Program</h3>
                <p className="text-orange-100 text-sm">Get hired with our placement assistance</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">100% Job Assistance</span>
                  <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">Live Projects</span>
                  <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">Interview Prep</span>
                </div>
              </div>
            </div>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-black text-sm hover:bg-orange-50 transition-all shadow-lg whitespace-nowrap">
              Register Now →
            </button>
          </div>
        </div>
      </section>

      {/* --- CRM ACCESS CARD --- */}
      <section className="container mx-auto px-4 mt-8">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-[2rem] p-5 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <FaDatabase size={22} />
              </div>
              <div>
                <h3 className="font-black text-lg">CRM Dashboard</h3>
                <p className="text-purple-100 text-sm">Track your learning progress & manage enrollments</p>
              </div>
            </div>
            <button className="bg-white text-purple-700 px-6 py-2 rounded-xl font-bold text-sm hover:bg-purple-50 transition-all whitespace-nowrap">
              Access CRM →
            </button>
          </div>
        </div>
      </section>

      {/* --- COUNSELING CTA --- */}
      <section className="container mx-auto px-4 mt-12">
        <div className="bg-white rounded-[3rem] p-8 flex flex-col md:flex-row items-center justify-between border border-blue-100 shadow-sm gap-6">
          <div className="flex gap-4 items-center flex-col md:flex-row text-center md:text-left">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl shadow-xl shadow-blue-200">
              ?
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900 mb-1">Need help choosing the right course?</h4>
              <p className="text-slate-500 font-medium text-sm">Talk to our career experts for free counseling.</p>
            </div>
          </div>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-black text-sm hover:bg-blue-600 transition-all shadow-xl whitespace-nowrap">
            Request Call Back
          </button>
        </div>
      </section>

      {/* --- BRAND FOOTER --- */}
      <div className="fixed bottom-4 left-4 z-50 bg-black/70 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] font-mono shadow-xl">
        <span>CoachingYaari © 2026</span>
      </div>
    </div>
  )
}