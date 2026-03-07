import { notFound } from 'next/navigation'
import { blogPosts, getBlogBySlug } from '@/data/blogPosts'
import BlogPostClient from './BlogPostClient'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | One Klick Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  if (!post) notFound()
  return <BlogPostClient post={post} />
}
