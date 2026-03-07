'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingPanel from '@/components/FloatingPanel'
import Link from 'next/link'

export default function ServicePageClient({ service }) {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container-custom px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">{service.title}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {service.hero.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent border-2 border-primary-orange text-primary-orange px-6 py-3 rounded-lg hover:bg-primary-orange hover:text-white transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">{service.title}</span> Services
            </h2>
            <p className="text-gray-600 text-lg">Comprehensive solutions tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.subServices.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-gray-600 text-lg">A proven approach that delivers results every time</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-orange to-primary-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                {i < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary-orange to-primary-blue opacity-30" />
                )}
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We <span className="text-gradient">Use</span>
            </h2>
            <p className="text-gray-600 text-lg">Industry-leading tools and frameworks for best results</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {service.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-5 py-2 bg-gradient-to-r from-blue-50 to-orange-50 border border-gray-200 text-gray-700 font-semibold rounded-full text-sm hover:border-primary-orange hover:text-primary-orange transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-gradient">One Klick</span>
            </h2>
            <p className="text-gray-600 text-lg">What makes us the right partner for your project</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.whyUs.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <span className="text-primary-orange text-xl flex-shrink-0">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-gradient-to-r from-primary-orange to-primary-blue">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your {service.title} Project?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and build something amazing together.
            Free consultation, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <FloatingPanel />
      <Footer />
    </main>
  )
}
