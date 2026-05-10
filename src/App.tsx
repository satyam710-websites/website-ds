import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Verticals from './sections/Verticals'
import Platform from './sections/Platform'
import Clients from './sections/Clients'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import CookieBanner from './components/CookieBanner'

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Verticals />
        <Platform />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer onPrivacyOpen={() => setPrivacyOpen(true)} />
      <PrivacyPolicy open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <CookieBanner />
    </div>
  )
}
