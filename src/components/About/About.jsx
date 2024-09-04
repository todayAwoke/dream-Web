import React, { useState } from 'react';
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'
const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about-top'>
                <div className='about-title'>
                    <h3>About us</h3>
                    <h2>Dream tutor and training Services</h2>
                </div>
                <div className='main-content'>
                    <div className='about-left'>
                        <img src={about_img} alt='' className='about-img' />
                        <img src={play_icon} alt='' className='play-con' />
                    </div>
                    <div className='about-right'>
                        <p>The Dream Tutorial and Training Service, located in Addis Ababa, Ethiopia, aims to revolutionize
                            the educational experience by providing tailored tutoring and skill development programs.
                            Focused on enhancing academic performance and fostering 21st-century skills, the service offers a range
                            of educational support, including home tutorials, group tutoring, assignment assistance, and vocational training.
                        </p>
                        <p className='second-p'>With a vision to empower students and contribute to Ethiopia's socio-economic progress, the organization emphasizes quality assurance,
                            innovative learning experiences, and equitable access to education. Its structured approach includes various aspects such as recruitment, marketing strategies,
                            competitive analysis, and financial management, all designed to create a sustainable impact and address the diverse needs of students, particularly those from
                            underprivileged backgrounds.</p>
                    </div>
                </div>
            </div>

            <div className='about-bottom'>
                <div className='about-slider'>
                    <h2>Our Mission</h2>
                    <p>To be the leading provider of quality education and skill development in Ethiopia, empowering
                        students to reach their full potential and contribute to the nation’s socio- economic progress.</p>
                </div>
                <div className='about-slider'>
                    <h2> Our Vision</h2>
                    <p>To revolutionize the educational landscape in Ethiopia by delivering innovative and engaging
                        learning experiences, fostering 21 st
                        century skills, and providing equitable access to educational
                        opportunities for all students.</p>
                </div>
                <div className='about-slider'>
                    <h2> Our Values</h2>
                    <p>The values are the guidelines and principles of the agency which effectively explain the overall
                        operations, tasks and services of the entity.</p>
                </div>
            </div>
        </div>
    )
}

export default About
