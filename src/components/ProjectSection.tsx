import React from 'react';
import { Link } from 'react-router';
import { projects } from '../data/projects';
import './ProjectSection.css';

const ProjectSection: React.FC = () => {
  // We'll show the projects with IDs 'pxxl' and 'olamide' as featured
  const featuredProjects = projects.filter(p => p.id === 'prefran' || p.id === 'bimarketplace');

  return (
    <div className="project-section">
      <h2 className="section-title">Here's What I've Been Up To.</h2>
      <div className="project-grid">
        {featuredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-image">
              <img src={project.mainImage} alt={project.title} />
            </div>
            <div className="project-card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <Link to={`/project/${project.id}`} className="view-project-btn">
                View Project 
                <span className="arrow">›</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="view-all-container">
        <Link to="/" className="view-all-btn">
          View All Projects
          <span className="chevron">›</span>
        </Link>
      </div> */}
    </div>
  );
};

export default ProjectSection;
