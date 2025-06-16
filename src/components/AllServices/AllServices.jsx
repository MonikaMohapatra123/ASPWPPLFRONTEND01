import React from "react";
import { Link } from "react-router-dom";
import serviceData from "../../json/data.json";
import "./AllServices.css";

const AllServices = () => {
  const service = serviceData["16"];

  return (
    <div className="image-slide-grid">
      {service.sections.map(({ image, title, description, buttonText, link }, index) => (
        <div className="slide-box" key={index}>
          <img src={image} alt={title} className="slide-image" />
          <div className="slide-overlay">
            <h3>{title}</h3>
            <p>{description}</p>
            {link ? (
              <Link to={link}>
                <button>{buttonText}</button>
              </Link>
            ) : (
              <button>{buttonText}</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllServices;
