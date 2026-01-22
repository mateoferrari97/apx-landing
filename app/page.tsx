import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ImageStrip from '@/components/ImageStrip'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="w-full m-0 p-0">
      <Header />
      <Hero />
      <AboutSection />
      <ImageStrip />
      <Clients />
      <Contact />
    </main>
  )
}
