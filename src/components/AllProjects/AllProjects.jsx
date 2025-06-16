
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import projectData from "../../json/data.json";
import "./AllProjects.css";

const AllProjects = () => {
  const project = projectData["14"];

  return (
    <div className="image-slide-grid">
      {project.sections.map(({ image, title, description, buttonText, link }, index) => (
        <div className="slide-box" key={index}>
         <img src={image} alt={title} className="slide-image" />  
          <div className="slide-overlay">
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={link}>
              <button>{buttonText}</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProjects;

