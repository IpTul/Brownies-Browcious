import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/brownies.png'
import ig_logo from '../Assets/instagram.png'
import wa_logo from '../Assets/whatsapp.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="footer-logo" />
        <p>BROWNIES BROWCIOUS</p>
      </div>
      <ul className="footer-links">
        <li>About Us</li>
        <li>Products</li>
        <li>Contact</li>
        <li>Alamat</li>
      </ul>
      <div className="footer-social-icon">
        <a href='https://www.instagram.com/' target='_blank'><div className="footer-icons-container">
          <img src={ig_logo} alt="instagram" />
        </div></a>
        <div className="footer-icons-container">
          <img src={wa_logo} alt="whatsapp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
