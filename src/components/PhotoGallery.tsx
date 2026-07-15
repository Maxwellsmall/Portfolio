import React from 'react'; // You can actually remove this line entirely in most modern setups

// 1. Define the shape of the props
interface PolaroidProps {
  imgSrc: string;
  handle: string;
  rotation: number;
}

// 2. Apply the interface to the component
const Polaroid: React.FC<PolaroidProps> = ({ imgSrc, handle, rotation }) => {
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

const PhotoGallery: React.FC = () => {
  return (
    <div className="gallery-wrapper">
      <Polaroid 
        imgSrc="/maxwellweb3.png" 
        handle="Edunfunke Maxwell" 
        rotation={-10} 
      />
      <Polaroid 
        imgSrc="/Maxwell.jpg" 
        handle="@maxwellweb3" 
        rotation={5} 
      />
    </div>
  );
};

export default PhotoGallery;