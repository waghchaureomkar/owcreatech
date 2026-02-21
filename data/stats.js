import { FaProjectDiagram, FaUsers, FaAward, FaClock } from 'react-icons/fa'

// Full stats with icons (used in Stats component)
export const stats = [
  {
    icon: FaClock,
    value: '10+',
    label: 'Years Experience',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: FaProjectDiagram,
    value: '1500+',
    label: 'Projects Delivered',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: FaUsers,
    value: '95%',
    label: 'Client Retention',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: FaAward,
    value: '99%',
    label: 'Expert Team',
    color: 'from-purple-500 to-pink-500'
  }
]

// Simple stats without icons (used in About page & Industries)
export const statsSimple = [
  { value: '1500+', label: 'Projects Delivered' },
  { value: '10+', label: 'Years Experience' },
  { value: '95%', label: 'Client Retention' },
  { value: '99%', label: 'Expert Team' },
]

// Hero feature points
export const heroFeaturePoints = [
  '10+ Years of Experience',
  '1500+ Projects Delivered',
  '95% Client Retention Rate',
]
