import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Hero = () => {
    const { t } = useTranslation();
    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    return (
        <div className='hero container' id='hero'>
            <div className='hero-text'>
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    {t("Slogan")}
                </motion.h1>
                {/* <motion.p
                    className='hero-para'
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    {t("hero-para")}
                </motion.p> */}
                <Link to='https://forms.gle/aRgQFXU7x1auJGU76'>
                    <button className='btn' type='submit'>
                        {t("Apply-Tutor")}
                        <img src={dark_arrow} alt='btn' className="arrow" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;