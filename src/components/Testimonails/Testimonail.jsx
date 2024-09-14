import React, { useRef } from 'react'
import './Testimonail.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useTranslation } from 'react-i18next'
const Testimonail = () => {
    const { t } = useTranslation();
    const slider = useRef(null);
    let tx = 0;
    return (
        <div className='testimonail' id='testimonial'>
            <h3 className="title">{t('TestimonialTitle')}</h3>
            <h1 className="subtitle">{t('TestimonialSubtitle')}</h1>
            <div className='slider'>
                <ul  >
                    <div className='slider-fisrt'>
                        <li>
                            <div className="slide">
                                <div className='user-info'>
                                    <img src={user_1} alt='' />
                                    <div>
                                        <h3>John Doe 1</h3>
                                        <span>Designer</span>
                                    </div>
                                </div>
                                <p>this is the discription what we will insert</p>
                            </div>
                        </li>

                        <li>
                            <div className="slide">
                                <div className='user-info'>
                                    <img src={user_2} alt='' />
                                    <div>
                                        <h3>Awoke 1</h3>
                                        <span>Designer</span>
                                    </div>
                                </div>
                                <p>this is the discription what we will insert</p>
                            </div>
                        </li>

                        <li>
                            <div className="slide">
                                <div className='user-info'>
                                    <img src={user_3} alt='' />
                                    <div>
                                        <h3>John Doe 2</h3>
                                        <span>Designer</span>
                                    </div>
                                </div>
                                <p>this is the discription what we will insert</p>
                            </div>
                        </li>
                    </div>
                    <div className='slider-second'>
                        <li>
                            <div className="slide">
                                <div className='user-info'>
                                    <img src={user_4} alt='' />
                                    <div>
                                        <h3>John Doe 3</h3>
                                        <span>search me </span>
                                    </div>
                                </div>
                                <p>this is the discription what we will insert</p>
                            </div>
                        </li>
                    </div>
                </ul>

            </div>

        </div>
    )
}

export default Testimonail

