import React from 'react';
import './ProjectCarousel.css';

const projects = [
  { id: 1, image: '/prefran.png', title: 'Uncutxtra' },
  { id: 2, image: '/rccg.png', title: 'EmojiDB' },
  { id: 3, image: '/bimarketplace.png', title: 'Build Deploy' },
];

const ProjectCarousel: React.FC = () => {
  // Double the array to create the infinite effect
  const displayProjects = [...projects, ...projects];

  return (
    <div className="carousel-outer-container">
      <div className="carousel-track animate-scroll">
        {displayProjects.map((project, index) => (
          <div key={`${project.id}-${index}`} className="device-frame">
            <div className="screw top-left"></div>
            <div className="screw top-right"></div>
            <div className="screw bottom-left"></div>
            <div className="screw bottom-right"></div>
            
            <div className="screen-content">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-img" />
              ) : (
                <div className="blank-placeholder">
                  <span>{project.title}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;