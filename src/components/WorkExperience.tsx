import React from 'react';
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      date: 'Sept 2025-Present',
      role: 'Software Developer at',
      company: 'Antartes',
      link: 'antartes.vercel.app'
    },
    {
      date: 'Sept 2026-Present',
      role: 'Robotics Educator at',
      company: '6thTouch Robotics academy',
      link: '#'
    },
    {
      date: 'April 2025-Present',
      role: 'Frontend Decveloper at',
      company: 'BI Marketplace',
      link: 'bimarketplace.org'
    },
    {
      date: '2025',
      role: 'Volunteer at',
      company: 'Tech Summer for Teens, TGDI',
      link: 'https://tgdi.org.ng/'
    },
    {
      date: '2025-Present',
      role: 'Chief Technology Officer at',
      company: 'Charmpay',
      link: 'charmpay.com.ng'
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
