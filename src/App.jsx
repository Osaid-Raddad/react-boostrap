import { useState } from 'react'
import NavBar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import About from './components/about/About.jsx'
export default function App() {



  return (
    <>
      <NavBar />
      <Hero />
      <Portfolio />
      <About />
    </>
  )
}


