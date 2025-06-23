import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Briefcase, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Startups = () => {
  const { company } = useParams();
  const { t } = useTranslation(['startups/startups']);
  
  const startups = t('companies', { returnObjects: true });
  const startup = startups.find(s => s.id === company);
  
  if (!startup) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <div className="startup-detail">
        <div className="startup-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <div className="startup-title-section">
            <h1 className="startup-name">{startup.name}</h1>
            <div className="startup-meta">
              <div className="meta-item">
                <Briefcase size={16} />
                <span>{startup.title}</span>
              </div>
              <div className="meta-item">
                <Calendar size={16} />
                <span>{startup.duration}</span>
              </div>
              <div className='meta-item'>
                <ExternalLink size={16} />
                <span><a href={startup.url} target="_blank" rel="noopener noreferrer"> {startup.url} </a></span>
              </div>
            </div>
          </div>
        </div>
      
        <article className="startup-content">
          {startup.fullDescription.map((paragraph, index) => (
            <p key={index} className="startup-paragraph">
              {paragraph}
            </p>
          ))}
        </article>
    </div>
  );
};

export default Startups;

