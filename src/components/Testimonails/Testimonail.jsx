import React, { useRef } from 'react'
import './Testimonail.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const testimonials = [
    {
        name: 'Jane Doe',
        role: 'Software Engineer',
        imageUrl: user_1,
        text: 'This service has transformed my workflow and made my life so much easier!',
    },
    {
        name: 'John Smith',
        role: 'Product Manager',
        imageUrl: user_2,
        text: 'An exceptional experience! Highly recommend to anyone looking for quality service.',
    },
    {
        name: 'Alice Johnson',
        role: 'UX Designer',
        imageUrl: user_3,
        text: 'The team is amazing, and their support is unmatched. A game changer for us!',
    },
    {
        name: 'Alice Johnson',
        role: 'UX Designer',
        imageUrl: user_3,
        text: 'The team is amazing, and their support is unmatched. A game changer for us!',
    },
    {
        name: 'Alice Johnson',
        role: 'UX Designer',
        imageUrl: user_3,
        text: 'The team is amazing, and their support is unmatched. A game changer for us!',
    },
    {
        name: 'Alice Johnson',
        role: 'UX Designer',
        imageUrl: user_3,
        text: 'The team is amazing, and their support is unmatched. A game changer for us!',
    },
];


import { useTranslation } from 'react-i18next'
const Testimonail = () => {
    const { t } = useTranslation();
    const slider = useRef(null);
    let tx = 0;
    return (
        <div className='testimonail' id='testimonial'>
            <h3 className="title text-[#076e83]">{t('TestimonialTitle')}</h3>
            <h1 className="subtitle">{t('TestimonialSubtitle')}</h1>
            <div className="max-w-full px-2 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white border border-gray-300 hover:bg-[#076e83] hover:text-white rounded-lg shadow-md p-6 transform transition-transform duration-200 hover:scale-105">
                            <div className="flex items-center mb-4">
                                <img src={testimonial.imageUrl} alt={testimonial.name} className="h-16 w-16 rounded-full mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500 hover:text-white">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Testimonail

