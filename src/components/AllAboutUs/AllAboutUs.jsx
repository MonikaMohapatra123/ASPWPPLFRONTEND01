// import React from 'react';
// import './AllAboutUs.css';


// const AllAboutUs = () => {
//   return (
//     <div className="about-section">
//       <div className="about-text">
//         <h4 className="about-subtitle">ABOUT OUR</h4>
//         <h2 className="about-title">
//           Fabtech Projects and <br /> Engineers Ltd. (FPEL)
//         </h2>
//         <div className="underline"></div>
//         <p>
//           Established in 1992 and headquartered in the city of Baner, Pune, <strong>Fabtech Projects and Engineers Ltd. (FPEL)</strong> – A <strong>Dineshchandra Group</strong> of Company stands as a testament to engineering excellence and innovation. With a profound expertise in LSTK & EPCC projects, FPEL has etched a strong presence across the Up-Stream (Onshore), Mid-Stream, and Down Stream Sectors...
//           {/* Truncated for simplicity; use full paragraph here */}
//         </p>
//       </div>
//       <div className="about-image">
//         <img src="project-5.jpg" alt="Plant" />
//       </div>
//     </div>
//   );
// };

// export default AllAboutUs;



import React from 'react';
import './AllAboutUs.css';

const AllAboutUs = ({ subtitle, title, description, image }) => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h4 className="about-subtitle">{subtitle}</h4>
        <h2 className="about-title">{title}</h2>
        <div className="underline"></div>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
      <div className="about-image">
        <img src={image} alt="About Us" />
      </div>
    </div>
  );
};

export default AllAboutUs;

