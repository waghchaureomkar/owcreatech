import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaBullhorn, FaShoppingCart, FaDatabase } from 'react-icons/fa'

// Service cards (used in Services component)
export const services = [
  {
    icon: FaLaptopCode,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and technologies for optimal performance.',
    link: '/services/web-development',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experience.',
    link: '/services/mobile-app',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: FaPaintBrush,
    title: 'Logo & Graphic Design',
    description: 'Creative logo design, brand identity, and graphic design solutions that make your brand stand out.',
    link: '/services/graphics-design',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: FaBullhorn,
    title: 'Digital Marketing',
    description: 'Data-driven digital marketing strategies to boost your online presence and ROI.',
    link: '/services/digital-marketing',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: FaShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms with secure payment gateways and inventory management.',
    link: '/services/ecommerce',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: FaDatabase,
    title: 'Software Development',
    description: 'Enterprise-grade custom software solutions tailored to your business requirements.',
    link: '/services/software-development',
    color: 'from-indigo-500 to-blue-500'
  }
]

// Service options for contact forms (used in Contact page & FloatingPanel)
export const serviceOptions = [
  { value: 'web-development', label: 'Web Development' },
  { value: 'mobile-app', label: 'Mobile App Development' },
  { value: 'software-development', label: 'Software Development' },
  { value: 'ai-ml', label: 'AI & ML Solutions' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'other', label: 'Other' },
]
