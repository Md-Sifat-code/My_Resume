import React from 'react'
import Hero from './Hero'
import Skills from './Skills'
import About from './About'

const Home: React.FC=()=> {
  return (
    <>
        <Hero/>
        <About/>
        <Skills/>
    </>
  )
}

export default Home