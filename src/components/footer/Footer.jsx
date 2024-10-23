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
        <div className="bg-[#076e83] text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="footer-social mb-4 md:mb-0">
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                        <li className="flex items-center">
                            <img src={location_icon} alt="" className="mr-2" />
                            {t('location')}
                        </li>
                        <li className="flex items-center">
                            <img src={telegram_icon} alt="" className="mr-2" />
                            <Link to='https://t.me/DLC_Tutors' className="hover:underline">Telegram</Link>
                        </li>
                        <li className="flex items-center">
                            <img src={facebook_icon} alt="" className="mr-2" />
                            <a href='https://facebook.com/DLC_Tutors' className="hover:underline">Facebook</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-rule mb-4 md:mb-0">
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                        <li className='cursor-pointer'>Terms of Services</li>
                        <li className='cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center text-gray-400 mt-4">
                <p className="text-center">@ 2024 Dream. All Rights Reserved</p>
                <a href="#" className="text-white hover:underline mt-1 text-center">Developed By Awoke Dejenie</a>
            </div>
        </div>
    );
};

export default Footer;
