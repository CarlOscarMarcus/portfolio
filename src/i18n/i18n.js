import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEN from './locales/en/common.json';
import homeEN from './locales/en/home.json';
import aboutEN from './locales/en/about.json';
import portfolioEN from './locales/en/portfolio.json';
import contactEN from './locales/en/contact.json';
import heroEN from './locales/en/hero.json';

import commonSV from './locales/sv/common.json';
import homeSV from './locales/sv/home.json';
import aboutSV from './locales/sv/about.json';
import portfolioSV from './locales/sv/portfolio.json';
import contactSV from './locales/sv/contact.json';
import heroSV from './locales/sv/hero.json';

const resources = {
  en: {
    common: commonEN,
    home: homeEN,
    about: aboutEN,
    portfolio: portfolioEN,
    contact: contactEN,
    hero: heroEN,
  },
  sv: {
    common: commonSV,
    home: homeSV,
    about: aboutSV,
    portfolio: portfolioSV,
    contact: contactSV,
    hero: heroSV,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common', 'home', 'about', 'portfolio', 'contact', 'hero'],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
});

export default i18n;
