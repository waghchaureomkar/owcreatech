import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingPanel from '@/components/FloatingPanel'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | OW CreaTech',
  description: 'Stay updated with the latest insights on software development, web design, digital marketing, and technology trends from OW CreaTech.',
}

const blogPosts = [
  {
    category: 'Web Development',
    title: 'Why Next.js is the Best Framework for Modern Web Apps in 2025',
    excerpt: 'Next.js has revolutionized the way developers build web applications. From server-side rendering to static site generation, explore why Next.js leads the pack.',
    date: 'March 5, 2025',
    readTime: '5 min read',
    emoji: '⚛️',
    color: 'bg-blue-50 border-blue-200',
    tag: 'bg-blue-100 text-blue-700',
  },
  {
    category: 'Mobile Development',
    title: 'React Native vs Flutter: Which Should You Choose in 2025?',
    excerpt: 'Both React Native and Flutter are excellent choices for cross-platform mobile development. We break down the pros, cons, and ideal use cases for each framework.',
    date: 'February 28, 2025',
    readTime: '7 min read',
    emoji: '📱',
    color: 'bg-purple-50 border-purple-200',
    tag: 'bg-purple-100 text-purple-700',
  },
  {
    category: 'Digital Marketing',
    title: '10 SEO Strategies That Actually Work for SaaS Businesses',
    excerpt: 'Search engine optimization for SaaS is different from traditional SEO. Discover the top strategies that drive organic growth for software companies in competitive niches.',
    date: 'February 20, 2025',
    readTime: '8 min read',
    emoji: '🔍',
    color: 'bg-orange-50 border-orange-200',
    tag: 'bg-orange-100 text-orange-700',
  },
  {
    category: 'AI & Technology',
    title: 'How to Integrate ChatGPT into Your Business Applications',
    excerpt: 'AI integration is no longer a luxury — it\'s a competitive necessity. Learn how businesses are using OpenAI APIs to automate processes and enhance user experiences.',
    date: 'February 15, 2025',
    readTime: '6 min read',
    emoji: '🤖',
    color: 'bg-green-50 border-green-200',
    tag: 'bg-green-100 text-green-700',
  },
  {
    category: 'UI/UX Design',
    title: 'The Psychology of Color in UI Design: A Complete Guide',
    excerpt: 'Color is one of the most powerful tools in a designer\'s toolkit. Understand how color choices affect user behavior, trust, and conversion rates in digital products.',
    date: 'February 10, 2025',
    readTime: '9 min read',
    emoji: '🎨',
    color: 'bg-pink-50 border-pink-200',
    tag: 'bg-pink-100 text-pink-700',
  },
  {
    category: 'Software Development',
    title: 'Microservices Architecture: When to Use It and When to Avoid It',
    excerpt: 'Microservices promise scalability and flexibility, but they also add complexity. This guide helps you decide if microservices are the right architecture for your project.',
    date: 'February 3, 2025',
    readTime: '10 min read',
    emoji: '🏗️',
    color: 'bg-cyan-50 border-cyan-200',
    tag: 'bg-cyan-100 text-cyan-700',
  },
]

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container-custom px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-600">
              Insights, tutorials, and industry news on software development, design, and digital growth.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article
                key={i}
                className={`border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${post.color}`}
              >
                {/* Thumbnail */}
                <div className="h-48 bg-gradient-to-br from-primary-orange/10 to-primary-blue/10 flex items-center justify-center">
                  <span className="text-7xl">{post.emoji}</span>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.tag}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug hover:text-primary-orange transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-primary-orange text-sm font-semibold hover:underline cursor-pointer">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Note */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">More articles coming soon. Subscribe to stay updated.</p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-orange to-primary-blue">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Get the latest insights on tech, design, and digital growth delivered to your inbox.
          </p>
          <Link href="/contact" className="bg-white text-primary-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Get In Touch
          </Link>
        </div>
      </section>

      <FloatingPanel />
      <Footer />
    </main>
  )
}
