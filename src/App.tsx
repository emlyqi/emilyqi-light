import { useState } from 'react'
import Navbar from './sections/Navbar.tsx'
import About from './sections/About.tsx'
import Projects from './sections/Projects.tsx'
import Footer from './sections/Footer.tsx'

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
