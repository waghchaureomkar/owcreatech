import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import FloatingPanel from '@/components/FloatingPanel'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Technologies from '@/components/Technologies'
import Industries from '@/components/Industries'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Technologies />
      <Industries />
      <FloatingPanel />
      <Footer />
    </main>
  )
}
