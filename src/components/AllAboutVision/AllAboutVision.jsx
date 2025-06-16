
// import React from 'react';
// import './AllAboutVision.css';


// const  AllAboutVision = () => {
//   return (
//     <div className="vision-container">
//       <div className="vision-left">
//         <h5 className="vision-subtitle">FABTECH</h5>
//         <h2 className="vision-title">
//           Our <span>Vision</span>
//         </h2>
//         <hr className="vision-line" />
//         <p className="vision-text">
//           At Fabtech, we envision pioneering the global frontier of engineering, procurement and construction.
//           Through our unwavering commitment to innovation, excellence, and sustainability, we aim to foster a world empowered by reliable and environmentally responsible infrastructure. Our goal is to continually elevate our service offerings, reinforcing our position as a trusted industry leader, while contributing positively to the global communities we serve, all within a framework of integrity and enduring stakeholder relationships.
//         </p>
//       </div>
//       <div className="vision-right">
//         <img src="project-1.jpg" alt="Vision" />
//       </div>
//     </div>
//   );
// };

// export default AllAboutVision;
import React from 'react';
import './AllAboutVision.css';

const AllAboutVision = ({ subtitle, title, highlight, description, image }) => {
  if (!subtitle || !title || !highlight || !description || !image) {
    return <p>No data found.</p>;
  }

  return (
    <div className="vision-container">
      <div className="vision-left">
        <h5 className="vision-subtitle">{subtitle}</h5>
        <h2 className="vision-title">
          {title} <span>{highlight}</span>
        </h2>
        <hr className="vision-line" />
        <p className="vision-text">{description}</p>
      </div>
      <div className="vision-right">
        <img src={image} alt={highlight} />
      </div>
    </div>
  );
};

export default AllAboutVision;

