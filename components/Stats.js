'use client'
import { motion } from 'framer-motion'
import { FaProjectDiagram, FaUsers, FaAward, FaClock } from 'react-icons/fa'

export default function Stats() {
  const stats = [
    {
      icon: FaClock,
      value: '10+',
      label: 'Years Experience',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FaProjectDiagram,
      value: '1500+',
      label: 'Projects Delivered',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: FaUsers,
      value: '95%',
      label: 'Client Retention',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaAward,
      value: '99%',
      label: 'Expert Team',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="text-3xl text-white" />
                </div>

                {/* Value */}
                <h3 className="text-4xl font-bold text-gray-900 text-center mb-2">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-gray-600 text-center font-medium">
                  {stat.label}
                </p>

                {/* Decorative element */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
