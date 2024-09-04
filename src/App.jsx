import React from 'react'; // Import React
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
// import Programs from './components/Services/Services.jsx'; // Uncomment if needed
import Title from './components/Title/Title.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Testimonial from './components/Testimonials/Testimonail.jsx'; // Fixed typo
import Contact from './components/Contacts/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
// import { BrowserRouter as Router } from 'react-router-dom'; // Uncomment if needed
// import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx'; // Uncomment if needed

function App() {
    // const [playState, setPlayState] = useState(false); // Uncomment if needed
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
