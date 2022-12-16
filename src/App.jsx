import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particlesOptions from './particles.json';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <>
      <Particles options={particlesOptions} init={particlesInit} />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App