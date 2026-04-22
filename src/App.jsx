import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Projects from '@/pages/Projects'
import Pricing from '@/pages/Pricing'
import Quote from '@/pages/Quote'
import Contact from '@/pages/Contact'
import SeoServices from '@/pages/SeoServices'
import Automation from '@/pages/Automation'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/projeler" element={<Projects />} />
          <Route path="/fiyatlar" element={<Pricing />} />
          <Route path="/teklif" element={<Quote />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/seo-hizmetleri" element={<SeoServices />} />
          <Route path="/otomasyon" element={<Automation />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  )
}