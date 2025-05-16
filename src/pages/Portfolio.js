import React from 'react';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation('portfolio');

  return (
    <section>
      <h2>{t('title')}</h2>
      <div>
        <h3>{t('project1.name')}</h3>
        <p>{t('project1.description')}</p>
      </div>
      <div>
        <h3>{t('project2.name')}</h3>
        <p>{t('project2.description')}</p>
      </div>
    </section>
  );
};

export default Portfolio;
