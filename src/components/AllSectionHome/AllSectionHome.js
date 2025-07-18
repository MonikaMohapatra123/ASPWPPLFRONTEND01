
import React from 'react';
import './AllSectionHome.css';
const AllSectionHome = ({
  subtitle,
  title,
  highlight,
  description,
  image,
  reverse = false, // Set true for "mission" style (image left)
}) => {
  if (!subtitle || !title || !highlight || !description || !image) {
    return <p>No data found.</p>;
  }

  return (
    <div className={`section-home-container ${reverse ? 'reverse' : ''}`}>
      <div className="section-home-image">
        <img src={image} alt={highlight} />
      </div>
      <div className="section-home-text">
        <h5 className="section-subtitle">{subtitle}</h5>
        <h2 className="section-title">
          {title} <span>{highlight}</span>
        </h2>
        <hr className="section-line" />
        <p className="section-description">{description}</p>
      </div>
    </div>
  );
};

export default AllSectionHome;
