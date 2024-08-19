import React, { useState } from 'react'
import './Hero.css'

import wave from '../Assets/wave.png'
import arrow from '../Assets/right-arrow.png'
import new_brownies from '../Assets/new-brownies-shadow.png'
import { Link } from 'react-router-dom'

const Hero = () => {

  const [menu, setMenu] = useState("home");


  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW PRODUCT</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            {/* <img src={wave} alt="new" /> */}
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <Link style={{ textDecoration: 'none' }} to='/products'>
          <div className="hero-latest-btn">
            <div>Order Now</div>
            <img src={arrow} alt="new" />
          </div></Link>
      </div>
      <div className="hero-right">
        <img src={new_brownies} alt="new" />
      </div>
    </div>
  )
}

export default Hero
