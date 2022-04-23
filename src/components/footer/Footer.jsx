import React from 'react'
import './footer.css'
import {FaFacebookF}from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">RamosH</a>
      <ul className="permalinks">
      <a  href="#" >Home</a>
      <a  href="#about"  >About</a>
      <a  href="#experience">Experience</a>
      <a  href="#services" >Services</a>
      <a  href="#testimanials" >Testimonials</a>
      <a  href="#contact">Contact</a>
      </ul>

      <div className="footer__socials">
      <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebookF/></a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'><FiInstagram/></a>
        <a href='https://twiter.com' target='_blank' rel='noopener noreferrer'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;RamosH. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer