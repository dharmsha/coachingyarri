'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FaHome, FaSearch, FaBell, FaUserCircle, FaBars, FaTimes,
  FaChalkboardTeacher, FaGraduationCap, FaBuilding, FaBriefcase,
  FaPlayCircle, FaShoppingBag, FaChevronDown, FaMoon, FaSun,
  FaRegHeart, FaHistory, FaSignOutAlt, FaUser, FaTachometerAlt,
  FaBookOpen, FaCog
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  const userMenuRef = useRef<HTMLDivElement>(null)
  const notificationsRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  
  const pathname = usePathname()

  // Dark mode toggle
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark'
    setIsDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Click outside handlers
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (userMenuRef.current && !userMenuRef.current.contains(target)) {
        setIsUserMenuOpen(false)
      }
      if (notificationsRef.current && !notificationsRef.current.contains(target)) {
        setIsNotificationsOpen(false)
      }
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(target) && 
          !(event.target as Element).closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close menus on route change
  useEffect(() => {
    const closeMenus = () => {
      requestAnimationFrame(() => {
        setIsMobileMenuOpen(false)
        setIsUserMenuOpen(false)
        setIsNotificationsOpen(false)
      })
    }
    
    window.addEventListener('popstate', closeMenus)
    
    const observer = new MutationObserver(() => {
      if (window.location.pathname !== pathname) {
        closeMenus()
      }
    })
    
    observer.observe(document.body, { childList: true, subtree: true })
    
    return () => {
      window.removeEventListener('popstate', closeMenus)
      observer.disconnect()
    }
  }, [pathname])

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'Centers', href: '/centers', icon: <FaBuilding /> },
    { name: 'Teachers', href: '/teachers', icon: <FaChalkboardTeacher /> },
    { name: 'Courses', href: '/courses', icon: <FaGraduationCap /> },
    { name: 'Jobs', href: '/jobs', icon: <FaBriefcase /> },
    { name: 'Live', href: '/live', icon: <FaPlayCircle />, badge: 'LIVE' },
    { name: 'Store', href: '/marketplace', icon: <FaShoppingBag /> },
  ]

  const notifications = [
    { id: 1, title: 'New course available', message: 'Advanced React course is now live!', time: '5 min ago', read: false, icon: '📚' },
    { id: 2, title: 'Assignment graded', message: 'Your JavaScript assignment has been graded', time: '1 hour ago', read: false, icon: '✅' },
    { id: 3, title: 'Live class starting soon', message: 'Data Structures class in 30 minutes', time: '2 hours ago', read: true, icon: '🔴' },
  ]

  const unreadCount = notifications.filter(n => !n.read).length

  const isActiveLink = useCallback((href: string) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }, [pathname])

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 z-[100] transition-all duration-500
        ${isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg py-2 border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-3'
        }
      `}>
        <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
          
          {/* Logo Section - Only Logo, No Text */}
          <Link 
            href="/" 
            className="flex items-center group"
          >
            <div className="relative">
              {/* Subtle Glow background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl blur-md opacity-0 group-hover:opacity-20 transition-opacity"></div>
              
              {/* Logo Container - Full rectangular logo */}
              <div className="relative h-14 w-auto min-w-[60px] max-w-[200px] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/c.jpeg" 
                  alt="Logo" 
                  className="h-full w-full object-contain" 
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-1 border border-gray-200 dark:border-gray-700">
            {navItems.map((item) => {
              const active = isActiveLink(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all
                    ${active 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  <span className={active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-red-500 text-white text-[8px] font-bold rounded-full animate-pulse">
                      {item.badge}
                    </span>
                  )}
                  {active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl -z-10 shadow-sm"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Search Bar */}
            <div className="hidden lg:block relative group">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors text-sm" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-gray-100 dark:bg-gray-800 border-none rounded-full py-2.5 pl-10 pr-12 w-48 focus:w-72 focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 bg-white dark:bg-gray-700 px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-600 hidden group-focus-within:hidden">
                ⌘K
              </kbd>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            {/* Notifications Dropdown */}
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <FaBell size={16} />
                {unreadCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900"
                  >
                    {unreadCount}
                  </motion.span>
                )}
              </button>

              <AnimatePresence>
                {isNotificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
                  >
                    <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                      <h3 className="font-bold text-gray-900 dark:text-white">Notifications</h3>
                      <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                        Mark all read
                      </button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer border-b border-gray-50 dark:border-gray-700/50 ${!notif.read ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''}`}
                        >
                          <div className="flex items-start space-x-3">
                            <span className="text-xl">{notif.icon}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">{notif.title}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{notif.message}</p>
                              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">{notif.time}</p>
                            </div>
                            {!notif.read && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Profile Dropdown */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-1 pr-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                  RS
                </div>
                <FaChevronDown className={`text-[10px] text-gray-500 dark:text-gray-400 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="px-4 py-4 border-b border-gray-100 dark:border-gray-700">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                          RS
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900 dark:text-white">Rahul Sharma</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">rahul@coachingyaari.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      {[
                        { name: 'Profile', icon: <FaUser size={14} />, href: '/#' },
                        { name: 'Dashboard', icon: <FaTachometerAlt size={14} />, href: '/#' },
                        { name: 'My Courses', icon: <FaBookOpen size={14} />, href: '/#' },
                        { name: 'Saved Items', icon: <FaRegHeart size={14} />, href: '/#' },
                        { name: 'Settings', icon: <FaCog size={14} />, href: '/#' },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center space-x-3 px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 dark:border-gray-700 mt-2 pt-2">
                        <button className="w-full flex items-center space-x-3 px-3 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-colors">
                          <FaSignOutAlt size={14} />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg mobile-menu-toggle transition-colors"
            >
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
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
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm xl:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    RS
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Rahul Sharma</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">View Profile →</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-4 space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto">
                {navItems.map((item) => {
                  const active = isActiveLink(item.href)
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        flex items-center space-x-4 p-4 rounded-xl transition-all font-medium
                        ${active 
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }
                      `}
                    >
                      <span className={`text-xl ${active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`}>
                        {item.icon}
                      </span>
                      <span className="flex-1 text-base">{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[72px] lg:h-[76px]"></div>
    </>
  )
}