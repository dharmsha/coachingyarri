'use client'

import { FaRocket, FaEye, FaLightbulb, FaLinkedin, FaTwitter, FaQuoteRight, FaAward } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-[#0F172A] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-blue-500/10 text-blue-400 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-6 inline-block border border-blue-500/20">
              The Minds Behind CoachingYaari
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
              Our <span className="text-blue-500">Leadership</span> Team
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto font-medium">
              Driven by passion, led by innovation. Meet the visionaries transforming 
              the educational landscape of India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FOUNDER SPOTLIGHT (PRITAM KUMAR) --- */}
      <section className="container mx-auto px-4 -mt-16 pb-24 relative z-20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row items-stretch"
          >
            {/* Image Area */}
            <div className="lg:w-2/5 relative min-h-[400px] bg-slate-200">
               <img 
                 src="./pritam.jpeg" // Yahan Pritam Bhai ki photo dal dena
                 alt="Pritam Kumar" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-10 left-10">
                  <h2 className="text-3xl font-black text-white leading-tight">PRITAM KUMAR</h2>
                  <p className="text-blue-400 font-bold tracking-widest text-sm uppercase">Founder & CEO</p>
               </div>
            </div>

            {/* Content Area */}
            <div className="lg:w-3/5 p-10 md:p-20 flex flex-col justify-center bg-white relative">
              <FaQuoteRight className="text-slate-50 text-9xl absolute top-10 right-10" />
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">The Visionarys Message</h3>
                <p className="text-slate-600 text-xl font-medium leading-relaxed italic mb-8">
                  Education is not just about clearing exams; its about empowering every small-town 
                  dreamer to stand tall with global leaders. At CoachingYaari, we arent just building 
                  a company, we are building futures.
                </p>
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white p-4 rounded-2xl hover:bg-slate-900 transition-colors">
                    <FaLinkedin size={20} />
                  </button>
                  <button className="bg-slate-100 text-slate-900 p-4 rounded-2xl hover:bg-blue-600 hover:text-white transition-colors">
                    <FaTwitter size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- VISION & VALUES (TAGRA UI) --- */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <motion.div whileHover={{ y: -10 }} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-[1.5rem] flex items-center justify-center text-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                <FaEye />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase">Our Vision</h4>
              <p className="text-slate-500 font-medium leading-relaxed">
                To bridge the educational divide in India, bringing premium coaching and 
                personalized mentorship to every household.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div whileHover={{ y: -10 }} className="bg-[#0A1628] p-12 rounded-[3.5rem] text-white group">
              <div className="w-16 h-16 bg-white/10 text-blue-400 rounded-[1.5rem] flex items-center justify-center text-2xl mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-xl">
                <FaRocket />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase">Our Mission</h4>
              <p className="text-slate-400 font-medium leading-relaxed">
                Empowering 1 Million+ students by 2027 through affordable technology 
                and world-class faculty network.
              </p>
            </motion.div>

            {/* Core Values Card */}
            <motion.div whileHover={{ y: -10 }} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 group">
              <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-[1.5rem] flex items-center justify-center text-2xl mb-8 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 shadow-inner">
                <FaLightbulb />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase">Our Values</h4>
              <p className="text-slate-500 font-medium leading-relaxed">
                Transparency, Innovation, and Student-First approach are the pillars 
                that define CoachingYaaris culture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-blue-600 rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-blue-200">
           {[
             { val: '2024', label: 'Est. Year', icon: <FaAward /> },
             { val: '30+', label: 'Legendary Faculty', icon: <FaAward /> },
             { val: '50k+', label: 'Active Students', icon: <FaAward /> },
             { val: '100%', label: 'Commitment', icon: <FaAward /> },
           ].map((item, i) => (
             <div key={i} className="text-center text-white">
                <div className="text-4xl font-black mb-2 tracking-tighter">{item.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">{item.label}</div>
             </div>
           ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="pb-24 container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic">Want to build with us?</h2>
          <p className="text-slate-500 mb-10 font-medium">Join Pritam Kumar and the leadership team in creating history.</p>
          <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl active:scale-95">
             Apply to Core Team
          </button>
        </div>
      </section>
    </div>
  )
}