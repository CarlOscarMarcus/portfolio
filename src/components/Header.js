import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { t } = useTranslation('common');
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedLang = sessionStorage.getItem('lang');
    if (savedLang && savedLang !== i18n.language) {
      setTimeout(() => {
        i18n.changeLanguage(savedLang);
        setIsEnglish(savedLang === 'en');
      }, 1);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = isEnglish ? 'sv' : 'en';
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
    sessionStorage.setItem('lang', newLang);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">Oscar Wystråle</h1>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.home')}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.about')}
          </NavLink>


          {/* Mobile-only language switch */}
          <div className="language-switch mobile-only">
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
        </nav>

        {/* Desktop-only language switch */}
        <div className="language-switch desktop-only">
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
