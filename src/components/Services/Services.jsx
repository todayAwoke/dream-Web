import React from 'react';
import './Services.css';
import program_1 from '../../assets/program_1.jpeg';
import program_2 from '../../assets/program_2.jpeg';
import program_3 from '../../assets/program_3.jpeg';
import program_4 from '../../assets/program-4.jpeg';
import program_5 from '../../assets/program-5.jpeg';
import program_6 from '../../assets/program_6.jpeg';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';
import { useTranslation } from 'react-i18next';

const servicesData = [
    { image: program_1, icon: program_icon_1, titleKey: 'Home-tutorial', descriptionKey: 'service1' },
    { image: program_2, icon: program_icon_2, titleKey: 'Group-tutoring', descriptionKey: 'service2' },
    { image: program_3, icon: program_icon_3, titleKey: 'Assignment-assistance', descriptionKey: 'service3' },
    { image: program_4, icon: program_icon_3, titleKey: 'Summer-Programs', descriptionKey: 'service4' },
    { image: program_5, icon: program_icon_3, titleKey: 'Training', descriptionKey: 'service5' },
    { image: program_6, icon: program_icon_3, titleKey: 'Language-programming', descriptionKey: 'service6' },
];

const Services = () => {
    const { t } = useTranslation();
    
    return (
        <div className='services' id='services'>
            <h3 className="title text-[#076e83]">{t('ServicesTitle')}</h3>
            <h1 className="subtitle">{t('ServicesSubtitle')}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-7'>
                {servicesData.map((service, index) => (
                    <div className='service' key={index}>
                        <img src={service.image} alt={t(service.titleKey)} className="w-full h-auto rounded-lg" />
                        <div className='caption text-center mt-4'>
                            <img src={service.icon} alt={t(service.titleKey)} className="mx-auto" />
                            <h3>{t(service.titleKey)}</h3>
                            <p>{t(service.descriptionKey)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
