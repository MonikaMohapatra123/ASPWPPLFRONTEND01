import React from "react";
import { Link } from "react-router-dom";
import "./AllProjects.css";

const AllProjects = ({ project }) => {
  return (
    <div className="image-slide-grid">
      {project.map((item, index) => (
        <div className="slide-box" key={item._id || index}>
          <img
            src={item.photo?.[0]?.url || "/placeholder.jpg"}
            alt={item.projectsname}
            className="slide-image"
            loading="lazy"
          />
          <div className="slide-overlay">
            <h3>{item.projectsname}</h3>
            <p>{item.details}</p>
            <Link to={`/projects/${item._id}`}>
              <button>View More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProjects;