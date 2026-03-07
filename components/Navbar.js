'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaChevronDown, FaMoon, FaSun } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { servicesNav, solutionsNav, industriesNav, companyNav } from '@/data/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isTransparent = isHome && !isScrolled

  useEffect(() => { setMounted(true) }, [])
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const dropdowns = [
    { key: 'company', label: 'Company', items: companyNav },
    { key: 'services', label: 'Services', items: servicesNav },
    { key: 'solutions', label: 'Solutions', items: solutionsNav },
    { key: 'industries', label: 'Industries', items: industriesNav },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent ? 'bg-black/20 backdrop-blur-sm' : 'bg-white shadow-lg'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <span className="text-2xl md:text-3xl font-black tracking-tight" style={{ fontFamily: "'Museo Moderno', sans-serif" }}>
              <span className="bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">One</span>
              <span className={isTransparent ? 'text-white' : 'text-gray-800'}> </span>
              <span className="bg-gradient-to-r from-primary-blue to-blue-600 bg-clip-text text-transparent font-black">Klick</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`hover:text-primary-orange transition-colors ${isTransparent ? 'text-white' : 'text-gray-700'}`}>
              Home
            </Link>

            {dropdowns.map(({ key, label, items }) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center space-x-1 hover:text-primary-orange transition-colors ${isTransparent ? 'text-white' : 'text-gray-700'}`}>
                  <span>{label}</span>
                  <FaChevronDown className="text-xs" />
                </button>
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden"
                    >
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-primary-orange transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link href="/technology" className={`hover:text-primary-orange transition-colors ${isTransparent ? 'text-white' : 'text-gray-700'}`}>
              Technology
            </Link>
            <Link href="/portfolio" className={`hover:text-primary-orange transition-colors ${isTransparent ? 'text-white' : 'text-gray-700'}`}>
              Portfolio
            </Link>
            <Link href="/contact" className={`hover:text-primary-orange transition-colors ${isTransparent ? 'text-white' : 'text-gray-700'}`}>
              Contact
            </Link>

            {/* Theme Toggle - Desktop */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`w-9 h-9 flex items-center justify-center rounded-full border hover:border-primary-orange hover:text-primary-orange transition-all ${isTransparent ? 'border-white/50 text-white' : 'border-gray-200 text-gray-600'}`}
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
              </button>
            )}
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`w-9 h-9 flex items-center justify-center rounded-full border hover:border-primary-orange hover:text-primary-orange transition-all ${isTransparent ? 'border-white/50 text-white' : 'border-gray-200 text-gray-600'}`}
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-2xl focus:outline-none ${isTransparent ? 'text-white' : 'text-gray-700'}`}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-5 py-6 space-y-5">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-primary-orange transition-colors py-1"
                >
                  Home
                </Link>

                {dropdowns.map(({ key, label, items }) => (
                  <div key={key} className="space-y-1">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                      className="flex items-center justify-between w-full text-gray-700 py-1"
                    >
                      <span>{label}</span>
                      <FaChevronDown
                        className={`text-xs transition-transform ${
                          activeDropdown === key ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === key && (
                      <div className="pl-4 space-y-1 pt-1">
                        {items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-600 hover:text-primary-orange py-2 leading-snug"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <Link
                  href="/technology"
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-primary-orange transition-colors py-1"
                >
                  Technology
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-primary-orange transition-colors py-1"
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-primary-orange transition-colors py-1"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
