import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingPanel from '@/components/FloatingPanel'
import Link from 'next/link'
import { jobOpenings } from '@/data/careers'

export const metadata = {
  title: 'Careers | One Klick',
  description: 'Join the One Klick team! Explore exciting career opportunities in software development, design, digital marketing, and more.',
}

const openings = jobOpenings.filter((job) => job.active)

const perks = [
  { icon: '💰', title: 'Competitive Salary', description: 'Industry-best compensation packages with performance bonuses and annual increments.' },
  { icon: '📈', title: 'Career Growth', description: 'Clear career paths with mentorship, training, and opportunities to lead your own projects.' },
  { icon: '🏠', title: 'Remote Flexibility', description: 'Hybrid and remote work options available for most roles based on performance.' },
  { icon: '🎓', title: 'Learning Budget', description: 'Annual learning allowance for courses, certifications, and conferences.' },
  { icon: '🎉', title: 'Fun Culture', description: 'Regular team outings, hackathons, and a collaborative, inclusive work environment.' },
  { icon: '🌍', title: 'Global Exposure', description: 'Work on international projects for clients in India, UK, UAE, and beyond.' },
]

export default function CareerPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container-custom px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Be part of a passionate team building innovative digital solutions for clients across the globe.
              We're always looking for talented people to grow with us.
            </p>
            <a href="#openings" className="btn-primary">
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work at <span className="text-gradient">One Klick</span>?
            </h2>
            <p className="text-gray-600 text-lg">We invest in our people as much as we invest in our products.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{perk.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{perk.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Current <span className="text-gradient">Openings</span>
            </h2>
            <p className="text-gray-600 text-lg">Find the role that matches your skills and passion.</p>
          </div>

          <div className="space-y-6">
            {openings.map((job, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary-orange/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                      {job.emoji}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                        <span>📍 {job.location}</span>
                        <span>⏱️ {job.experience}</span>
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{job.type}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, j) => (
                          <span key={j} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    href={job.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-shrink-0 text-center"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Application */}
      <section className="section-padding bg-gradient-to-r from-primary-orange to-primary-blue">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Don't See Your Role?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            We're always open to passionate people. Send us your resume and we'll reach out when the right opportunity comes up.
          </p>
          <Link
            href="/career/apply"
            className="bg-white text-primary-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Send Your Resume
          </Link>
        </div>
      </section>

      <FloatingPanel />
      <Footer />
    </main>
  )
}
