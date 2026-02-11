'use client'

import { useState, useMemo } from 'react'
import { FaStar, FaYoutube, FaSearch, FaFilter, FaCheckCircle, FaBookOpen } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function TeachersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [subjectFilter, setSubjectFilter] = useState('All')

  // --- DATA DEFINE KAR DIYA HAI (No more ReferenceError) ---
  const teachers = [
    { id: 1, name: 'Niraj Kumar', subject: 'Physics', exp: '12+ Yrs', bio: 'Expert in Mechanics & Quantum Physics.', rating: 4.9, students: '15k+', ex: 'Ex-Aakash', image: 'https://i.pravatar.cc/150?u=niraj' },
    { id: 2, name: 'Rahul Gupta', subject: 'Mathematics', exp: '10+ Yrs', bio: 'Specialist in Calculus & Algebra.', rating: 4.8, students: '12k+', ex: 'IIT Kanpur Grad', image: 'https://i.pravatar.cc/150?u=rahul' },
    { id: 3, name: 'Dharm Singh', subject: 'Chemistry', exp: '15+ Yrs', bio: 'Organic Chemistry specialist for NEET.', rating: 4.9, students: '20k+', ex: 'Senior Faculty', image: 'https://i.pravatar.cc/150?u=dharm' },
    { id: 4, name: 'Sandeep Maheshwari', subject: 'Biology', exp: '8+ Yrs', bio: 'Botany & Zoology expert.', rating: 4.7, students: '8k+', ex: 'AIIMS Consultant', image: 'https://i.pravatar.cc/150?u=sandeep' },
    { id: 5, name: 'Anjali Sharma', subject: 'English', exp: '7+ Yrs', bio: 'Focus on Grammar & Communication.', rating: 4.6, students: '5k+', ex: 'Global Trainer', image: 'https://i.pravatar.cc/150?u=anjali' },
    { id: 6, name: 'Pankaj Sir', subject: 'Physics', exp: '11+ Yrs', bio: 'Physics made easy with live examples.', rating: 4.9, students: '30k+', ex: 'Physics Wallah Expert', image: 'https://i.pravatar.cc/150?u=pankaj' },
    { id: 7, name: 'Amit Verma', subject: 'Mathematics', exp: '9+ Yrs', bio: 'Mental Math & Trigonometry King.', rating: 4.8, students: '10k+', ex: 'NIT Trichy Alumni', image: 'https://i.pravatar.cc/150?u=amit' },
    { id: 8, name: 'Surbhi Gupta', subject: 'History', exp: '14+ Yrs', bio: 'Expert in Modern & World History.', rating: 4.5, students: '4k+', ex: 'UPSC Faculty', image: 'https://i.pravatar.cc/150?u=surbhi' },
    { id: 9, name: 'Vikas Tiwari', subject: 'Polity', exp: '20+ Yrs', bio: 'UPSC Hindi Medium Expert.', rating: 5.0, students: '1M+', ex: 'Drishti IAS Founder', image: 'https://i.pravatar.cc/150?u=vikas' },
    { id: 10, name: 'Megha Singh', subject: 'Chemistry', exp: '6+ Yrs', bio: 'Inorganic Chemistry and Periodics.', rating: 4.7, students: '3k+', ex: 'Ex-Vibrant', image: 'https://i.pravatar.cc/150?u=megha' },
    { id: 11, name: 'Rajesh Khanna', subject: 'Physics', exp: '13+ Yrs', bio: 'Thermo-dynamics Expert.', rating: 4.6, students: '7k+', ex: 'BTech IITD', image: 'https://i.pravatar.cc/150?u=rajesh' },
    { id: 12, name: 'Pooja Reddy', subject: 'Geography', exp: '9+ Yrs', bio: 'Physical & Human Geography expert.', rating: 4.8, students: '9k+', ex: 'IAS Coach', image: 'https://i.pravatar.cc/150?u=pooja' },
    { id: 13, name: 'Sunil Chhetri', subject: 'Biology', exp: '10+ Yrs', bio: 'Human Physiology specialist.', rating: 4.9, students: '14k+', ex: 'Med School Mentor', image: 'https://i.pravatar.cc/150?u=sunil' },
    { id: 14, name: 'Arjun Roy', subject: 'Reasoning', exp: '5+ Yrs', bio: 'Tricks for CAT/SSC exams.', rating: 4.7, students: '11k+', ex: 'Banking Expert', image: 'https://i.pravatar.cc/150?u=arjun' },
    { id: 15, name: 'Kavita Iyer', subject: 'Economics', exp: '11+ Yrs', bio: 'Macro & Micro Economics simplified.', rating: 4.8, students: '6k+', ex: 'Delhi University', image: 'https://i.pravatar.cc/150?u=kavita' },
    { id: 16, name: 'Deepak Tasu', subject: 'Mathematics', exp: '8+ Yrs', bio: 'Coordinate Geometry specialist.', rating: 4.4, students: '4k+', ex: 'NIT Alumni', image: 'https://i.pravatar.cc/150?u=deepak' },
    { id: 17, name: 'Ishan Gange', subject: 'Physics', exp: '7+ Yrs', bio: 'Optics & Wave Motion expert.', rating: 4.5, students: '5k+', ex: 'Digital Educator', image: 'https://i.pravatar.cc/150?u=ishan' },
    { id: 18, name: 'Smriti Khabra', subject: 'Chemistry', exp: '10+ Yrs', bio: 'Chemical Bonding & Kinetics.', rating: 4.9, students: '18k+', ex: 'Ex-Byjus', image: 'https://i.pravatar.cc/150?u=smriti' },
    { id: 19, name: 'Siddharth Nigam', subject: 'Science', exp: '6+ Yrs', bio: 'Foundation specialist for class 9-10.', rating: 4.7, students: '9k+', ex: 'Certified Educator', image: 'https://i.pravatar.cc/150?u=sid' },
    { id: 20, name: 'Hardik Patel', subject: 'Mathematics', exp: '12+ Yrs', bio: 'Vector Algebra King.', rating: 4.8, students: '22k+', ex: 'Global Faculty', image: 'https://i.pravatar.cc/150?u=hardik' },
    { id: 21, name: 'Shubman Charu', subject: 'English', exp: '5+ Yrs', bio: 'Spoken English & IELTS coach.', rating: 4.6, students: '12k+', ex: 'Corporate Trainer', image: 'https://i.pravatar.cc/150?u=shubman' },
    { id: 22, name: 'Shankar Patel', subject: 'Biology', exp: '8+ Yrs', bio: 'Genetics & Evolution expert.', rating: 4.7, students: '6k+', ex: 'Research Scholar', image: 'https://i.pravatar.cc/150?u=siraj' },
    { id: 23, name: 'Ravindra Ojha', subject: 'SST', exp: '14+ Yrs', bio: 'All-rounder for Board exams.', rating: 4.9, students: '25k+', ex: 'Senior Master', image: 'https://i.pravatar.cc/150?u=jadeja' },
    { id: 24, name: 'Rahul Sain', subject: 'Computer', exp: '7+ Yrs', bio: 'Python & Java specialist.', rating: 4.5, students: '10k+', ex: 'Ex-Infosys Trainer', image: 'https://i.pravatar.cc/150?u=kl' },
    { id: 25, name: 'Rajesh Goga', subject: 'Physics', exp: '9+ Yrs', bio: '360° conceptual clarity in Physics.', rating: 4.9, students: '15k+', ex: 'BTech Gold Medalist', image: 'https://i.pravatar.cc/150?u=sky' },
    { id: 26, name: 'Rohit Sharma', subject: 'Mathematics', exp: '15+ Yrs', bio: 'Strategic problem solving in Maths.', rating: 4.8, students: '40k+', ex: 'Elite Mentor', image: 'https://i.pravatar.cc/150?u=rohit' },
    { id: 27, name: 'Namandhir', subject: 'Leadership', exp: '18+ Yrs', bio: 'Mindset & Success coach.', rating: 5.0, students: '100k+', ex: 'Global Icon', image: 'https://i.pravatar.cc/150?u=virat' },
    { id: 28, name: 'Rishabh Mallaha', subject: 'Accountancy', exp: '6+ Yrs', bio: 'Commerce & Finance expert.', rating: 4.4, students: '8k+', ex: 'CFA Trainer', image: 'https://i.pravatar.cc/150?u=pant' },
    { id: 29, name: 'Arjun Reddy', subject: 'Reasoning', exp: '10+ Yrs', bio: 'Accuracy & Speed specialist.', rating: 4.9, students: '14k+', ex: 'Aptitude King', image: 'https://i.pravatar.cc/150?u=bumrah' },
    { id: 30, name: 'Dhiraj Singh', subject: 'Strategic', exp: '25+ Yrs', bio: 'Decision making & Strategy mentor.', rating: 5.0, students: '500k+', ex: 'Legendary Mentor', image: 'https://i.pravatar.cc/150?u=msd' },
  ]

  const filteredTeachers = useMemo(() => {
    return teachers.filter(t => {
      const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            t.subject.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesSubject = subjectFilter === 'All' || t.subject === subjectFilter
      return matchesSearch && matchesSubject
    })
  }, [searchQuery, subjectFilter])

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 bg-[#0F172A] overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
              Premium Faculty
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Learn From <span className="text-blue-500">The Best.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Indias top mentors are now at your fingertips. Expert guidance for every subject.
            </p>

            {/* SEARCH & FILTER */}
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-3 bg-white p-2 rounded-[2.5rem] shadow-2xl">
              <div className="relative flex-grow">
                <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search by name or subject..." 
                  className="w-full pl-14 pr-6 py-5 rounded-[2rem] text-slate-900 font-bold outline-none"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select 
                className="bg-slate-50 px-8 py-5 rounded-[2rem] font-black text-[10px] uppercase outline-none text-slate-700"
                onChange={(e) => setSubjectFilter(e.target.value)}
              >
                {['All', 'Physics', 'Mathematics', 'Chemistry', 'Biology', 'English', 'SST', 'Polity'].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TEACHERS GRID --- */}
      <section className="container mx-auto px-4 py-20 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTeachers.map((t, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                key={t.id}
                className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 group hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover border-4 border-blue-50 group-hover:border-blue-500 transition-colors" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[8px] font-black px-3 py-1 rounded-full whitespace-nowrap">
                    {t.exp.toUpperCase()} EXP
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-lg font-black text-slate-900 mb-1">{t.name}</h3>
                  <p className="text-blue-600 font-black text-[9px] uppercase tracking-widest flex items-center justify-center gap-1">
                    <FaBookOpen /> {t.subject}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 flex justify-between items-center mb-6">
                  <div className="text-center">
                    <p className="text-[8px] font-black text-slate-400 uppercase">Students</p>
                    <p className="text-xs font-black text-slate-800">{t.students}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[8px] font-black text-slate-400 uppercase">Rating</p>
                    <p className="text-xs font-black text-yellow-500 flex items-center gap-1">
                      <FaStar /> {t.rating}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-slate-900 text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all">
                    View Profile
                  </button>
                  <button className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all">
                    <FaYoutube />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* --- HIRING BANNER --- */}
      <section className="container mx-auto px-4 pb-20">
         <div className="bg-blue-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl font-black mb-4">Want to Join CoachingYaari?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">We are always looking for legendary educators to join our team.</p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl hover:bg-slate-900 hover:text-white transition-all">
              Apply as Faculty
            </button>
         </div>
      </section>
    </div>
  )
}