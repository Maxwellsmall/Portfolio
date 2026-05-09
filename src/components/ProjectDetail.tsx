import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <Link to="/" className="back-home">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <nav className="detail-nav">
        <Link to="/" className="back-link">
          <span className="arrow">←</span> Back
        </Link>
      </nav>

      <header className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
      </header>

      <div className="project-info-box">
        <div className="info-section">
          <h3>Description</h3>
          <p>{project.description}</p>
        </div>

        <div className="info-section">
          <h3>Technologies</h3>
          <div className="tech-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>

        <div className="metadata-grid">
          <div className="meta-item">
            <span className="meta-label">Date</span>
            <span className="meta-value">{project.date}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Type</span>
            <span className="meta-value">{project.type}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Client</span>
            <span className="meta-value">{project.client}</span>
          </div>
        </div>
      </div>

      <div className="project-actions">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-project-btn">
          Visit Project <span className="icon">↗</span>
        </a>
        {/* <div className="nav-buttons">
          <button className="nav-btn prev">‹ Previous</button>
          <button className="nav-btn next">Next ›</button>
        </div> */}
      </div>

      <div className="project-gallery">
        <div className="main-image-wrapper">
          <img src={project.mainImage} alt={project.title} className="main-image" />
        </div>
        <div className="gallery-grid">
          {project.gallery.map((img, idx) => (
            <div key={idx} className="gallery-item">
              <img src={img} alt={`${project.title} ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
