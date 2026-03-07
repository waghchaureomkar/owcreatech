import { notFound } from 'next/navigation'
import { servicePages, getServiceBySlug } from '@/data/servicePages'
import ServicePageClient from './ServicePageClient'

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: `${service.title} | One Klick`,
    description: service.metaDescription,
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()
  return <ServicePageClient service={service} />
}
