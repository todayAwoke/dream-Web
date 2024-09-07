import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import menu_icon from '../../assets/menu-icon.jpeg'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            < img src={logo} alt='' className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='/dream-Web' smooth={true} offset={0} duration={500}> Home </Link ></li>
                <li> <Link to='/dream-Web/about' smooth={true} offset={-260} duration={500}> About us </Link ></li>
                <li> <Link to='/dream-Web/services' smooth={true} offset={-240} duration={500}> Services </Link ></li>
                <li><Link to='/dream-Web/testimonail' smooth={true} offset={-260} duration={500}> Testimonail </Link ></li>
                <li><Link to='/dream-Web/blog' smooth={true} offset={-260} duration={500}> Blog </Link ></li>
                <li > <Link to='/dream-Web/contact' smooth={true} offset={-260} duration={500}> Contact us </Link ></li>
                <li><Link to='/dream-Web/login' smooth={true} offset={-260} duration={500}> Login </Link ></li>
                <li><Link to='/dream-Web/language' smooth={true} offset={-260} duration={500}> Language </Link ></li>
            </ul>
            <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} />
        </nav >
    )
}

export default Navbar