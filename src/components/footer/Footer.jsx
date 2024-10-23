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
            <p className="text-center text-gray-400 mt-4">
                @ 2024 Dream. All Rights Reserved
                <a href="#" className="text-white hover:underline ml-1">Developed By Awoke Dejenie</a>
            </p>
        </div>
    );
};

export default Footer;
