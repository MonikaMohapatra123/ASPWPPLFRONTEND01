import React from 'react';
import './AllAboutVision.css';

const AllAboutVision = ({ subtitle, title, highlight, description, image }) => {
  if (!subtitle || !title || !highlight || !description || !image) {
    return <p>No data found.</p>;
  }

  return (
    <div className="vision-container">
      <div className="vision-left">
        <h5 className="vision-subtitle">{subtitle}</h5>
        <h2 className="vision-title">
          {title} <span>{highlight}</span>
        </h2>
        <hr className="vision-line" />
        <p className="vision-text">{description}</p>
      </div>
      <div className="vision-right">
        <img src={image} alt={highlight}  />
      </div>
    </div>
  );
};

export default AllAboutVision;

