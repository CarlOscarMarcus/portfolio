import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');
  const [menuOpen, setMenuOpen] = useState(false);  // new state for menu toggle

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

        {/* Hamburger button visible only on mobile */}
        {/* <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button> */}

        {/* <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <NavLink to="/" exact activeClassName="active" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" activeClassName="active" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/portfolio" activeClassName="active" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
        </nav> */}

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
