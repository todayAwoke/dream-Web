import React, { useEffect, useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const [scrolls, setScrolls] = useState(false);
    const { t } = useTranslation();
    const [result, setResult] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setScrolls(true);
            } else {
                setScrolls(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "a1f5cb0e-29b8-44b9-ac56-d49cc22fbd5d");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact' id='contact'>
            <h3 className="title text-[#076e83] text-5xl">{t('ContactTitle')}</h3>
            <h1 className="subtitle">{t('ContactSubTitle')}</h1>
            <div className='contact-container'>
                <div className='contact-col'>

                    <ul>
                        <li><img src={mail_icon} alt="" /> dreamtutor.et@gmail.com</li>
                        <li><img src={phone_icon} alt="" /> +251983017128</li>
                        <li><img src={phone_icon} alt="" /> +251922347773</li>
                    </ul>
                    <div>
                        <iframe className='location'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1487381433258!2d38.7568849076253!3d9.050194290974495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f6af6171205%3A0xc1555945b66c1db9!2zRXRlZ2UgTWVuZW4gR2lybHMnIEJvYXJkaW5nIFNlY29uZGFyeSBTY2hvb2wgfCDhiqXhibThjIwg4YiY4YqQ4YqVIOGLqOGIjeGMg-GMiOGIqOGLtuGJvSDhiqDhi7PhiKog4YiB4YiI4Ymw4YqbIOGLsOGIqOGMgyDhibXhiJ3hiIXhiK3hibUg4Ymk4Ym1!5e0!3m2!1sen!2set!4v1724919885481!5m2!1sen!2set"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div className="contact-col">
                    <h3>{t('Contactheader')} <img src={msg_icon} alt='' /> </h3>
                    <form onSubmit={onSubmit}>
                        <input type="text" name="name" placeholder={t('name')} required />
                        <input type="tel" name="phone" placeholder={t('phone')} required />
                        <textarea name="message" rows="6" placeholder={t('message')} required />
                        <button className="flex ml-10 items-center justify-center px-3 py-2 bg-[#076e83] text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                            {t('send')}
                            <img src={white_arrow} alt="" className="ml-2 white-arrow" />
                        </button>

                    </form>
                </div>
            </div>

        </div >
    );
}

export default Contact;