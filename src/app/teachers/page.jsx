'use client'

import { useState, useMemo } from 'react'
import { FaGraduationCap, FaStar, FaYoutube, FaLinkedin, FaSearch, FaUserCheck, FaBookOpen } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function TeachersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [subjectFilter, setSubjectFilter] = useState('All')

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
    // Adding more Indian names to reach 30...
    { id: 11, name: 'Rajesh Khanna', subject: 'Physics', exp: '13+ Yrs', bio: 'Thermo-dynamics Expert.', rating: 4.6, students: '7k+', ex: 'BTech IITD', image: 'https://i.pravatar.cc/150?u=rajesh' },
    { id: 12, name: 'Pooja Reddy', subject: 'Geography', exp: '9+ Yrs', bio: 'Physical & Human Geography expert.', rating: 4.8, students: '9k+', ex: 'IAS Coach', image: 'https://i.pravatar.cc/150?u=pooja' },
    { id: 13, name: 'Sunil Chhetri', subject: 'Biology', exp: '10+ Yrs', bio: 'Human Physiology specialist.', rating: 4.9, students: '14k+', ex: 'Med School Mentor', image: 'https://i.pravatar.cc/150?u=sunil' },
    { id: 14, name: 'Arjun Roy', subject: 'Logical Reasoning', exp: '5+ Yrs', bio: 'Tricks for CAT/SSC exams.', rating: 4.7, students: '11k+', ex: 'Banking Expert', image: 'https://i.pravatar.cc/150?u=arjun' },
    { id: 15, name: 'Kavita Iyer', subject: 'Economics', exp: '11+ Yrs', bio: 'Macro & Micro Economics simplified.', rating: 4.8, students: '6k+', ex: 'Delhi University', image: 'https://i.pravatar.cc/150?u=kavita' },
    { id: 16, name: 'Deepak Tasu', subject: 'Mathematics', exp: '8+ Yrs', bio: 'Coordinate Geometry specialist.', rating: 4.4, students: '4k+', ex: 'NIT Alumni', image: 'https://i.pravatar.cc/150?u=deepak' },
    { id: 17, name: 'Ishan gange', subject: 'Physics', exp: '7+ Yrs', bio: 'Optics & Wave Motion expert.', rating: 4.5, students: '5k+', ex: 'Digital Educator', image: 'https://i.pravatar.cc/150?u=ishan' },
    { id: 18, name: 'Smriti khabra', subject: 'Chemistry', exp: '10+ Yrs', bio: 'Chemical Bonding & Kinetics.', rating: 4.9, students: '18k+', ex: 'Ex-Byjus', image: 'https://i.pravatar.cc/150?u=smriti' },
    { id: 19, name: 'Siddharth Nigam', subject: 'Science', exp: '6+ Yrs', bio: 'Foundation specialist for class 9-10.', rating: 4.7, students: '9k+', ex: 'Certified Educator', image: 'https://i.pravatar.cc/150?u=sid' },
    { id: 20, name: 'Hardik patel', subject: 'Mathematics', exp: '12+ Yrs', bio: 'Vector Algebra King.', rating: 4.8, students: '22k+', ex: 'Global Faculty', image: 'https://i.pravatar.cc/150?u=hardik' },
    { id: 21, name: 'Shubman charu', subject: 'English', exp: '5+ Yrs', bio: 'Spoken English & IELTS coach.', rating: 4.6, students: '12k+', ex: 'Corporate Trainer', image: 'https://i.pravatar.cc/150?u=shubman' },
    { id: 22, name: 'Shankar Patel', subject: 'Biology', exp: '8+ Yrs', bio: 'Genetics & Evolution expert.', rating: 4.7, students: '6k+', ex: 'Research Scholar', image: 'https://i.pravatar.cc/150?u=siraj' },
    { id: 23, name: 'Ravindra Ojha', subject: 'SST', exp: '14+ Yrs', bio: 'All-rounder for Board exams.', rating: 4.9, students: '25k+', ex: 'Senior Master', image: 'https://i.pravatar.cc/150?u=jadeja' },
    { id: 24, name: 'Rahul Sain', subject: 'Computer Science', exp: '7+ Yrs', bio: 'Python & Java specialist.', rating: 4.5, students: '10k+', ex: 'Ex-Infosys Trainer', image: 'https://i.pravatar.cc/150?u=kl' },
    { id: 25, name: 'Rajesh Goga', subject: 'Physics', exp: '9+ Yrs', bio: '360° conceptual clarity in Physics.', rating: 4.9, students: '15k+', ex: 'BTech Gold Medalist', image: 'https://i.pravatar.cc/150?u=sky' },
    { id: 26, name: 'Rohit Sharma', subject: 'Mathematics', exp: '15+ Yrs', bio: 'Strategic problem solving in Maths.', rating: 4.8, students: '40k+', ex: 'Elite Mentor', image: 'https://i.pravatar.cc/150?u=rohit' },
    { id: 27, name: 'Namandhir', subject: 'Leadership', exp: '18+ Yrs', bio: 'Mindset & Success coach.', rating: 5.0, students: '100k+', ex: 'Global Icon', image: 'https://i.pravatar.cc/150?u=virat' },
    { id: 28, name: 'Rishabh Mallaha', subject: 'Accountancy', exp: '6+ Yrs', bio: 'Commerce & Finance expert.', rating: 4.4, students: '8k+', ex: 'CFA Trainer', image: 'https://i.pravatar.cc/150?u=pant' },
    { id: 29, name: 'Arjun Reddy', subject: 'Analytical Reasoning', exp: '10+ Yrs', bio: 'Accuracy & Speed specialist.', rating: 4.9, students: '14k+', ex: 'Aptitude King', image: 'https://i.pravatar.cc/150?u=bumrah' },
    { id: 30, name: 'Dhiraj Singh', subject: 'Strategic Management', exp: '25+ Yrs', bio: 'Decision making & Strategy mentor.', rating: 5.0, students: '500k+', ex: 'Legendary Mentor', image: 'https://i.pravatar.cc/150?u=msd' },
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
    <div className="min-h-screen bg-[#f1f5f9]">
      {/* Header Section */}
      <section className="bg-white pt-32 pb-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{opacity:0}} animate={{opacity:1}} className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Meet Our <span className="text-blue-600">Expert Mentors</span>
          </motion.h1>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10">
            Learn from Indias most experienced educators who have mentored thousands of successful students at CoachingYaari.
          </p>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-grow">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by name or expertise..." 
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select 
              className="px-6 py-4 rounded-2xl border border-slate-200 font-bold text-slate-700 bg-white"
              onChange={(e) => setSubjectFilter(e.target.value)}
            >
              {['All', 'Physics', 'Mathematics', 'Chemistry', 'Biology', 'English', 'Polity'].map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredTeachers.map((t) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={t.id}
                className="bg-white rounded-[2.5rem] p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-blue-50 group-hover:border-blue-500 transition-colors duration-500">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {t.exp} EXPERIENCE
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{t.name}</h3>
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3 flex items-center justify-center gap-1">
                    <FaBookOpen /> {t.subject}
                  </p>
                  <div className="flex justify-center gap-1 text-yellow-400 mb-3 text-sm">
                    {[1,2,3,4,5].map(i => <FaStar key={i} />)}
                    <span className="text-slate-400 ml-1 font-bold">({t.rating})</span>
                  </div>
                  <p className="text-slate-500 text-sm line-clamp-2 px-2">{t.bio}</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 flex justify-between items-center mb-6">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Students</p>
                    <p className="text-sm font-black text-slate-800">{t.students}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Rank</p>
                    <p className="text-sm font-black text-green-600">{t.ex}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors">
                    View Profile
                  </button>
                  <button className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <FaYoutube />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-blue-600 rounded-[3rem] p-12 overflow-hidden relative">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-black text-white mb-2">Want to Join our Faculty?</h2>
              <p className="text-blue-100">We are always looking for passionate educators to join the CoachingYaari family.</p>
            </div>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black shadow-xl hover:bg-yellow-400 transition-colors">
              Apply as Teacher
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}