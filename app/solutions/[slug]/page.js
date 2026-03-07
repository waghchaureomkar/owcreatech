import { notFound } from 'next/navigation'
import { solutionPages, getSolutionBySlug } from '@/data/solutionPages'
import ServicePageClient from '@/app/services/[slug]/ServicePageClient'

export function generateStaticParams() {
  return solutionPages.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) return {}
  return {
    title: `${solution.title} | One Klick`,
    description: solution.metaDescription,
  }
}

export default async function SolutionPage({ params }) {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) notFound()
  return <ServicePageClient service={solution} />
}
