import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
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
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt='' /> </h3 >
                <p>we are in addis ababa and ready to reach out to you</p>
                <ul>
                    <li> <img src={mail_icon} /> contact@addisababa.edu</li>
                    <li> <img src={phone_icon} /> +25123456789</li>
                    <li> <img src={location_icon} />Addis Ababa</li>
                </ul>
                <div>
                    <iframe className='location'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1487381433258!2d38.7568849076253!3d9.050194290974495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f6af6171205%3A0xc1555945b66c1db9!2zRXRlZ2UgTWVuZW4gR2lybHMnIEJvYXJkaW5nIFNlY29uZGFyeSBTY2hvb2wgfCDhiqXhibThjIwg4YiY4YqQ4YqVIOGLqOGIjeGMg-GMiOGIqOGLtuGJvSDhiqDhi7PhiKog4YiB4YiI4Ymw4YqbIOGLsOGIqOGMgyDhibXhiJ3hiIXhiK3hibUg4Ymk4Ym1!5e0!3m2!1sen!2set!4v1724919885481!5m2!1sen!2set"
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    {/* <label htmlFor=''>Your name</label> */}
                    <input type="text" name="name" placeholder="Enter your name" required />
                    {/* <label htmlFor="">Your Phone </label> */}
                    <input type="tel" name="phone" placeholder=" Enter your phone number " required />
                    {/* <label>Write your message here</label> */}
                    <textarea name="message" rows="6" placeholder=" Enteer your message here" required />
                    <button className='btn dark-btn'>Submit Now <img src={white_arrow} /></button>
                </form>
                <span className='result'>{result}</span>
            </div>
        </div>
    )
}

export default Contact

