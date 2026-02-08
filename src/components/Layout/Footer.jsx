'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  GraduationCap,
  Users,
  Building,
  BookOpen,
  Shield,
  Clock
} from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = {
    'Students': [
      { name: 'Find Centers', href: '/centers' },
      { name: 'Browse Courses', href: '/courses' },
      { name: 'Live Classes', href: '/live' },
      { name: 'Test Series', href: '/tests' },
      { name: 'Study Material', href: '/marketplace' },
    ],
    'Teachers': [
      { name: 'Find Jobs', href: '/jobs' },
      { name: 'Create Profile', href: '/teachers/create' },
      { name: 'Teach Online', href: '/teachers/online' },
      { name: 'Resources', href: '/teachers/resources' },
      { name: 'Earnings', href: '/teachers/earnings' },
    ],
    'Centers': [
      { name: 'Register Center', href: '/centers/register' },
      { name: 'Find Teachers', href: '/centers/teachers' },
      { name: 'Analytics', href: '/centers/analytics' },
      { name: 'Marketing', href: '/centers/tools' },
      { name: 'Support', href: '/centers/support' },
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Privacy Policy', href: '/privacy' },
    ]
  }

  const socialLinks = [
    { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube size={18} />, href: '#', label: 'YouTube' },
  ]

  const states = [
    'UP', 'MH', 'BR', 'WB', 'MP', 'TN', 'RJ', 'KA', 'GJ', 'AP',
    'OD', 'TS', 'KL', 'JH', 'AS', 'PB', 'CG', 'HR', 'DL', 'UK'
  ]

  const features = [
    { icon: <Shield size={16} />, text: 'Verified Centers' },
    { icon: <Clock size={16} />, text: '24/7 Support' },
    { icon: <GraduationCap size={16} />, text: 'Quality Teachers' },
    { icon: <Users size={16} />, text: 'Community' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Grid - Newsletter & Quick Links */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          
          {/* Left Column - Brand & Newsletter */}
          <div>
            {/* Brand Logo */}
            <div className="mb-8">
              <Link href="/" className="inline-block group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Coaching Yaari</h2>
                    <p className="text-gray-400 text-sm">Indias Education Network</p>
                  </div>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Connecting students, teachers, and coaching centers across every district of India. 
                Quality education accessible to all.
              </p>
            </div>

            {/* Newsletter - Mobile Optimized */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Mail size={20} />
                Stay Updated
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/20 whitespace-nowrap min-w-[120px]"
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Get updates on new centers, courses, and opportunities
              </p>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
            {Object.entries(quickLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-bold mb-4 text-gray-300">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Features Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 bg-gray-800/30 p-4 rounded-xl">
              <div className="text-blue-400">
                {feature.icon}
              </div>
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* States Section */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-4">Available States</h3>
          <div className="flex flex-wrap gap-2">
            {states.map((state) => (
              <span 
                key={state}
                className="px-3 py-1.5 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 cursor-pointer transition-colors"
              >
                {state}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Info - Stack on Mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
            <div className="p-3 bg-blue-900/30 rounded-lg">
              <Phone className="text-blue-400" size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm">Call Us</h4>
              <p className="text-gray-400 text-sm">+91 98765 43210</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
            <div className="p-3 bg-green-900/30 rounded-lg">
              <Mail className="text-green-400" size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm">Email Us</h4>
              <p className="text-gray-400 text-sm">support@coachingyaari.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl sm:col-span-2 lg:col-span-1">
            <div className="p-3 bg-purple-900/30 rounded-lg">
              <MapPin className="text-purple-400" size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm">Head Office</h4>
              <p className="text-gray-400 text-sm">New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar - Stack on Mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Coaching Yaari. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Building Indias education ecosystem
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 order-1 md:order-2">
            <span className="text-gray-400 text-sm">Follow us:</span>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  className="p-2.5 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 rounded-lg hover:bg-gray-700 text-sm order-3"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>

      {/* Trust Badges - Mobile Optimized */}
      <div className="bg-black/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>100% Secure</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Verified Centers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span>1Lakh+ Users</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Notice */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Coaching Yaari is Indias fastest growing education platform. 
            Present in {states.length}+ states and 500+ districts.
          </p>
          <div className="flex justify-center gap-4 mt-3">
            <span className="text-gray-600 text-xs">ISO 9001:2015 Certified</span>
            <span className="text-gray-600 text-xs">•</span>
            <span className="text-gray-600 text-xs">PCI DSS Compliant</span>
            <span className="text-gray-600 text-xs">•</span>
            <span className="text-gray-600 text-xs">GDPR Ready</span>
          </div>
        </div>
      </div>
    </footer>
  )
}