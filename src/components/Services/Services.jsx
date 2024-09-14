import React from 'react'
import './Services.css'
import program_1 from '../../assets/program_1.jpeg'
import program_2 from '../../assets/program_2.jpeg'
import program_3 from '../../assets/program_3.jpeg'
import program_4 from '../../assets/program-4.jpeg'
import program_5 from '../../assets/program-5.jpeg'
import program_6 from '../../assets/program_6.jpeg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();
    return (
        <div className='services' id='services'>
            <h3 className="title">{t('ServicesTitle')}</h3>
            <h1 className="subtitle">{t('ServicesSubtitle')}</h1>
            <div className='first'>
                <div className='service'>
                    <img src={program_1} alt='' />
                    <div className='caption'>
                        <img src={program_icon_1} alt='' />
                        <h3>{t('Home-tutorial')}</h3>
                        <p>{t('service1')}</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={program_2} alt='' />
                    <div className='caption'>
                        <img src={program_icon_2} alt='' />
                        <h3>{t('Group-tutoring')}</h3>
                        <p>{t('service2')}</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={program_3} alt='' />
                    <div className='caption'>
                        <img src={program_icon_3} alt='' />
                        <h3>{t('Assignment-assistance')}</h3>
                        <p>{t('service3')}</p>
                    </div>
                </div>
            </div>
            <div className='second'>
                <div className='service'>
                    <img src={program_4} alt='' />
                    <div className='caption'>
                        <img src={program_icon_3} alt='' />
                        <h3>{t('Summer-Programs')}</h3>
                        <p>{t('service4')}</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={program_5} alt='' />
                    <div className='caption'>
                        <img src={program_icon_3} alt='' />
                        <h3>{t('Training')}</h3>
                        <p>{t('service5')}</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={program_6} alt='' />
                    <div className='caption'>
                        <img src={program_icon_3} alt='' />
                        <h3>{t('Language-programming')}</h3>
                        <p>{t('service6')}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Services