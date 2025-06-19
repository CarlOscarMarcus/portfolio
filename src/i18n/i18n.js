import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEN from './locales/en/common.json';
import homeEN from './locales/en/home.json';
import aboutEN from './locales/en/about.json';
import heroEN from './locales/en/hero.json';
import startupsEN from './locales/en/startups/startups.json';

import commonSV from './locales/sv/common.json';
import homeSV from './locales/sv/home.json';
import aboutSV from './locales/sv/about.json';
import heroSV from './locales/sv/hero.json';
import startupsSV from './locales/sv/startups/startups.json';

const resources = {
  en: {
    common: commonEN,
    home: homeEN,
    about: aboutEN,
    hero: heroEN,
    'startups/startups': startupsEN,
  },
  sv: {
    common: commonSV,
    home: homeSV,
    about: aboutSV,
    hero: heroSV,
    'startups/startups': startupsSV,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common', 'home', 'about', 'portfolio', 'contact', 'hero', 'startups/startups'],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
});

export default i18n;
