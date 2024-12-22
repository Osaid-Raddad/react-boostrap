import { useState } from 'react'
import NavBar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from  './components/footer/Footer.jsx'
import { Routes,Route} from 'react-router-dom'
export default function App() {



  return (
    <>
      <NavBar />
      <Hero />
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />  
    </>
  )
}


