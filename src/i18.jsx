import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import am from './locales/am.json';
import afan from './locales/afan.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: 'en',
        fallbackLng: 'en',
        resources: {
            en: { translation: en },
            am: { translation: am },
            afan: { translation: afan },
        },
    });

export default i18n;