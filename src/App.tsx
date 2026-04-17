import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Navbar from './sections/Navbar.tsx'
import About from './sections/About.tsx'
import Projects from './sections/Projects.tsx'
import MarkdownPage from './components/MarkdownPage.tsx'
import WordsIndex from './sections/WordsIndex.tsx'
import Footer from './sections/Footer.tsx'

function Home() {
  return (
    <>
      <About />
      <Projects />
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  const [showMobileBanner, setShowMobileBanner] = useState(false)
  return (
    <>
      <ScrollToTop />
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
          <Route path="/p/:slug" element={<MarkdownPage folder="project_pages" />} />
          <Route path="/w" element={<WordsIndex />} />
          <Route path="/w/:slug" element={<MarkdownPage folder="words" backTo="/w" />} />
          <Route path="*" element={<div style={{ margin: '4rem 0' }}><p>404 this page doesn't exist — <Link to="/" style={{ textDecoration: 'underline' }}>take me home!</Link></p></div>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
