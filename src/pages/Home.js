import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, BookOpen, FileText } from 'lucide-react';

const CVTimeline = () => {
  const { t } = useTranslation('home');
  const introParagraphs = t('introduction.intro', { returnObjects: true });

  return (
    <div className="cv-timeline">
      {/* Introduction Section */}
      <section className="introduction-section">
        <h1 className="intro-title">Oscar Wystråle</h1>
        {introParagraphs.map((paragraph: string, index: number) => (
          <p key={`intro-${index}`} className="intro-paragraph">
            {paragraph}
          </p>
        ))} 
      </section>

      {/* Work Experience Section */}
      <section className="cv-section">
        <h3 className="section-title">
          <Briefcase className="section-icon" />
          {t('workExperience.title')}
        </h3>
        <div className="timeline">
          {t('workExperience.jobs', { returnObjects: true }).map((job, idx) => (
            <div className="timeline-item" key={`job-${idx}`}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>{job.position} – {job.company}</h4>
                <p>{job.type}</p>
                <span className="timeline-date">{job.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="cv-section">
        <h3 className="section-title">
          <BookOpen className="section-icon" />
          {t('education.title')}
        </h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>{t('education.degree')}</h4>
              <p>{t('education.institution')}</p>
              <span className="timeline-date">{t('education.period')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Section */}
      <section className="cv-section">
        <h3 className="section-title">
          <FileText className="section-icon" />
          {t('publication.title')}
        </h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h4>{t('publication.paper.authors')}</h4>
              <p>{t('publication.paper.source')}</p>
              <span className="timeline-date">{t('publication.paper.year')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVTimeline;
