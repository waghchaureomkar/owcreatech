import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaPinterest, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { offices, contactInfo } from '@/data/company'
import { servicesNav, quickLinks, socialLinks } from '@/data/navigation'

const socialIcons = [FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaPinterest]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: "'Museo Moderno', sans-serif" }}>
                <span className="font-black tracking-tight bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">OW</span>
                <span className="text-white"> </span>
                <span className="font-light bg-gradient-to-r from-primary-blue to-blue-600 bg-clip-text text-transparent">CreaTech</span>
              </h3>
              <p className="mb-6 text-gray-400 leading-relaxed">
                Leading software development company delivering innovative solutions since 2015.
                We transform businesses with cutting-edge technology.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = socialIcons[index]
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-primary-orange rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon className="text-white" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-orange transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
              <ul className="space-y-2">
                {servicesNav.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-primary-orange transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FaPhone className="text-primary-orange mt-1 flex-shrink-0" />
                  <div>
                    {contactInfo.phones.slice(0, 2).map((p) => (
                      <p key={p.label} className="text-gray-400">{p.label}: {p.number}</p>
                    ))}
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaEnvelope className="text-primary-orange mt-1 flex-shrink-0" />
                  <a href={`mailto:${contactInfo.emails[0]}`} className="text-gray-400 hover:text-primary-orange">
                    {contactInfo.emails[0]}
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-primary-orange mt-1 flex-shrink-0" />
                  <p className="text-gray-400">
                    Mumabi, Pune, Dubai
                  </p>
                </li>
              </ul>

              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  <strong className="text-white">Business Hours:</strong><br />
                  {contactInfo.businessHours}
                </p>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h4 className="text-xl font-semibold text-white mb-6 text-center">Our Global Offices</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-5 rounded-lg hover:bg-gray-750 transition-colors duration-300 w-full sm:w-[calc(50%-12px)] lg:w-64"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-2">{office.flag}</span>
                    <h5 className="text-white font-semibold">{office.location}</h5>
                  </div>
                  <p className="text-sm text-gray-400 mb-2 leading-relaxed">{office.address}</p>
                  <a
                    href={`tel:${office.phone}`}
                    className="text-primary-orange hover:text-orange-400 text-sm font-medium flex items-center"
                  >
                    <FaPhone className="mr-2 text-xs" />
                    {office.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} OW CreaTech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-primary-orange transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="text-gray-500 hover:text-primary-orange transition-colors">
                Terms of Use
              </Link>
              <Link href="/refund-and-cancellation" className="text-gray-500 hover:text-primary-orange transition-colors">
                Refund & Cancellation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
