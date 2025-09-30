import { useState } from 'react'
import Navbar from './sections/Navbar.tsx'
import About from './sections/About.tsx'
import Projects from './sections/Projects.tsx'
import Footer from './sections/Footer.tsx'

function App() {
  const [showMobileBanner, setShowMobileBanner] = useState(true)
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
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
