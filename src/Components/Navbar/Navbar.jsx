import React from 'react'
import './Navbar.css'

import logo from '../Assets/brownies.png'
import cart_icon from '../Assets/cart.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Product</li>
        <li>About</li>
      </ul>
      <div className="nav-login-cart">

      </div>
    </div>
  )
}

export default Navbar
