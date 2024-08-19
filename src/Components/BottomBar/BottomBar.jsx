import React, { useState } from 'react'
import './BottomBar.css'
import { Link } from 'react-router-dom'

const BottomBar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='bottom-bar'>
      <div className='bottom-bar-action'>
        <Link style={{ textDecoration: 'none', color: 'black' }} to='/products'>
          <i className="fa-solid fa-house"></i>
          <p>Home</p>
        </Link>
      </div>
      <div className='bottom-bar-action'>
        <i className="fa-solid fa-cart-shopping"></i>
        <p>Shop</p>
      </div>
      <div className='bottom-bar-action'>
        <i class="fa-solid fa-circle-exclamation"></i>
        <p>About</p>
      </div>
    </div>
  )
}

export default BottomBar
