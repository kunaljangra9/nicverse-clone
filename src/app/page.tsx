import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}
