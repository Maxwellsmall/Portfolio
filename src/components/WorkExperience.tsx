import React from 'react';
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      date: 'Sept 2024-Present',
      role: 'Founder & CEO at',
      company: 'Pxxl App',
      link: '#'
    },
    {
      date: 'April 2026-Present',
      role: 'Frontend Developer at',
      company: 'Nexus Automaark Systems.',
      link: '#'
    },
    {
      date: 'Feb 2026-Present',
      role: 'Mobile App Developer at',
      company: 'Rinku Technology Limited.',
      link: '#'
    },
    {
      date: '2025-Present',
      role: 'Frontend Developer at',
      company: 'Steadfast Int.',
      link: '#'
    },
    {
      date: '2024-Present',
      role: 'Fullstack Developer at',
      company: 'TheEccomerceBoss',
      link: '#'
    },
    {
      date: '2019-2022',
      role: 'Backend Developer at',
      company: 'OrganStation',
      link: '#'
    }
  ];

  return (
    <div className="work-experience">
      <h2 className="work-title">Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-date">{exp.date}</div>
            <div className="experience-info">
              <span className="role-text">{exp.role}</span>
              <a href={exp.link} className="company-pill">
                <span className="pill-icon">○</span>
                {exp.company}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
