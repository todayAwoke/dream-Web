import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import about_img from '../../assets/about.jpg';
import play_icon from '../../assets/play-icon.png';
import Title from '../Title/Title';
import { useTranslation } from 'react-i18next';
import user_1 from '../../assets/kal.png'
import user_2 from '../../assets/bini.jpg'
import user_3 from '../../assets/baze.jpg'
import user_4 from '../../assets/AWOKE.jpg'
import user_5 from '../../assets/nati.jpg'

const people = [
    {
        name: 'Kaleab',
        role: 'Executive Manager',
        imageUrl: user_1,
    },
    {
        name: 'Biniyam',
        role: 'Administrative Assistant Manager',
        imageUrl: user_2,
    },
    {
        name: 'Bazezew',
        role: 'Human Resources Manager',
        imageUrl: user_3,
    },
    {
        name: 'Natnail',
        role: 'Operational Manager',
        imageUrl: user_5,
    },
    {
        name: 'Endale',
        role: 'Quality Assurance Manager',
        imageUrl: "",
    },
    {
        name: 'Awoke Dejenie',
        role: 'ICT & marketing Manager',
        imageUrl: user_4,
    },
];

const About = () => {
    const { t } = useTranslation();
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };
    return (
        <div className='' >
            <Title  subTitle='About us' title='Who we are' />
            <motion.div
                className='sm:px-32'
                initial="hidden"
                animate="visible"
                variants={fadeInUp}>
                    
                <p className='p-18 text-center  sm:text-xl my-10 transform transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 px-6'>{t('Aboutparagraph')} </p>
            </motion.div>
            <div className='about' id='about'>
                <div className='about-top'>
                    <motion.div
                        className='about-title'
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}>
                        <h2  className=' text-[#076e83] transform transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>{t('Aboutheader')}</h2>
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
                            {/* <h1>{t('Aboutparagraph2')}</h1> */}
                            <p className='second-p transform transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>{t('Aboutparagraph3')} </p>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className='about-bottom'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp} >
                    <div className='about-slider borderd shadow-2xl'>
                        <h2>{t('mesionheader')}</h2>
                        <p>{t('mesionparagraph')}</p>
                    </div>
                    <div className='about-slider borderd shadow-2xl'>
                        <h2>{t('visionhearder')}</h2>
                        <p>{t('visionparapraph')}</p>
                    </div>
                    <div className='about-slider borderd shadow-2xl'>
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
            {/* <div className=''> */}


            <div className="bg-white text-cray-500 py-2 sm:py-6">
                <div className="items-center justify-center  ">
                    <h2 className="text-pretty text-xl text-[#076e83] sm:text-3xl font-semibold tracking-tight sm:text-4xl">
                        Meet our leadership </h2>
                    <p className="p-18 text-center sm:text-xl my-10">
                        We’re a dynamic group of individuals who are passionate about what we do and<br /> dedicated to delivering the
                        best results for our clients.
                    </p>

                </div>
                <div className="m-auto px-10">
                <ul role="list" className="grid grid-cols-1 sm:gap-x-8 md:gap-x-20 gap-y-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-y-16 mb-12 xl:col-span-3 px-7">
                        {people.map((person) => (
                            <li key={person.name} className="bg-white rounded-2xl shadow-md p-4  cursor-pointer hover:bg-[#076e83] hover:text-white  relative transform transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">                                <div className="flex items-center gap-x-6">
                                <img alt="" src={person.imageUrl} className="h-28 sm:h-32 w-32 rounded-full" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight  md:text-xl">{person.name}</h3>
                                    <p className="text-sm sm:text font-semibold  md:text-xl">{person.role}</p>
                                </div>
                            </div>
                                {/* Social media icons */}
                                <div className="absolute sm:bottom-4 bottom-2  right-4 flex space-x-2">
                                    <a href="#" className="text-indigo-800 hover:text-white border border-indigo-500 rounded-md px-2 py-1 transition-colors duration-200 hover:bg-indigo-500">
                                        View More...
                                    </a>
                                </div>

                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </div>
    );
}

export default About;