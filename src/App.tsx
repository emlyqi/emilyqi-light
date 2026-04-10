import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './sections/Navbar.tsx'
import About from './sections/About.tsx'
import Projects from './sections/Projects.tsx'
import Fun from './sections/Fun.tsx'
import Footer from './sections/Footer.tsx'

function Home() {
  return (
    <>
      <About />
      <Projects />
    </>
  )
}

function App() {
  const [showMobileBanner, setShowMobileBanner] = useState(false)
  return (
    <>
      <Navbar />
      {showMobileBanner && (
        <div className="mobile-banner">
          <span>not fully optimized for mobile yet - sorry!</span>
          <button className="mobile-banner__close" aria-label="dismiss mobile notice" onClick={() => setShowMobileBanner(false)}>×</button>
        </div>
      )}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fun" element={<Fun />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
