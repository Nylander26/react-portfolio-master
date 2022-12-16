import React from 'react'
import './about.css'
import ME from '../../assets/Firmware-amico (2).png'
import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Year Developing Personal Projects</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>
            I'm a FullStack Developer, i've knowledge on the basis of programming as well the most known languages in this field as 
            it is HTML5, CSS3, JavaScript, PHP, i've done some personal projects with Laravel, NodeJS and React, i'm excited to keep learning 
            and getting over myself in this field
          </p>
          <div className='center__btn__about'>
            <a href="#contact" className='btn btn-primary'>Let`s Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About