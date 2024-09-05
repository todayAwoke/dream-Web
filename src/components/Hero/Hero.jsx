import React, { useState } from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
    return (
        <div className='hero container' id='hero'>
            <div className='hero-text'>
                <div className='left-ballon'>
                    <p><span className='discount'> 50% OFF</span> <br />Discount</p>
                </div>
                <div className='right-ballon'>
                    <p><span className='discount'> 50% OFF</span> <br />Discount</p>
                </div>
                <h1>We are Dream team for dreamer</h1>
                <p className='hero-para'>the leading provider of quality education and skill development in Ethiopia, empowering
                    students to reach their full potential and contribute to the nation’s socio- economic progress.and providing equitable access to educational
                    opportunities for all students</p>
                <button className='btn'>Explore More <img src={dark_arrow} alt='btn' className="arrow" /> </button>
            </div>
        </div >
    )
}

export default Hero