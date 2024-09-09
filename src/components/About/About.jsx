import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import about_img from '../../assets/about.jpg';
import play_icon from '../../assets/play-icon.png';
import Title from '../Title/Title';
const About = () => {
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
                <p>
                    The Dream Tutor and Training Service start its journey with the dream. in Addis Ababa Ethiopia in the year 2024 with a vision to empower students and contribute to Ethiopia's socio-economic progress.
                    By providing quality education and skill development programs.
                </p>
            </motion.div>
            <div className='about' id='about'>
                <div className='about-top'>
                    <motion.div
                        className='about-title'
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h2>Dream tutor and training Services</h2>
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
                            <p>
                                The Dream Tutorial and Training Service, located in Addis Ababa, Ethiopia, aims to revolutionize
                                the educational experience by providing tailored tutoring and skill development programs.
                                Focused on enhancing academic performance and fostering 21st-century skills, the service offers a range
                                of educational support, including home tutorials, group tutoring, assignment assistance, and vocational training.
                            </p>
                            <p className='second-p'>
                                With a vision to empower students and contribute to Ethiopia's socio-economic progress, the organization emphasizes quality assurance,
                                innovative learning experiences, and equitable access to education. Its structured approach includes various aspects such as recruitment, marketing strategies,
                                competitive analysis, and financial management, all designed to create a sustainable impact and address the diverse needs of students, particularly those from
                                underprivileged backgrounds.
                            </p>
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
                        <h2>Our Mission</h2>
                        <p>To be the leading provider of quality education and skill development in Ethiopia, empowering
                            students to reach their full potential and contribute to the nation’s socio-economic progress.</p>
                    </div>
                    <div className='about-slider'>
                        <h2> Our Vision</h2>
                        <p>To revolutionize the educational landscape in Ethiopia by delivering innovative and engaging
                            learning experiences, fostering 21st century skills, and providing equitable access to educational
                            opportunities for all students.</p>
                    </div>
                    <div className='about-slider'>
                        <h2 className='values'> Our Values</h2>
                        <p className='paragraph'>-Empowerment</p>
                        <p>-Innovation</p>
                        <p>-Excellence</p>
                        <p>-Humanity</p>
                        <p>-Quality service</p>
                        <p>-Accessibility</p>
                        <p>-Inclusiveness</p>
                        <p>-Social responsibility</p>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default About;