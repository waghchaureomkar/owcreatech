'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingPanel from '@/components/FloatingPanel'
import Link from 'next/link'

export default function BlogPostClient({ post }) {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-7xl mb-6">{post.emoji}</div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.tagColor}`}>
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span>{post.date}</span>
              <span>&bull;</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto">
            {/* Excerpt */}
            <p className="text-xl text-gray-500 italic border-l-4 border-primary-orange pl-5 mb-10 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Body */}
            <div className="space-y-6">
              {post.content.map((block, i) => {
                if (block.type === 'heading') {
                  return (
                    <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-2">
                      {block.text}
                    </h2>
                  )
                }
                return (
                  <p key={i} className="text-gray-700 leading-relaxed text-lg">
                    {block.text}
                  </p>
                )
              })}
            </div>

            {/* Back link */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <Link href="/blog" className="text-primary-orange font-semibold hover:underline">
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-orange to-primary-blue">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Let's discuss how One Klick can help you build something great.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <FloatingPanel />
      <Footer />
    </main>
  )
}
