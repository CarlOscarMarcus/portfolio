import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');
  const experience = t('experience', { returnObjects: true });
  const education = t('education', { returnObjects: true });

  return (
    <div className="about-page">
      <section className="experience-section">
        <center><h2>{t('experienceTitle')}</h2></center>
        {experience.map((job, index) => (
          <div key={index} className="card">
            <h3>{job.role} | {job.company}</h3>
            <div class="card_date">{job.date}</div>
            <ul>
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="education-section">
        <center><h2>{t('educationTitle')}</h2></center>
        {education.map((edu, index) => (
          <div key={index} className="card">
            <h3>{edu.school}</h3>
            <p><strong>{edu.program}</strong></p>
            <div class="card_date">{edu.date}</div>
            <ul>
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
