import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home