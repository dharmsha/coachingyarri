'use client'
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Sparkles, Target } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#000000] overflow-hidden">

      {/* --- PREMIUM GLOW BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/15 blur-[160px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[160px] rounded-full"></div>
        {/* Subtle Grid for Professional Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">

        {/* --- LEFT CONTENT: Typography Focus --- */}
        <div className="lg:col-span-7 space-y-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300">
              Indias #1 Learning Path
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-[1000] leading-[0.9] tracking-tighter text-white"
          >
            Build Your Future, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 drop-shadow-sm">
              One Step at a Time.
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
              Every successful student starts with the right guidance. Discover trusted coaching, clear learning paths, and real growth — <span className="text-white font-bold">from Class 8th to SSC and beyond.</span>
            </p>

            <p className="text-slate-500 italic font-medium border-l-2 border-blue-600/50 pl-4 py-1">
              “You don’t need to be perfect. You just need to start.”
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-500 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] transition-all active:scale-95">
              START MY JOURNEY <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-6">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-slate-800 shadow-xl" />)}
               </div>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">10k+ Students Joined</p>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT CARD: Glassy Search --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 relative group"
        >
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
               <div className="p-3 bg-blue-500/10 rounded-2xl">
                  <Target className="text-blue-500 w-6 h-6" />
               </div>
               <h3 className="text-2xl font-black text-white tracking-tight">Search Coaching</h3>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Your Location</label>
                <div className="relative">
                  <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
                  <input 
                    placeholder="Enter City or District"
                    className="w-full pl-14 pr-6 py-5 bg-white/[0.03] border border-white/5 rounded-2xl outline-none focus:border-blue-500/50 text-white font-bold transition-all placeholder:text-slate-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Select Goal</label>
                <select className="w-full px-6 py-5 bg-white/[0.03] border border-white/5 rounded-2xl outline-none focus:border-purple-500/50 text-white font-bold appearance-none cursor-pointer">
                  <option className="bg-black">Foundation (Class 8th - 10th)</option>
                  <option className="bg-black">IIT-JEE / NEET Prep</option>
                  <option className="bg-black">SSC & Govt Exams</option>
                  <option className="bg-black">Skill Development</option>
                </select>
              </div>

              <button className="w-full py-5 bg-white text-black rounded-2xl font-black text-lg hover:bg-slate-200 transition-all shadow-xl shadow-white/5">
                EXPLORE NOW
              </button>
            </div>

            <p className="mt-8 text-center text-[10px] font-black text-slate-600 uppercase tracking-widest">
              Verified & Trusted Network
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}