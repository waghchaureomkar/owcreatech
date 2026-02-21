'use client'
import { motion } from 'framer-motion'
import { SiReact, SiNodedotjs, SiPython, SiMongodb, SiNextdotjs, SiTailwindcss, SiFlutter, SiDocker, SiFigma, SiTypescript, SiPostgresql, SiJavascript } from 'react-icons/si'

export default function Technologies() {
  const technologies = [
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: SiFlutter, name: 'Flutter', color: '#02569B' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-orange font-semibold text-sm uppercase tracking-wider">
            Our Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Technologies We <span className="text-gradient">Master</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, robust, and future-ready solutions
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center h-full">
                <tech.icon
                  className="text-5xl mb-3 transition-all duration-300"
                  style={{ color: tech.color }}
                />
                <p className="text-sm font-semibold text-gray-700 text-center group-hover:text-primary-orange transition-colors">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-lg">
            And many more cutting-edge technologies to bring your vision to life
          </p>
        </motion.div>
      </div>
    </section>
  )
}
