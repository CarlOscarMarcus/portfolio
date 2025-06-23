import React from 'react';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // ✅ correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faPython,
  faDocker,
  faReact,
  faSymfony,
  faGithub,
  faGitAlt,
  faPhp,
  faLinux,
  faSass,
} from '@fortawesome/free-brands-svg-icons';

const technologies = [
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'SASS', icon: faSass },
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'PHP', icon: faPhp },
    { name: 'Python', icon: faPython },
    { name: 'React', icon: faReact },
    { name: 'Symfony', icon: faSymfony },
    { name: 'GitHub', icon: faGithub },
    { name: 'Git', icon: faGitAlt },
    { name: 'Database', icon: faDatabase},
    { name: 'Docker', icon: faDocker },
    { name: 'Linux', icon: faLinux },
];

const TechSlider = () => {
  return (
    <div className="tech-slider">
      <div className="tech-slider__track">
        {[...technologies, ...technologies].map((tech, index) => (
          <div className="tech-slider__item" key={index}>
            <FontAwesomeIcon icon={tech.icon} size="2x" />
            <span className="tech-slider__label">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
