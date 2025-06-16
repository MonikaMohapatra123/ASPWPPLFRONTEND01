
// import React from "react";
// import "./AllCompanyNuclear.css";


// const AllCompanyNuclear = () => {
//   return (
//     <div className="nuclear-container">
//       {/* Left Section */}
//       <div className="nuclear-left">
//         <h4 className="subheading">EXPERIENCE AND EXPERTISE ENGINEERING TEAM</h4>
//         <h1 className="main-heading">
//           <span className="bold">NUCLEAR</span> DIVISION
//         </h1>
//         <div className="divider"></div>
//         <p className="description">
//           These credentials have equipped to provide design and detailed
//           engineering services, including structural, mechanical, electrical,
//           instrumentation, piping and automation for all phases of our
//           assignments.
//         </p>
//         <button className="project-button">
//           CHECK ALL PROJECTS <span className="arrow">→</span>
//         </button>
//       </div>

//       {/* Right Section */}
//       <div className="nuclear-right">
//         <img src="project-4.jpg" alt="Nuclear Project" />
//       </div>
//     </div>
//   );
// };

// export default AllCompanyNuclear;
import { Link } from 'react-router-dom';
import React from "react";
import "./AllCompanyNuclear.css";
import data from "../../json/data.json"; // Update path as needed
import Button from "../Button/Button";

const AllCompanyNuclear = () => {
  const nuclearData = data["5"];

  return (
    <div className="nuclear-container">
      {/* Left Section */}
      <div className="nuclear-left">
        <h4 className="subheading">{nuclearData.title}</h4>
        <h1 className="main-heading">
          <span className="bold">{nuclearData.highlight}</span>{" "}
          {nuclearData.heading.replace(nuclearData.highlight, "").trim()}
        </h1>
        <div className="divider"></div>
        <p className="description">{nuclearData.description}</p>
{/*        
        <Button text="CHECK ALL PROJECTS"/> */}
         <Link to="/projects"><Button text="CHECK ALL PROJECTS" /></Link>
      </div>

      {/* Right Section */}
      <div className="nuclear-right">
        <img src={nuclearData.image} alt="Nuclear Project" />
      </div>
    </div>
  );
};

export default AllCompanyNuclear;

