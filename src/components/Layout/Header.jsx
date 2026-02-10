'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FaHome, FaSearch, FaBell, FaUserCircle, FaBars, FaTimes,
  FaChalkboardTeacher, FaGraduationCap, FaBuilding, FaBriefcase,
  FaPlayCircle, FaShoppingBag, FaChevronDown 
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  
  const userMenuRef = useRef(null)
  const mobileMenuRef = useRef(null)
  
  const pathname = usePathname()

  // **FIXED: Scroll effect with stable dependency array**
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    // Initial check
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Empty array - stable

  // **FIXED: Click outside to close menus**
  useEffect(() => {
    const handleClickOutside = (event) => {
      // User menu ke bahar click
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false)
      }
      // Mobile menu ke bahar click
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, []) // Empty array - stable

  // **FIXED: Mobile menu close on route change - NO state updates here**
  useEffect(() => {
    // Yeh effect sirf event listener setup karega
    const closeMobileMenu = () => {
      // Use requestAnimationFrame to avoid sync state updates
      requestAnimationFrame(() => {
        setIsMobileMenuOpen(false)
        setIsUserMenuOpen(false)
      })
    }
    
    // Route change detect karne ke liye
    const handleRouteChange = () => {
      closeMobileMenu()
    }
    
    // Multiple ways to detect route changes
    window.addEventListener('popstate', handleRouteChange)
    
    // MutationObserver for Next.js app router changes
    const observer = new MutationObserver(() => {
      // Check if URL changed
      if (window.location.pathname !== pathname) {
        closeMobileMenu()
      }
    })
    
    // Observe body for changes
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    })
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      observer.disconnect()
    }
  }, [pathname]) // pathname dependency - stable

  const navItems = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'Centers', href: '/centers', icon: <FaBuilding /> },
    { name: 'Teachers', href: '/teachers', icon: <FaChalkboardTeacher /> },
    { name: 'Courses', href: '/courses', icon: <FaGraduationCap /> },
    { name: 'Jobs', href: '/jobs', icon: <FaBriefcase /> },
    { name: 'Live', href: '/live', icon: <FaPlayCircle /> },
    { name: 'Store', href: '/marketplace', icon: <FaShoppingBag /> },
  ]

  // **FIXED: Navigation handler with useCallback**
  const handleNavigation = useCallback((href, e) => {
    // Agar same page pe hai to
    if (pathname === href) {
      e?.preventDefault()
      // Home page pe top pe scroll karo
      if (href === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }
    
    // Mobile menu band karo (async mein)
    setTimeout(() => {
      setIsMobileMenuOpen(false)
      setIsUserMenuOpen(false)
    }, 0)
    
    // Next.js ke Link kaam karega, humein force reload ki zarurat nahi
  }, [pathname])

  const isActiveLink = useCallback((href) => {
    return pathname === href
  }, [pathname])

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 z-[100] transition-all duration-300
        ${isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-md py-2' 
          : 'bg-white border-b border-gray-100 py-3'
        }
      `}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            onClick={(e) => handleNavigation('/', e)}
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-blue-200 shadow-lg group-hover:scale-105 transition-transform">
              <FaGraduationCap className="text-white text-xl" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
                Coaching<span className="text-blue-600">Yaari</span>
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold -mt-1">Ed-Network</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center bg-gray-50 rounded-2xl p-1 border border-gray-100">
            {navItems.map((item) => {
              const active = isActiveLink(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(item.href, e)}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all
                    ${active 
                      ? 'bg-white text-blue-600 shadow-sm ring-1 ring-black/5' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                    }
                  `}
                >
                  <span className={active ? 'text-blue-600' : 'text-gray-400'}>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Desktop Search */}
            <div className="hidden lg:block relative group">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Search resources..."
                className="bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 w-44 focus:w-64 focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2.5 bg-gray-100 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
              <FaBell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            {/* User Profile Dropdown */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-1 pr-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                  R
                </div>
                <FaChevronDown className={`text-[10px] text-gray-500 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 overflow-hidden"
                  >
                    <div className="px-4 py-3 border-b border-gray-50">
                      <p className="text-sm font-bold text-gray-900">Rahul Sharma</p>
                      <p className="text-xs text-gray-500 truncate">rahul@example.com</p>
                    </div>
                    <div className="p-1">
                      {['Profile', 'Dashboard', 'My Courses', 'Settings'].map((item) => (
                        <Link 
                          key={item} 
                          href="#" 
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                      <button className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg mt-1 font-medium">
                        Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-4 mt-10">
                {navItems.map((item) => {
                  const active = isActiveLink(item.href)
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        handleNavigation(item.href, e)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`
                        flex items-center space-x-4 p-4 rounded-2xl transition-all font-medium
                        ${active 
                          ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                          : 'hover:bg-blue-50 text-gray-700 hover:text-blue-600'
                        }
                      `}
                    >
                      <span className={`text-xl ${active ? 'text-blue-600' : 'text-gray-500'}`}>
                        {item.icon}
                      </span>
                      <span className="text-lg">{item.name}</span>
                      {active && (
                        <span className="ml-auto text-blue-600 text-sm font-bold">●</span>
                      )}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Spacer */}
      <div className="h-20 lg:h-24"></div>
    </>
  )
}