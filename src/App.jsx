import { useState } from 'react'
import NavBar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from  './components/footer/Footer.jsx'
export default function App() {



  return (
    <>
      <NavBar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />  
    </>
  )
}


