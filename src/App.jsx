import React from 'react'; // Import React
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Title from './components/Title/Title.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Testimonial from './components/Testimonails/Testimonail.jsx'; // Fixed typo
import Contact from './components/Contacts/Contact.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="container">
                <About />
                <Title subTitle='Services' title="What we provide" />
                <Services />
                {/* <Title subTitle='Programs' title="Our Programs" /> */}
                {/* <Services /> */}
                <Title subTitle='Testimonial' title="What Our Students Say" />
                <Testimonial />
                <Title subTitle='Contact Us' title="Get In Touch With Us" />
                <Contact />
                <Footer />
                {/* <VideoPlayer playState={playState} setPlayState={setPlayState} /> */}
            </div>
        </>
    );
}

export default App;
