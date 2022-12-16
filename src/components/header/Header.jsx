import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/www-amico (1).png'
import HeaderSocial from './HeaderSocials'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Wolfgang Nylander</h1>
        <h4 className="text-light">FullStack Developer</h4>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'><BsFillArrowRightCircleFill/>  Scroll Down</a>
      </div>
    </header>
  )
}

export default Header