import React from 'react'
import './footer.css'
import {IoLogoLinkedin} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>WN</a>

      <ul className="permalinks">
        <li><a href="">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/wolfgangnylandertabares/"><IoLogoLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Wolfgang Nylander. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer