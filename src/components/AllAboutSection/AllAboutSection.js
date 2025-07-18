import React from 'react';
import './AllAboutSection.css';

const AllAboutSection = ({
  subtitle,
  title,
  highlight,
  description,
  image,
  reverse = false, // ⬅️ Set true for "mission" style (image left)
}) => {
  if (!subtitle || !title || !highlight || !description || !image) {
    return <p>No data found.</p>;
  }

  return (
    <div className={`about-section-container ${reverse ? 'reverse' : ''}`}>
      <div className="about-section-image">
        <img src={image} alt={highlight}  />
      </div>
      <div className="about-section-text">
        <h5 className="about-subtitle">{subtitle}</h5>
        <h2 className="about-title">
          {title} <span>{highlight}</span>
        </h2>
        <hr className="about-line" />
        <p className="about-description">{description}</p>
      </div>
    </div>
  );
};

export default AllAboutSection;
