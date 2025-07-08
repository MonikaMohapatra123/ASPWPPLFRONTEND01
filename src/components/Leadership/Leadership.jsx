import React from "react";
import data from "../../json/data.json";
import "./Leadership.css";

const Leadership = ({directors}) => {

  return (
    <div className="directors-container">
      {directors.map((member, index) => (
        <div className="director-card" key={index}>
          <img
            src={`/${member.image}`}  // assuming image paths in JSON don't start with '/'
            alt={member.name}
            className="director-image"
          />
          <h4 className="director-name">{member.name}</h4>
          <p className="director-position">{member.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Leadership;
