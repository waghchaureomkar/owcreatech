'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app' },
    { name: 'Software Development', href: '/services/software-development' },
    { name: 'AI & ML Solutions', href: '/services/ai-ml' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
  ]

  const solutions = [
    { name: 'Restaurant Management', href: '/solutions/restaurant-management' },
    { name: 'CRM Development', href: '/solutions/crm' },
    { name: 'E-Commerce Software', href: '/solutions/ecommerce' },
    { name: 'School Management', href: '/solutions/school-management' },
  ]

  const industries = [
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Travel & Tourism', href: '/industries/travel' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <span className="text-2xl md:text-3xl font-black tracking-tight" style={{ fontFamily: "'Museo Moderno', sans-serif" }}>
              <span className="bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">OW</span>
              <span className="text-gray-800"> </span>
              <span className="bg-gradient-to-r from-primary-blue to-blue-600 bg-clip-text text-transparent font-light">CreaTech</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-orange transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-orange transition-colors">
                <span>Services</span>
                <FaChevronDown className="text-xs" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-primary-orange transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-orange transition-colors">
                <span>Solutions</span>
                <FaChevronDown className="text-xs" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden"
                  >
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-primary-orange transition-colors"
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-orange transition-colors">
                <span>Industries</span>
                <FaChevronDown className="text-xs" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden"
                  >
                    {industries.map((industry) => (
                      <Link
                        key={industry.href}
                        href={industry.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-primary-orange transition-colors"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/portfolio" className="text-gray-700 hover:text-primary-orange transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-orange transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-orange transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-gray-700 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
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
              <div className="px-4 py-6 space-y-4">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-primary-orange transition-colors"
                >
                  Home
                </Link>

                {/* Mobile Services */}
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                    className="flex items-center justify-between w-full text-gray-700"
                  >
                    <span>Services</span>
                    <FaChevronDown
                      className={`text-xs transition-transform ${
                        activeDropdown === 'services' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === 'services' && (
                    <div className="pl-4 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-600 hover:text-primary-orange py-1"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Solutions */}
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                    className="flex items-center justify-between w-full text-gray-700"
                  >
                    <span>Solutions</span>
                    <FaChevronDown
                      className={`text-xs transition-transform ${
                        activeDropdown === 'solutions' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === 'solutions' && (
                    <div className="pl-4 space-y-2">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-600 hover:text-primary-orange py-1"
                        >
                          {solution.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Industries */}
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'industries' ? null : 'industries')}
                    className="flex items-center justify-between w-full text-gray-700"
                  >
                    <span>Industries</span>
                    <FaChevronDown
                      className={`text-xs transition-transform ${
                        activeDropdown === 'industries' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === 'industries' && (
                    <div className="pl-4 space-y-2">
                      {industries.map((industry) => (
                        <Link
                          key={industry.href}
                          href={industry.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-600 hover:text-primary-orange py-1"
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-primary-orange transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-primary-orange transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-primary-orange transition-colors"
                >
                  Contact
                </Link>

                <Link href="/contact" className="btn-primary block text-center mt-4">
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
