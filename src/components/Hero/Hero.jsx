import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AAU from '../../assets/AAU.png';
import Abrehote_Library2 from '../../assets/Abrehot_Library2.png';
import Abrehote1 from '../../assets/Abrehot1.png';
import Abrehote2 from '../../assets/Abrehot2.png';
import Science_Museum1 from '../../assets/Science_Museum1.png';
import Science_Museum2 from '../../assets/Science_Museum2.png';
import Science_Museum3 from '../../assets/Science_Museum3.png';

const Hero = () => {
    const sliders = [
        AAU,
        Abrehote_Library2,
        Abrehote1,
        Abrehote2,
        Science_Museum1,
        Science_Museum2,
        Science_Museum3,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [sliders.length]);

    const { t } = useTranslation();
    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <div className='hero container' id='hero' style={{ backgroundImage: `url(${sliders[currentIndex]})` }}>

            <div className='hero-overlay'>
                <div className='hero-text'>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        {t("Slogan")}
                    </motion.h1>
                    <Link to='https://forms.gle/aRgQFXU7x1auJGU76'>
                        <button className='btn' type='button'>
                            {t("Apply-Tutor")}
                            <img src={dark_arrow} alt='Arrow pointing right' className="arrow" />
                        </button>
                    </Link>
                    <Link to='https://forms.gle/BbYCT3uCRzGRqWpL7'>
                        <button className='btn' id='right-btn' type='button'>
                            {t("apply_family")}
                            <img src={dark_arrow} alt='Arrow pointing right' className="arrow" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;