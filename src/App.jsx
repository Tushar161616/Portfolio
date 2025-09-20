import { useState } from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import Hero from './components/Herosection'
import Project from './components/Projectsection'
import Skill from './components/Skillsection'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'
import Copyright from './components/CopyRight'





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
      <Copyright />
      <Whatsapp />
       
    </>
  )
}

export default App
