'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaRocket, FaCheckCircle } from 'react-icons/fa'
import { heroFeaturePoints } from '@/data/stats'

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 w-auto min-w-full h-auto min-h-full -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
          src="/images/herovid.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
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
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🚀 AI-Powered Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Transform Your Business with{' '}
              <span className="text-gradient">AI & Custom Software</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
            >
              Leading software development company delivering innovative web, mobile, and AI solutions
              to help businesses scale and succeed in the digital era.
            </motion.p>

            {/* Feature Points */}
            <motion.div
              variants={fadeInUp}
              className="space-y-3 mb-8"
            >
              {heroFeaturePoints.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 justify-center lg:justify-start">
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  <span className="text-white/90 font-medium">{feature}</span>
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
            <div className="relative w-full h-[480px] md:h-[580px]">
              {/* Hero Vector Image */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center px-4"
              >
                <Image
                  src="/images/heroVector.png"
                  alt="Hero Illustration"
                  fill
                  className="object-contain scale-110"
                  priority
                />
              </motion.div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-36 left-0 bg-white p-4 rounded-xl shadow-lg z-10"
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
                className="absolute bottom-16 right-0 bg-white p-4 rounded-xl shadow-lg z-10"
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
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
