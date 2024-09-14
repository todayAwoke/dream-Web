import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import about_img from '../../assets/about.jpg';
import play_icon from '../../assets/play-icon.png';
import Title from '../Title/Title';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };
    return (
        <>
            <Title subTitle='About us' title='Who we are' />
            <motion.div
                className='story'
                initial="hidden"
                animate="visible"
                variants={fadeInUp}>
                <p>{t('Aboutparagraph')} </p>
            </motion.div>
            <div className='about' id='about'>
                <div className='about-top'>
                    <motion.div
                        className='about-title'
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h2>{t('Aboutheader')}</h2>
                    </motion.div>
                    <div className='main-content'>
                        <div className='about-left'>
                            <motion.img
                                src={about_img}
                                alt='About Us'
                                className='about-img'
                                initial={{ scale: 0 }}
                                animate={{ scale: 1, transition: { duration: 0.5 } }}
                                whileHover={{ scale: 1.05 }} // Scale up on hover
                            />
                            <motion.img
                                src={play_icon}
                                alt='Play Icon'
                                className='play-con'
                                initial={{ scale: 0 }}
                                animate={{ scale: 1, transition: { duration: 0.5, delay: 0.2 } }}
                                whileHover={{ scale: 1.1 }} // Scale up on hover
                            />
                        </div>
                        <motion.div
                            className='about-right'
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <p>{t('Aboutparagraph2')}</p>
                            <p className='second-p'>{t('Aboutparagraph3')} </p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className='about-bottom'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <div className='about-slider'>
                        <h2>{t('mesionheader')}</h2>
                        <p>{t('mesionparagraph')}</p>
                    </div>
                    <div className='about-slider'>
                        <h2>{t('visionhearder')}</h2>
                        <p>{t('visionparapraph')}</p>
                    </div>
                    <div className='about-slider'>
                        <h2 className='values'> {t('Valueheader')}</h2>
                        <p >-{t('Empowerment')}</p>
                        <p>-{t('Innovation')}</p>
                        <p>-{t('Excellence')}</p>
                        <p>-{t('Humanity')}</p>
                        <p> -{t('Quality_service')}</p>
                        <p>-{t('Accessibility')}</p>
                        <p>-{t('Inclusiveness')}</p>
                        <p>-{t('Social responsibility')}</p>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default About;