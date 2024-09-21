import React from 'react';
import './Footer.css';
import location_icon from '../../assets/location-icon.png';
import facebook_icon from '../../assets/facebook_icon.jpeg';
import telegram_icon from '../../assets/telegram_icon.jpeg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer-social'>
                    <ul>
                        <li>
                            <img src={location_icon} alt="" />
                            {t('location')}
                        </li>
                        <li>
                            <img src={telegram_icon} alt="" />
                            <Link to='https://t.me/DLC_Tutors'>Telegram</Link>
                        </li>
                        <li>
                            <img src={facebook_icon} alt="" />
                            <a href='https://facebook.com/DLC_Tutors'>Facebook</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-rule'>
                    <ul>
                        <li>Terms of Services</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
            <p className='footer-p'>
                @ 2024 Dream. All Rights Reserved
                <a href='#' className='footer-span'>Developed By Awoke Dejenie</a>
            </p>
        </div>
    );
};

export default Footer;