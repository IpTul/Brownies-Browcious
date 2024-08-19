import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


import logo from '../Assets/brownies.png'
import cart_icon from '../Assets/cart.png'
import menu_bar from '../Assets/menu.png'
import close_menu_bar from '../Assets/close-menu.png'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    // Navbar
    <div className='navbar' >
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>BROWNIES BROWCIOUS</p>
      </div>

      {/* Menu */}
      <ul className="nav-menu" >
        <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("products") }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/products'>Product</Link>{menu === "products" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("about") }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/about'>About</Link>{menu === "about" ? <hr /> : <></>}</li>
      </ul >

      {/* Button Login and Cart */}
      <div className="nav-login-cart" >
        <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
        <div className="nav-cart-count">0</div>
        <Link to='/login'><button>Login</button></Link>
        {/* Mobile */}
        <div className="nav-login-account">
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/login'><i className='fa-regular fa-user fa-2x'></i></Link>
        </div>
      </div>

      {/* Mobile */}
      {/* <div className="menu-bar" onClick={handleClick}>
        <div >
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div> */}
    </div >
  )
}

export default Navbar
