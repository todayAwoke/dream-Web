import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { useNavigate } from 'react-router-dom';
// React
//import { motion } from "framer-motion"
// // React Server Components
// import * as motion from "framer-motion/client"
const Hero = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/dream-Web/register');
    };

    return (
        <div className='hero container' id='hero'>
            <div className='hero-text'>
                <div className='left-ballon'>
                    <p><span className='discount'>50% OFF</span><br />Discount</p>
                </div>
                <div className='right-ballon'>
                    <p><span className='discount'>50% OFF</span><br />Discount</p>
                </div>
                <h1>We are Dream team for dreamers</h1>
                <p className='hero-para'>
                    The leading provider of quality education and skill development in Ethiopia, empowering students to reach their full potential and contribute to the nation’s socio-economic progress, and providing equitable access to educational opportunities for all students.
                </p>
                <button className='btn' onClick={handleRegister}>
                    Apply as a Tutor
                    <img src={dark_arrow} alt='btn' className="arrow" />
                </button>
            </div>
        </div>
    );
};

export default Hero;