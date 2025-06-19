import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, BookOpen, FileText, ExternalLink, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollFadeInSection from '../components/animations/ScrollFadeInSection';

const CVTimeline = () => {
  const { t } = useTranslation('home');
  const { t: tStartups } = useTranslation('startups/startups');

  const workExperience = t('workExperience.jobs', { returnObjects: true });
  const education = t('education.school', { returnObjects: true });
  const startups = tStartups('companies', { returnObjects: true });

  return (
    <div className="cv-timeline">
      {/* Startups Section */}
      <section className="cv-section">
        <h3 className="section-title">
          <Rocket className="section-icon" />
          {tStartups('title')}
        </h3>
        <div className="timeline">
          {startups.map((startup, idx) => (
            <ScrollFadeInSection key={`startup-${idx}`}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <Link
                    to={`/startups/${startup.id}`}
                    className="startup-link"
                  >
                    <h4>
                      {startup.name}
                      <ExternalLink size={16} style={{ display: 'inline-block', marginLeft: '4px' }} />
                    </h4>
                    <p><em>{startup.title}</em></p>
                    <p>{startup.shortDescription}</p>
                    <span className="timeline-date">{startup.duration}</span>
                  </Link>
                </div>
              </div>
            </ScrollFadeInSection>
          ))}
        </div>
      </section>
      {/* Work Experience Section */}
      <section className="cv-section">
        <h3 className="section-title">
          <Briefcase className="section-icon" />
          {t('workExperience.title')}
        </h3>
        <div className="timeline">
          {workExperience.map((job, idx) => (
            <ScrollFadeInSection key={`job-${idx}`}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4>{job.position} – {job.company}</h4>
                  <p>{job.type}</p>
                  <span className="timeline-date">{job.period}</span>
                </div>
              </div>
            </ScrollFadeInSection>
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
          {education.map((school, idx) => (
            <ScrollFadeInSection key={`school-${idx}`}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4>{school.degree}</h4>
                  <p>{school.institution}</p>
                  <span className="timeline-date">{school.period}</span>
                </div>
              </div>
            </ScrollFadeInSection>
          ))}
        </div>
      </section>

      {/* Publication Section */}
      <section className="cv-section">
        <h3 className="section-title">
          <FileText className="section-icon" />
          {t('publication.title')}
        </h3>
        <div className="timeline">
          <ScrollFadeInSection>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <a
                  href="https://www.diva-portal.org/smash/record.jsf?aq2=%5B%5B%5D%5D&c=1&af=%5B%5D&searchType=SIMPLE&sortOrder2=title_sort_asc&query=Oscar+Wystr%C3%A5le&language=en&pid=diva2%3A1941180&aq=%5B%5B%5D%5D&sf=all&aqe=%5B%5D&sortOrder=author_sort_asc&onlyFullText=false&noOfRows=50&dswid=4779"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>
                    The applicability of Generative AI in Systematic Literature Reviews
                    <ExternalLink size={16} style={{ display: 'inline-block', marginLeft: '4px' }} />
                  </h4>
                  <p>
                    <em>Exploring GPT-4's Role in Automating and Assisting Researchers</em>
                  </p>
                </a>
                <p>{t('publication.paper.authors')}</p>
                <p>{t('publication.paper.source')}</p>
                <span className="timeline-date">{t('publication.paper.year')}</span>
              </div>
            </div>
          </ScrollFadeInSection>
        </div>
      </section>
    </div>
  );
};

export default CVTimeline;
