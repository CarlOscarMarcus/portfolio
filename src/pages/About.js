import React from 'react';
import { User, Target, BookOpen, Wifi, Heart, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollFadeInSection from '../components/animations/ScrollFadeInSection'; // adjust path if needed

const About = () => {
  const { t } = useTranslation('about');
  const sections = t('sections', { returnObjects: true });

  return (
    <main className="about-page">

      <ScrollFadeInSection>
        <section className="introduction-section">
          <h2><User size={20} /> {sections.introduction.title}</h2>
          {sections.introduction.text.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      </ScrollFadeInSection>

      <ScrollFadeInSection>
        <section className="goals-section">
          <h2><Target size={20} /> {sections.careerObjective.title}</h2>
          {sections.careerObjective.text.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      </ScrollFadeInSection>

      <ScrollFadeInSection>
        <section className="publication-section">
          <a href={sections.bachelorThesis.link} target="_blank" rel="noopener noreferrer">
            <h2><BookOpen size={20} /> {sections.bachelorThesis.title} <ExternalLink size={20} /></h2>
          </a>
          {sections.bachelorThesis.text.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      </ScrollFadeInSection>

      <ScrollFadeInSection>
        <section className="expertise-section">
          <h2><Wifi size={20} /> {sections.highlightProject.title}</h2>
          {sections.highlightProject.text.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      </ScrollFadeInSection>

      <ScrollFadeInSection>
        <section className="passion-section">
          <h2><Heart size={20} /> {sections.passion.title}</h2>
          {sections.passion.text.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      </ScrollFadeInSection>

    </main>
  );
};

export default About;
