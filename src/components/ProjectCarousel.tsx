import React from 'react';
import { Link } from 'react-router';
import { projects } from '../data/projects';
import './ProjectCarousel.css';

const ProjectCarousel: React.FC = () => {
  // Double the array to create the infinite effect
  const displayProjects = [...projects, ...projects];

  return (
    <div className="carousel-outer-container">
      <div className="carousel-track animate-scroll">
        {displayProjects.map((project, index) => (
          <Link key={`${project.id}-${index}`} to={`/project/${project.id}`} className="device-frame">
            <div className="screw top-left"></div>
            <div className="screw top-right"></div>
            <div className="screw bottom-left"></div>
            <div className="screw bottom-right"></div>
            
            <div className="screen-content">
              <img src={project.mainImage} alt={project.title} className="project-img" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;