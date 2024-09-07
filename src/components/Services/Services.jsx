import React from 'react'
import './Services.css'
import program_1 from '../../assets/program_1.jpeg'
import program_2 from '../../assets/program_2.jpeg'
import program_3 from '../../assets/program_3.jpeg'
import program_4 from '../../assets/program-4.jpeg'
import program_5 from '../../assets/program-5.jpeg'
import program_6 from '../../assets/program_6.jpeg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
const Services = () => {
    return (
        <div className='services' id='services'>
            <div className='first'>
                <div className='service'>
                    <img src={program_1} alt='' />
                    <div className='caption'>
                        <img src={program_icon_1} alt='' />
                        <h3>Home tutorial</h3>
                        <p>Personalized tutoring sessions are conducted in the comfort of students' homes to enhance their learning experience</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={program_2} alt='' />
                    <div className='caption'>
                        <img src={program_icon_2} alt='' />
                        <h3>Group tutor</h3>
                        <p>Group tutoring sessions are organized based on venue availability, accommodating students of various academic levels.</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={program_3} alt='' />
                    <div className='caption'>
                        <img src={program_icon_3} alt='' />
                        <h3>Assignment assistance</h3>
                        <p>Dedicated support is provided to help students complete assignments effectively and improve their understanding of subjects.</p>
                    </div>
                </div>
            </div>
            <div className='second'>
                <div className='service'>
                    <img src={program_4} alt='' />
                    <div className='caption'>
                        <img src={program_icon_3} alt='' />
                        <h3>Summer self- development</h3>
                        <p>Engaging summer programs are offered to promote personal growth and skill development during the school break</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={program_5} alt='' />
                    <div className='caption'>
                        <img src={program_icon_3} alt='' />
                        <h3>Training</h3>
                        <p>Comprehensive training sessions are available to equip students with essential skills for their academic and professional futures</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={program_6} alt='' />
                    <div className='caption'>
                        <img src={program_icon_3} alt='' />
                        <h3>Language and programming training</h3>
                        <p>Language and programming courses are offered when feasible, aiming to enhance students' communication and technical skills.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services