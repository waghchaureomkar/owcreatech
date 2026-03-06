import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingPanel from '@/components/FloatingPanel'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | OW CreaTech',
  description: 'Stay updated with the latest insights on software development, web design, digital marketing, and technology trends from OW CreaTech.',
}

import { blogPosts } from '@/data/blogPosts'

const postColors = [
  { color: 'bg-blue-50 border-blue-200', tag: 'bg-blue-100 text-blue-700' },
  { color: 'bg-purple-50 border-purple-200', tag: 'bg-purple-100 text-purple-700' },
  { color: 'bg-orange-50 border-orange-200', tag: 'bg-orange-100 text-orange-700' },
  { color: 'bg-green-50 border-green-200', tag: 'bg-green-100 text-green-700' },
  { color: 'bg-pink-50 border-pink-200', tag: 'bg-pink-100 text-pink-700' },
  { color: 'bg-cyan-50 border-cyan-200', tag: 'bg-cyan-100 text-cyan-700' },
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
            {blogPosts.map((post, i) => {
              const { color, tag } = postColors[i % postColors.length]
              return (
                <article
                  key={i}
                  className={`border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${color}`}
                >
                  {/* Thumbnail */}
                  <div className="h-48 bg-gradient-to-br from-primary-orange/10 to-primary-blue/10 flex items-center justify-center">
                    <span className="text-7xl">{post.emoji}</span>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-white">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.tagColor || tag}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug hover:text-primary-orange transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <Link href={`/blog/${post.slug}`} className="text-primary-orange text-sm font-semibold hover:underline">
                        Read More &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
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
