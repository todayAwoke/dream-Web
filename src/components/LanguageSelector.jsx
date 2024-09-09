import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
    { code: "en", lang: "English" },
    { code: "am", lang: "Amharic" },
    { code: "afan", lang: "AfanOromo" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language]);

    return (
        <div className='language_selector'>
            <select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
            >
                {languages.map((lng) => (
                    <option key={lng.code} value={lng.code}>
                        {lng.lang}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;