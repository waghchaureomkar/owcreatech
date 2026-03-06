'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingPanel from '@/components/FloatingPanel'
import Link from 'next/link'

const positions = [
  'Full Stack Developer',
  'React Native Developer',
  'UI/UX Designer',
  'Digital Marketing Executive',
  'Business Development Executive',
  'PHP / Laravel Developer',
  'Other',
]

export default function ApplyPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resumeLink: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission delay (replace with EmailJS or API call as needed)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container-custom px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apply for a <span className="text-gradient">Position</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Fill in your details below and we'll get back to you within 2 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Thank you for applying at OW CreaTech. We'll review your application and reach out within 2 business days.
                </p>
                <Link href="/career" className="btn-primary">
                  Back to Careers
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange/40 focus:border-primary-orange transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange/40 focus:border-primary-orange transition"
                    />
                  </div>
                </div>

                {/* Phone + Position */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange/40 focus:border-primary-orange transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position Applied For <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="position"
                      required
                      value={form.position}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-orange/40 focus:border-primary-orange transition bg-white"
                    >
                      <option value="">Select a position</option>
                      {positions.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Resume Link */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume / Portfolio Link <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    name="resumeLink"
                    required
                    value={form.resumeLink}
                    onChange={handleChange}
                    placeholder="https://drive.google.com/... or LinkedIn profile URL"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange/40 focus:border-primary-orange transition"
                  />
                  <p className="text-xs text-gray-400 mt-1">Share a Google Drive, Dropbox, or LinkedIn link to your resume.</p>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter / Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about yourself, your experience, and why you'd be a great fit at OW CreaTech..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange/40 focus:border-primary-orange transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full text-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>

                <p className="text-center text-sm text-gray-400">
                  Want to see all open positions?{' '}
                  <Link href="/career" className="text-primary-orange hover:underline">
                    View Careers
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <FloatingPanel />
      <Footer />
    </main>
  )
}
