import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingPanel from '@/components/FloatingPanel'
import Link from 'next/link'
import { techCategories } from '@/data/technologyPage'

export const metadata = {
  title: 'Technology Stack | OW CreaTech',
  description: 'Explore the cutting-edge technologies OW CreaTech uses — React, Node.js, Flutter, AWS, AI/ML, and more across frontend, backend, mobile, and cloud.',
}

export default function TechnologyPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container-custom px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Technologies We <span className="text-gradient">Work With</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We leverage industry-leading technologies to build fast, scalable, and future-proof
              digital solutions for businesses across the globe.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {techCategories.map((cat, catIndex) => (
            <div key={catIndex} className="mb-16 last:mb-0">

              {/* Category Heading */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{cat.category}</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary-orange to-primary-blue rounded-full" />
              </div>

              {/* Tech List */}
              <div className="space-y-10">
                {cat.technologies.map((tech, techIndex) => {
                  const Icon = tech.icon
                  return (
                    <div key={techIndex} className="flex items-start gap-6">
                      {/* Icon Circle */}
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${tech.color}22` }}
                      >
                        <Icon className="text-4xl" style={{ color: tech.color }} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                        <p className="text-gray-600 leading-relaxed text-base">{tech.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {catIndex < techCategories.length - 1 && (
                <div className="border-b border-gray-100 mt-16" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-orange to-primary-blue">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Have a Project in Mind?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss the right technology stack for your specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              Get Free Consultation
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      <FloatingPanel />
      <Footer />
    </main>
  )
}
