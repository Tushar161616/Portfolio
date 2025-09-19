import { useState } from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import Hero from './components/Herosection'
import Project from './components/Projectsection'
import Skill from './components/Skillsection'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'





function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <Skill />
      <About />
      <Contact />
      <Footer />
       
    </>
  )
}

export default App
