'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useForm } from 'react-hook-form'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'
import { sendEmail } from '@/lib/emailjs'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    setError(null)

    // Send email via EmailJS
    const result = await sendEmail(data)

    setIsLoading(false)

    if (result.success) {
      console.log('Email sent successfully!', result.response)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        reset()
      }, 5000)
    } else {
      console.error('Email sending failed:', result.error)
      setError('Failed to send message. Please try again or contact us directly.')
    }
  }

  const offices = [
    {
      location: 'Jaipur (Headquarters)',
      address: '2-Shiv Vihar-A, New Sanganer Road, Mansarovar, Jaipur, Rajasthan',
      phone: '+91 7230001612',
      flag: '🇮🇳'
    },
    {
      location: 'Gurugram',
      address: '1701A, Magnum Global Park, Sector 58, Gurugram, Haryana',
      phone: '+91 7230001613',
      flag: '🇮🇳'
    },
    {
      location: 'London, UK',
      address: '71-75 Shelton Street, Covent Garden, London, WC2H 9JQ',
      phone: '+44 7956982975',
      flag: '🇬🇧'
    },
    {
      location: 'Dubai, UAE',
      address: 'Office 1105 A, Trio Tower, Al Barsha, Dubai',
      phone: '+971 525410937',
      flag: '🇦🇪'
    }
  ]

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container-custom px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600">
              Let's discuss how we can help transform your business with innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    Your message has been sent successfully. We'll get back to you within 24 hours!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:outline-none"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:outline-none"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:outline-none"
                      placeholder="+91 1234567890"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Service Type</label>
                    <select
                      {...register('service')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="software">Software Development</option>
                      <option value="ai">AI & ML Solutions</option>
                      <option value="marketing">Digital Marketing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register('message', {
                        required: 'Message is required',
                        minLength: { value: 10, message: 'Message must be at least 10 characters' }
                      })}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary-orange text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">India: +91 7230001612</p>
                    <p className="text-gray-600">UK: +44 7956982975</p>
                    <p className="text-gray-600">UAE: +971 525410937</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary-blue text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@ezulix.com</p>
                    <p className="text-gray-600">support@ezulix.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600">+91 7230001612</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">Business Hours</h3>
                <p className="text-gray-700">Monday - Friday: 10:00 AM to 07:00 PM</p>
                <p className="text-gray-600 text-sm mt-2">We respond to all inquiries within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Global <span className="text-gradient">Offices</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{office.flag}</span>
                  <h3 className="text-xl font-bold text-gray-900">{office.location}</h3>
                </div>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{office.address}</p>
                <a
                  href={`tel:${office.phone}`}
                  className="text-primary-orange font-semibold flex items-center hover:text-orange-600"
                >
                  <FaPhone className="mr-2" />
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
