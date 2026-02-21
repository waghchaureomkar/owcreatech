'use client'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Industries() {
  const industries = [
    { name: 'Fintech', icon: '💰', description: 'Financial technology solutions' },
    { name: 'Healthcare', icon: '🏥', description: 'Medical & health services' },
    { name: 'E-Commerce', icon: '🛒', description: 'Online retail platforms' },
    { name: 'Education', icon: '🎓', description: 'E-learning solutions' },
    { name: 'Real Estate', icon: '🏢', description: 'Property management' },
    { name: 'Travel & Tourism', icon: '✈️', description: 'Booking & management' },
    { name: 'Food & Beverage', icon: '🍽️', description: 'Restaurant & delivery' },
    { name: 'Transportation', icon: '🚗', description: 'Logistics & mobility' },
    { name: 'Retail', icon: '🏪', description: 'Point of sale systems' },
    { name: 'Banking', icon: '🏦', description: 'Digital banking solutions' },
    { name: 'Insurance', icon: '🛡️', description: 'Policy management' },
    { name: 'Media & Entertainment', icon: '🎬', description: 'Content platforms' },
    { name: 'Manufacturing', icon: '🏭', description: 'Industrial automation' },
    { name: 'Agriculture', icon: '🌾', description: 'AgriTech solutions' },
    { name: 'Energy', icon: '⚡', description: 'Power management' },
    { name: 'Telecom', icon: '📱', description: 'Communication services' },
    { name: 'Gaming', icon: '🎮', description: 'Game development' },
    { name: 'Fashion', icon: '👔', description: 'Apparel & accessories' },
    { name: 'Sports & Fitness', icon: '⚽', description: 'Health & wellness' },
    { name: 'Legal', icon: '⚖️', description: 'Legal tech solutions' },
    { name: 'Government', icon: '🏛️', description: 'Public sector systems' },
    { name: 'Non-Profit', icon: '🤝', description: 'NGO management' },
    { name: 'Hospitality', icon: '🏨', description: 'Hotel management' },
    { name: 'Automotive', icon: '🚙', description: 'Vehicle technology' },
    { name: 'Pharma', icon: '💊', description: 'Pharmaceutical systems' },
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
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Transforming <span className="text-gradient">25+ Industries</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering tailored solutions across diverse sectors with domain expertise and innovation
          </p>
        </motion.div>

        {/* Industries Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="industries-swiper pb-12"
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  {/* Icon */}
                  <div className="text-5xl mb-4 text-center">
                    {industry.icon}
                  </div>

                  {/* Industry Name */}
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 text-center">
                    {industry.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '25+', label: 'Industries' },
            { value: '500+', label: 'Industry Experts' },
            { value: '1500+', label: 'Projects Delivered' },
            { value: '100%', label: 'Domain Coverage' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg">
              <h4 className="text-3xl font-bold text-gradient mb-2">{stat.value}</h4>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .industries-swiper .swiper-button-next,
        .industries-swiper .swiper-button-prev {
          color: #f58634;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .industries-swiper .swiper-button-next:after,
        .industries-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }

        .industries-swiper .swiper-pagination-bullet {
          background: #f58634;
          width: 10px;
          height: 10px;
        }

        .industries-swiper .swiper-pagination-bullet-active {
          background: #1263f7;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  )
}
