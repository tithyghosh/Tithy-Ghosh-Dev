import React from 'react'
import Navbar from './Features/Navbar/Navbar'
import Hero from './Features/Hero/Hero'
import About from './Features/AboutMe/About'

const App = () => {
  return (
    <div className='hero-glow w-full h-full '>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
