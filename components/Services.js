'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaLaptopCode, FaMobileAlt, FaRobot, FaBullhorn, FaShoppingCart, FaDatabase } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: FaLaptopCode,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and technologies for optimal performance.',
      link: '/services/web-development',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experience.',
      link: '/services/mobile-app',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaRobot,
      title: 'AI & ML Solutions',
      description: 'Intelligent automation and machine learning solutions to transform your business operations.',
      link: '/services/ai-ml',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FaBullhorn,
      title: 'Digital Marketing',
      description: 'Data-driven digital marketing strategies to boost your online presence and ROI.',
      link: '/services/digital-marketing',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with secure payment gateways and inventory management.',
      link: '/services/ecommerce',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaDatabase,
      title: 'Software Development',
      description: 'Enterprise-grade custom software solutions tailored to your business requirements.',
      link: '/services/software-development',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-orange font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the modern marketplace
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={service.link}>
                <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full cursor-pointer overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  {/* Icon */}
                  <div className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-3xl text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-primary-orange font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/contact" className="btn-primary inline-block">
            Discuss Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
