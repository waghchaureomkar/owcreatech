# OW CreaTech - Software Development Company Website

Modern, responsive website built with Next.js, inspired by professional software company websites

## 🚀 Features

- ✅ **Next.js 14+** with App Router
- ✅ **JavaScript** (no TypeScript)
- ✅ **Tailwind CSS** for styling
- ✅ **Framer Motion** for smooth animations
- ✅ **Fully Responsive** - Mobile, Tablet, Desktop
- ✅ **React Hook Form** for form validation
- ✅ **Modern UI/UX** with gradient effects
- ✅ **SEO Optimized** with metadata
- ✅ **Fast Performance** with Turbopack

## 📁 Project Structure

```
ezulix/
├── app/
│   ├── about/
│   │   └── page.js          # About Us page
│   ├── portfolio/
│   │   └── page.js          # Portfolio/Projects page
│   ├── contact/
│   │   └── page.js          # Contact page
│   ├── layout.js            # Root layout
│   ├── page.js              # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.js            # Navigation with mobile menu
│   ├── Hero.js              # Hero section with animations
│   ├── Footer.js            # Footer with office locations
│   ├── FloatingPanel.js     # Floating inquiry form
│   ├── Services.js          # Services section
│   ├── Stats.js             # Statistics section
│   └── Technologies.js      # Tech stack display
├── public/
│   └── images/              # Image assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json
```

## 🎨 Pages

### Home Page (/)
- Hero section with animated elements
- Stats showcase (1500+ projects, 10+ years, etc.)
- Services grid with hover effects
- Technology stack display
- Floating inquiry panel

### About Us (/about)
- Company overview
- Mission & Vision
- SMART values (Simplify, Managerial, Authentic, Reliable, Time-Bound)
- Team showcase
- Company statistics

### Portfolio (/portfolio)
- Tab-based project filtering
- Project cards with categories
- Technologies and deliverables display
- Interactive animations

### Contact (/contact)
- Contact form with validation
- Multiple office locations (India, UK, UAE)
- Business hours
- Contact information

## 🛠️ Technologies Used

- **Next.js 16.1.6** - React framework
- **React 19.2.4** - UI library
- **Tailwind CSS 4.1.18** - Utility-first CSS
- **Framer Motion 12.34.0** - Animation library
- **React Hook Form 7.71.1** - Form handling
- **React Icons 5.5.0** - Icon library
- **Swiper 12.1.0** - Carousel/slider

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open browser and visit:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📱 Mobile Responsive

All components are fully responsive:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

Features:
- Mobile hamburger menu
- Touch-friendly interactions
- Optimized layouts for all screen sizes
- Responsive typography and spacing

## 🎯 Key Components

### Navbar
- Sticky navigation
- Dropdown menus for Services & Solutions
- Mobile hamburger menu with smooth animations
- Scroll-based background change

### Hero Section
- Animated text and elements
- Floating cards with loop animations
- Call-to-action buttons
- Gradient backgrounds

### FloatingPanel
- Fixed inquiry button (desktop & mobile)
- Sliding panel form
- Form validation with React Hook Form
- Success message animation

### Footer
- Multi-location office information
- Quick links and services
- Social media links
- Company contact details

## 🎨 Color Scheme

```css
Primary Orange: #f58634
Primary Blue: #1263f7
Gradients: orange to blue combinations
```

## ⚡ Performance Features

- Turbopack for fast development
- Optimized images
- CSS animations instead of heavy libraries
- Code splitting with Next.js App Router
- Lazy loading components

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🔗 Pages & Routes

- `/` - Home
- `/about` - About Us
- `/portfolio` - Portfolio/Projects
- `/contact` - Contact Us
- `/services/[slug]` - Individual service pages (to be added)
- `/solutions/[slug]` - Solution pages (to be added)

## 🚧 Future Enhancements

- [ ] Add individual service pages
- [ ] Add solution pages (Restaurant Management, CRM, etc.)
- [ ] Implement blog functionality
- [ ] Add career page with job listings
- [ ] Integrate backend API for forms
- [ ] Add testimonials carousel
- [ ] Implement case studies detail pages
- [ ] Add Google Maps for office locations
- [ ] Integrate analytics
- [ ] Add multilingual support

## 📄 License

This project is for educational purposes.

## 👨‍💻 Developer

Built with ❤️ using Next.js and Tailwind CSS

---

**Note:** This is a demo project inspired by ezulix.com. All content is for demonstration purposes only.
