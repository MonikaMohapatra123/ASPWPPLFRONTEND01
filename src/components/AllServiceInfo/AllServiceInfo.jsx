

import React from 'react';
import './AllServiceInfo.css';
import serviceData from '../../json/data.json'; // Adjust path if needed

const AllServiceInfo = () => {
  const data = serviceData["13"];

  return (
    <div className="service-info-container">
      <h3 className="section-subtitle">{data.subtitle}</h3>
      <h1 className="section-title">{data.title}</h1>
      
      <hr className="underline" />

      {data.description.map((para, index) => (
        <p className="section-description" key={index}>{para}</p>
        
      ))}
 
      <div className="key-features">
        {data.features.map((feature, index) => (
          <p key={index}>
            <strong>{index + 1}. {feature.title}:</strong> {feature.content}
          </p>
        ))}
      </div>

      <p className="section-description">{data.conclusion}</p>

      <div className="image-gallery">
        {data.images.map((img, index) => (
          <img key={index} src={img.src} alt={img.alt}  />
        ))}
      </div>
    </div>
  );
};

export default AllServiceInfo;




    