import React from 'react';

const Polaroid = ({ imgSrc, handle, rotation }) => {
  return (
    <div className="polaroid-card" style={{ transform: `rotate(${rotation}deg)` }}>
      <div className="image-container">
        <img src={imgSrc} alt="User" />
      </div>
      <div className="footer">
        <p>{handle}</p>
      </div>
    </div>
  );
};

const PhotoGallery = () => {
  return (
    <div className="gallery-wrapper">
      <Polaroid 
        imgSrc="/dextrus2.jpeg" 
        handle="Chukwuchebem David" 
        rotation={-10} 
      />
      <Polaroid 
        imgSrc="/dextrus.jpg" 
        handle="@dextrus001" 
        rotation={5} 
      />
    </div>
  );
};

export default PhotoGallery;