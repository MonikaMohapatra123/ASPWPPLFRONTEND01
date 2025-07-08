import React from "react";
import "./AllServices.css";

const AllServices = ({ service }) => {
  if (!service || !Array.isArray(service)) return null;

  return (
    <div className="image-slide-grid">
      {service.map((item, index) => (
        <div className="slide-box" key={index}>
          <img
            src={item?.photo?.[0]?.url || item.ContentPhoto}
            alt={item.title}
            className="slide-image"
          />
          <div className="slide-overlay">
            <h3>{item.title}</h3>
            <p>{item.details}</p>
            <button>{item.Header || "View Details"}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllServices;
