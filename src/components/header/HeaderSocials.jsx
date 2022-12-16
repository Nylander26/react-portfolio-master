import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
// import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/wolfgangnylandertabares" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Nylander26" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials