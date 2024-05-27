import React from 'react'

//pages
import Start from '../Start/Start'
import Skills from '../MySkills/Skills'
import About from '../AboutMe/About'
import Projects from '../MyProjects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Start />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home