import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

  useEffect(() => {
    const savedLang = sessionStorage.getItem('lang');
    if (savedLang && savedLang !== i18n.language) {
      setTimeout(() => {
        i18n.changeLanguage(savedLang);
        setIsEnglish(savedLang === 'en');
      }, 1); // small delay to ensure i18n is ready
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = isEnglish ? 'sv' : 'en';
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
    sessionStorage.setItem('lang', newLang);
  };

  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">Oscar Wystråle</h1>

        <nav className="nav">
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </nav>

        <div className="language-switch">
          <label className="switch">
            <input
              type="checkbox"
              className="cb"
              checked={isEnglish}
              onChange={toggleLanguage}
              aria-label="Toggle language"
            />
            <span className="toggle">
              <span className="left">sv</span>
              <span className="right">en</span>
            </span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
