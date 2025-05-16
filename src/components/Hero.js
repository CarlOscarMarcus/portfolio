import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, Calendar } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation('hero');

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__box hero__box--image">
          <img
            src="/images/portrait.jpg"
            alt={t('hero.name')}
            className="hero__image"
          />
        </div>
        <div className="hero__box hero__box--info">
          <h2 className="hero__name">{t('hero.name')}</h2>
          <h3 className="hero__title">{t('hero.title')}</h3>

          <div className="hero__details">
            <div className="hero__field">
              <span className="hero__label">
                <Phone size={16} style={{ marginRight: '6px', position: 'relative', top: '3px' }} />
                {t('hero.phone')}:
              </span>
              <span className="hero__value">{t('hero.phoneNumber')}</span>
            </div>

            <div className="hero__field">
              <span className="hero__label">
                <Mail size={16} style={{ marginRight: '6px', position: 'relative', top: '3px' }} />
                {t('hero.email')}:
              </span>
              <span className="hero__value">
                <a href={`mailto:${t('hero.emailAddress')}`}>
                  {t('hero.emailAddress')}
                </a>
              </span>
            </div>

            <div className="hero__field">
              <span className="hero__label">
                <Calendar size={16} style={{ marginRight: '6px', position: 'relative', top: '3px' }} />
                {t('hero.dob')}:
              </span>
              <span className="hero__value">{t('hero.dateOfBirth')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
