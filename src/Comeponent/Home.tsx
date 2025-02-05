import React from 'react'
import Hero from './Hero'
import Skills from './Skills'
import About from './About'
import Projects from './Projects'

const Home: React.FC=()=> {
  return (
    <>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
    </>
  )
}

export default Home