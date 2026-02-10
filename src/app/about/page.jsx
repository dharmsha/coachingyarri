'use client'

import { FaRocket, FaEye, FaUsers, FaAward, FaQuoteLeft, FaCheckCircle, FaGlobe } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const stats = [
    { id: 1, label: 'Active Students', value: '50,000+', icon: <FaUsers /> },
    { id: 2, label: 'Expert Mentors', value: '100+', icon: <FaAward /> },
    { id: 3, label: 'Learning Centers', value: '25+', icon: <FaGlobe /> },
    { id: 4, label: 'Success Ratio', value: '94%', icon: <FaCheckCircle /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-32 pb-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              WE ARE <span className="text-blue-500">COACHINGYAARI</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
              Empowering the next generation of leaders through quality education, 
              from the heart of Bihar to every corner of India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NUMBERS THAT MATTER --- */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center text-white">
                <div className="text-3xl mb-2 flex justify-center opacity-70">{stat.icon}</div>
                <div className="text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR MISSION & VISION --- */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100"
          >
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-xl shadow-blue-100">
              <FaRocket />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Hamara maqsad hai ki har student ko, chahe wo Madhepura ho ya Delhi, 
              ek jaisi premium education mile. Hum technology aur top faculty ko mila kar 
              learning ko affordable aur effective bana rahe hain.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 bg-[#002B5B] rounded-[3rem] text-white"
          >
            <div className="w-16 h-16 bg-white text-blue-900 rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-xl">
              <FaEye />
            </div>
            <h2 className="text-3xl font-black mb-6 uppercase">Our Vision</h2>
            <p className="text-blue-100 text-lg leading-relaxed font-medium opacity-80">
              To become Indias most trusted educational companion (Yaari). 
              Hum ek aisa ecosystem bana rahe hain jahan 8th class se lekar UPSC tak 
              ka har safar CoachingYaari ke saath successful ho.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FOUNDER'S QUOTE --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-sm border border-slate-100 relative overflow-hidden">
            <FaQuoteLeft className="absolute top-10 left-10 text-slate-100 text-8xl" />
            <div className="relative z-10 text-center">
              <p className="text-2xl md:text-3xl font-bold text-slate-800 italic mb-10 leading-snug">
                Education sirf exams pass karne ke liye nahi, balki ek behtar bhavishya banane ke liye honi chahiye. 
                CoachingYaari isi soch ka nateeja hai.
              </p>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-slate-200 rounded-full mb-4 overflow-hidden border-4 border-blue-50">
                   <img src="https://i.pravatar.cc/150?u=founder" alt="Founder" />
                </div>
                <h4 className="text-xl font-black text-slate-900">Niraj Kumar</h4>
                <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-16 uppercase tracking-tight">Why Students <span className="text-blue-600">Trust Us</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Official Centers', desc: 'Real physical branches in Bihar & across India.' },
            { title: 'Verified Faculty', desc: 'Mentors from IITs, AIIMS, and top UPSC backgrounds.' },
            { title: 'Affordable Pricing', desc: 'World-class quality at a fraction of the cost.' }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[2rem] hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-slate-100 group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FaCheckCircle size={20} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}