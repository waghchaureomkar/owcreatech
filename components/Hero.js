'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaCheckCircle } from 'react-icons/fa'

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={fadeInUp}
              className="inline-block mb-4"
            >
              <span className="bg-orange-100 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold">
                🚀 AI-Powered Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Transform Your Business with{' '}
              <span className="text-gradient">AI & Custom Software</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Leading software development company delivering innovative web, mobile, and AI solutions
              to help businesses scale and succeed in the digital era.
            </motion.p>

            {/* Feature Points */}
            <motion.div
              variants={fadeInUp}
              className="space-y-3 mb-8"
            >
              {[
                '10+ Years of Experience',
                '1500+ Projects Delivered',
                '95% Client Retention Rate',
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 justify-center lg:justify-start">
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact" className="btn-primary flex items-center justify-center space-x-2">
                <span>Get Free Consultation</span>
                <FaRocket />
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent border-2 border-primary-orange text-primary-orange px-6 py-3 rounded-lg hover:bg-primary-orange hover:text-white transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Illustration/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              {/* Placeholder for illustration - you can add an image here */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-primary-blue rounded-3xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4">💻</div>
                    <h3 className="text-2xl font-bold mb-2">Innovation</h3>
                    <p className="text-white/90">Powered by Technology</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Success Rate</p>
                    <p className="text-xl font-bold text-gray-900">99%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -right-10 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Fast Delivery</p>
                    <p className="text-xl font-bold text-gray-900">24/7</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
