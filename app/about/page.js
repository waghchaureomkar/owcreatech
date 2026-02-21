import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingPanel from '@/components/FloatingPanel'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - OW CreaTech',
  description: 'Learn about OW CreaTech - Leading software development company since 2015',
}

export default function About() {
  const team = [
    { name: 'Arvind Saini', role: 'Founder & CEO', emoji: '👨‍💼' },
    { name: 'Mahesh Sharma', role: 'Founder & MD', emoji: '👨‍💻' },
    { name: 'Software Team', role: 'Development Manager', emoji: '💻' },
    { name: 'Android Team', role: 'Mobile Lead', emoji: '📱' },
    { name: 'Creative Team', role: 'Design Head', emoji: '🎨' },
    { name: 'Marketing Team', role: 'Digital Marketing', emoji: '📊' },
  ]

  const values = [
    { letter: 'S', word: 'Simplify', description: 'We simplify complex problems' },
    { letter: 'M', word: 'Managerial', description: 'Expert management approach' },
    { letter: 'A', word: 'Authentic', description: 'Genuine and transparent' },
    { letter: 'R', word: 'Reliable', description: 'You can count on us' },
    { letter: 'T', word: 'Time-Bound', description: 'Delivered on schedule' },
  ]

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container-custom px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="font-black tracking-tight bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent" style={{ fontFamily: "'Museo Moderno', sans-serif" }}>OW</span>
              {' '}
              <span className="font-light bg-gradient-to-r from-primary-blue to-blue-600 bg-clip-text text-transparent" style={{ fontFamily: "'Museo Moderno', sans-serif" }}>CreaTech</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Established in 2015, OW CreaTech started as a web development company
              in Jaipur and evolved into a comprehensive IT solutions provider serving multiple
              industries including e-commerce, fintech, and digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                We commit to using innovation to help clients' enterprises flourish,
                emphasizing cutting-edge solutions and customer satisfaction. Our goal
                is to deliver transformative technology that drives real business results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become India's top software firm by supporting clients' digital
                transformation and providing competitive advantages through innovative
                technology solutions and exceptional service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SMART Values */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">SMART</span> Values
            </h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {value.letter}
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{value.word}</h3>
                <p className="text-gray-600 text-sm text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1500+', label: 'Projects Delivered' },
              { value: '10+', label: 'Years Experience' },
              { value: '95%', label: 'Client Retention' },
              { value: '99%', label: 'Expert Team' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-5xl font-bold text-gradient mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-gray-600 text-lg">Data-driven and perceptive IT experts</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-orange to-primary-blue">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital transformation goals
          </p>
          <Link href="/contact" className="bg-white text-primary-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Get Free Consultation
          </Link>
        </div>
      </section>

      <FloatingPanel />
      <Footer />
    </main>
  )
}
