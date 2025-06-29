import Hero from '@/components/Hero'
import BrandMission from '@/components/BrandMission'
import ProductGallery from '@/components/ProductGallery'
import NatalieSection from '@/components/NatalieSection'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <BrandMission />
      <ProductGallery />
      <NatalieSection />
      <Products />
      <Testimonials />
      <Footer />
    </main>
  )
}