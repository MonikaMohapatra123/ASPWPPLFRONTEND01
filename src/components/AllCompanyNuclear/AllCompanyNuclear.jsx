import { Link } from "react-router-dom";
import React from "react";
import "./AllCompanyNuclear.css";
import Button from "../Button/Button";

const AllCompanyNuclear = ({
  title,
  highlight,
  heading,
  description,
  image,
}) => {
  // Safely remove the highlight part from heading if present
  const remainingHeading = heading?.replace(highlight, "").trim();

  return (
    <div className="nuclear-container">
      {/* Left Section */}
      <div className="nuclear-left">
        {title && <h4 className="subheading">{title}</h4>}

        <h1 className="main-heading">
          <span className="bold">{highlight}</span> {remainingHeading}
        </h1>

        <div className="divider"></div>

        {description && <p className="description">{description}</p>}

        <Link to="/projects">
          <Button text="CHECK ALL PROJECTS" />
        </Link>
      </div>

      {/* Right Section */}
      <div className="nuclear-right">
        <img
          src={image}
          alt={title || "Project Image"}
          className="nuclear-image" 
        />
      </div>
    </div>
  );
};

export default AllCompanyNuclear;
