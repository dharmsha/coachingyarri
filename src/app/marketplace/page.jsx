'use client'

import { useState } from 'react'
import { FaShoppingCart, FaStar, FaBook, FaLaptopCode, FaFilePdf, FaArrowRight, FaFilter } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function MarketplacePage() {
  const [category, setCategory] = useState('All')

  const products = [
    {
      id: 1,
      name: 'IIT-JEE Physics: Mechanics Masterclass',
      type: 'Study Material',
      rating: 4.9,
      price: '₹999',
      oldPrice: '₹1,999',
      category: 'Books',
      tag: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400'
    },
    {
      id: 2,
      name: 'NEET 2026: Full Syllabus Test Series',
      type: 'Test Series',
      rating: 4.8,
      price: '₹1,499',
      oldPrice: '₹2,999',
      category: 'Test Series',
      tag: 'New Launch',
      image: 'https://images.unsplash.com/photo-1588702590204-8d2473482558?w=400'
    },
    {
      id: 3,
      name: 'Organic Chemistry: 30 Days Crash Course',
      type: 'Video Lectures',
      rating: 4.7,
      price: '₹2,499',
      oldPrice: '₹4,999',
      category: 'Courses',
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400'
    },
    {
      id: 4,
      name: 'Mathematics Formula Sheet (Handwritten)',
      type: 'PDF Notes',
      rating: 5.0,
      price: '₹199',
      oldPrice: '₹499',
      category: 'Books',
      tag: 'Digital',
      image: 'https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?w=400'
    },
    {
      id: 5,
      name: 'UPSC Prelims: GS Sectional Tests',
      type: 'Test Series',
      rating: 4.6,
      price: '₹3,999',
      oldPrice: '₹7,999',
      category: 'Test Series',
      tag: 'Verified',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400'
    },
    {
      id: 6,
      name: 'Biology NCERT Fingerprints (Revised Edition)',
      type: 'Study Material',
      rating: 4.9,
      price: '₹799',
      oldPrice: '₹1,200',
      category: 'Books',
      tag: 'Stock Ready',
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400'
    }
  ]

  const filteredProducts = category === 'All' ? products : products.filter(p => p.category === category)

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      {/* --- PREMIUM MARKET HERO --- */}
      <section className="bg-[#0F172A] pt-32 pb-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Study <span className="text-blue-500">Marketplace</span>
          </motion.h1>
          <p className="text-slate-400 text-lg font-medium mb-10">Premium study material and resources by CoachingYaari experts.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Books', 'Test Series', 'Courses'].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all
                  ${category === item ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUCT GRID --- */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={product.id}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col group"
              >
                {/* Image & Tag */}
                <div className="relative h-64 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/95 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-wider shadow-lg">
                      {product.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 flex items-center gap-2">
                    <div className="bg-yellow-400 text-slate-900 p-1 rounded-lg flex items-center gap-1 font-bold text-xs">
                      <FaStar /> {product.rating}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                    {product.category === 'Courses' ? <FaLaptopCode /> : <FaBook />} {product.type}
                  </p>
                  <h3 className="text-xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>

                  <div className="mt-auto">
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-3xl font-black text-slate-900">{product.price}</span>
                      <span className="text-slate-400 text-sm font-bold line-through">{product.oldPrice}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-slate-100 text-slate-600 py-4 rounded-2xl font-black text-xs hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                        <FaFilePdf /> SAMPLE
                      </button>
                      <button className="bg-blue-600 text-white py-4 rounded-2xl font-black text-xs hover:bg-slate-900 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2">
                        <FaShoppingCart /> BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* --- BULK ORDER CTA --- */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-white rounded-[3rem] p-12 border-4 border-dashed border-blue-100 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Are you a Coaching Center?</h2>
          <p className="text-slate-500 font-medium mb-8">Get special bulk pricing for your students on CoachingYaari printed materials.</p>
          <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 mx-auto hover:bg-blue-600 transition-all group">
            Partner Inquiry <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  )
}