import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <main class="cv-page">
      {/* Introduction */}
      <section>
        <center><h1>{t('introduction.title')}</h1></center>
        <div class="card">        
            {t('introduction.intro', { returnObjects: true }).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
            ))}
        </div>
      </section>

      {/* Work Experience */}
      <section>
        <center><h1>{t('workExperience.title')}</h1></center>
          {t('workExperience.jobs', { returnObjects: true }).map((job, i) => (
            <div class="timeline card">
                <strong>{job.position}</strong> | {job.company}<br />
                <em>{job.type}</em><br />
                <span>{job.period}</span>
            </div>
          ))}
      </section>

      {/* Education */}
      <section>
        <center><h2>{t('education.title')}</h2></center>
        <div class="card">
          <strong>{t('education.institution')}</strong><br />
          {t('education.degree')}<br />
          <span>{t('education.period')}</span>
        </div>
      </section>

      {/* Publication */}
      <section>
        <center><h2>{t('publication.title')}</h2></center>
        <div class="card">
          <strong>The applicability of Generative AI in Systematic Literature Reviews</strong><br />
          <em>Exploring GPT-4's Role in Automating and Assisting Researchers</em> <br />
          {t('publication.paper.authors')}<br />
          {t('publication.paper.year')} | {t('publication.paper.source')}
        </div>
      </section>
    </main>
  );
};

export default Home;
