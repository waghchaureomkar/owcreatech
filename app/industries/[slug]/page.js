import { notFound } from 'next/navigation'
import { industryPages, getIndustryBySlug } from '@/data/industryPages'
import ServicePageClient from '@/app/services/[slug]/ServicePageClient'

export function generateStaticParams() {
  return industryPages.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) return {}
  return {
    title: `${industry.title} | OW CreaTech`,
    description: industry.metaDescription,
  }
}

export default async function IndustryPage({ params }) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) notFound()
  return <ServicePageClient service={industry} />
}
