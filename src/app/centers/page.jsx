'use client'

import { useState, useMemo } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaSearch, FaArrowRight, FaGraduationCap, FaCheckCircle, FaUsers } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function CoachingYaariCenters() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedState, setSelectedState] = useState('All')

  // CoachingYaari Official Centers Data
  const centers = [
    // BIHAR DISTRICTS
    { id: 1, branch: 'CoachingYaari - Patna (H.O)', city: 'Patna', district: 'Patna', state: 'Bihar', address: 'Boring Road, Near Crossing', contact: '+91 98765 43210', status: 'Admission Open', type: 'Premium Center' },
    { id: 2, branch: 'CoachingYaari - Madhepura', city: 'Madhepura', district: 'Madhepura', state: 'Bihar', address: 'Main Road, Near College Chowk', contact: '+91 98765 43211', status: 'Admission Open', type: 'Digital Hub' },
    { id: 3, branch: 'CoachingYaari - Purnea', city: 'Purnea', district: 'Purnea', state: 'Bihar', address: 'Line Bazar, Purnea', contact: '+91 98765 43212', status: 'Admission Open', type: 'Regional Center' },
    { id: 4, branch: 'CoachingYaari - Gaya', city: 'Gaya', district: 'Gaya', state: 'Bihar', address: 'AP Colony, Gaya', contact: '+91 98765 43213', status: 'Batch Full', type: 'Standard' },
    { id: 5, branch: 'CoachingYaari - Muzaffarpur', city: 'Muzaffarpur', district: 'Muzaffarpur', state: 'Bihar', address: 'Mithanpura, Muzaffarpur', contact: '+91 98765 43214', status: 'Admission Open', type: 'Digital Hub' },
    
    // PAN INDIA
    { id: 6, branch: 'CoachingYaari - Delhi South', city: 'New Delhi', district: 'Delhi', state: 'Delhi', address: 'Kalu Sarai, Near Hauz Khas', contact: '+91 98765 43215', status: 'Admission Open', type: 'Corporate Office' },
    { id: 7, branch: 'CoachingYaari - Jaipur', city: 'Jaipur', district: 'Jaipur', state: 'Rajasthan', address: 'Gopalpura Bypass, Jaipur', contact: '+91 98765 43216', status: 'Admission Open', type: 'Premium Center' },
    { id: 8, branch: 'CoachingYaari - Kota', city: 'Kota', district: 'Kota', state: 'Rajasthan', address: 'Vigyan Nagar, Kota', contact: '+91 98765 43217', status: 'Admission Open', type: 'Resi-Center' },
  ]

  const filteredCenters = useMemo(() => {
    return centers.filter(c => {
      const matchesSearch = c.district.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            c.branch.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesState = selectedState === 'All' || c.state === selectedState
      return matchesSearch && matchesState
    })
  }, [searchQuery, selectedState])

  return (
    <div className="min-h-screen bg-white">
      {/* --- ELITE HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-[#002B5B] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-6">
              <span className="bg-blue-400/10 text-blue-300 border border-blue-400/20 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                Official Network
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Coaching<span className="text-blue-400">Yaari</span> <br /> 
              Learning Centers
            </h1>
            <p className="text-blue-100/70 text-lg mb-10 font-medium">
              Explore our world-class learning ecosystems across Bihar and Pan India.
            </p>

            {/* Premium Search Box */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400">
                <FaSearch size={20} />
              </div>
              <input
                type="text"
                placeholder="Search by District or City (e.g. Patna, Madhepura...)"
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/30 focus:bg-white focus:text-gray-900 focus:ring-4 focus:ring-blue-500/50 transition-all outline-none text-lg backdrop-blur-sm"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FILTER & RESULTS --- */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['All', 'Bihar', 'Delhi', 'Rajasthan'].map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={`px-8 py-3 rounded-xl font-bold transition-all shadow-sm
                  ${selectedState === state ? 'bg-blue-600 text-white scale-105 shadow-blue-200' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
              >
                {state === 'All' ? 'Pan India' : state}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- BRANCH CARDS --- */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredCenters.map((center) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={center.id}
                  className="group relative bg-white rounded-[2.5rem] p-1 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(0,43,91,0.12)] transition-all duration-500 border border-transparent hover:border-blue-100"
                >
                  <div className="bg-white rounded-[2.3rem] p-8 h-full flex flex-col">
                    {/* Header: Badge & Type */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                        <FaGraduationCap size={24} />
                      </div>
                      <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter
                        ${center.status === 'Admission Open' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {center.status}
                      </span>
                    </div>

                    {/* Branch Info */}
                    <h3 className="text-2xl font-black text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                      {center.branch}
                    </h3>
                    <p className="text-blue-600 font-bold text-sm mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                      {center.type}
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3 text-gray-500 text-sm">
                        <FaMapMarkerAlt className="mt-1 text-gray-300" />
                        <span>{center.address}, <br /><strong>{center.city}, {center.state}</strong></span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <FaPhoneAlt className="text-gray-300" />
                        <span>{center.contact}</span>
                      </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                             <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="student" />
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[8px] text-white font-bold">
                          500+
                        </div>
                      </div>
                      <button className="flex items-center gap-2 font-bold text-blue-600 hover:gap-4 transition-all group/btn">
                        Get Direction <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Error State */}
          {filteredCenters.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400">No centers found in this area yet.</h3>
              <p className="text-gray-500">We are expanding rapidly. Stay tuned!</p>
            </div>
          )}
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-[#002B5B] rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10">Want to start a CoachingYaari Center?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto relative z-10 font-medium">Join our mission to democratize education across India. Partner with us and transform your local coaching.</p>
          <button className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-black hover:bg-yellow-400 transition-colors relative z-10 shadow-xl">
            Partner with Us
          </button>
        </div>
      </section>
    </div>
  )
}