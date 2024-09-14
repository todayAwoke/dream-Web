import React, { useEffect } from 'react'; // Import React
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import i18n from 'i18next';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Title from './components/Title/Title.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Testimonail from './components/Testimonails/Testimonail.jsx'; // Fixed typo
import Contact from './components/Contacts/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Register from './components/Auth/Register.jsx';
import Login from './components/Auth/Login.jsx';
import { useTranslation } from 'react-i18next';
function DreamWeb() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Testimonail />
            <Contact />
        </>
    );
}
function App() {
    const { t } = useTranslation();
    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, []);
    // const lng = navigator.language;
    return (
        <>
            <Navbar />
            <Routes>

                <Route path='/dream-Web' element={<DreamWeb />} />
                <Route path='/dream-Web/about' element={<About />} />
                {/* <Title subTitle='Home' title='Dream' /> */}
                <Route path='/dream-Web/services' element={<Services />} />
                <Route path='/dream-Web/testimonail' element={<Testimonail />} />
                <Route path='/dream-Web/contact' element={<Contact />} />
                <Route path='/dream-Web/register' element={<Register />} />
                <Route path='/dream-Web/login' element={<Login />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
