
import React from "react";
import "./AllServices.css";

const AllServices = ({ service }) => {
  if (!service || !Array.isArray(service)) return null;

  return (
    <div className="allservices-container">
      {service.map((item, index) => (
        <div
          className={`allservices-block ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
        >
          <div className="allservices-left">
            <img
              src={item?.photo?.[0]?.url || item.ContentPhoto}
              alt={item.title}
              loading="lazy"
            />
          </div>

          <div className="allservices-right">
            <h5 className="allservices-subtitle">{item.subtitle}</h5>
            <h2 className="allservices-title">
              {item.title} <span>{item.highlight}</span>
            </h2>
            <hr className="allservices-line" />
            <p className="allservices-text">{item.details}</p>
            {/* <button>{item.Header || "View Details"}</button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllServices;

