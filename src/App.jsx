import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
// import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'
import IntroAnimation from './components/IntroAnimation'

const App = () => {
 const [IntroDone, setIntroDone]  = useState(false);
  return (
    <>
    {!IntroDone && <IntroAnimation onFinsh={()=> setIntroDone(true)}/>}

    {IntroDone && (
    <div className='relative gradient-bg text-white '>
      <CustomCursor />
      {/* <ParticlesBackground /> */}

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    )}
    </>
  )
}

export default App