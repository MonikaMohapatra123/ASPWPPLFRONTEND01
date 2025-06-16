
// import React from 'react';
// import './AllCompanyIntro.css';
// import data from '../../json/data.json'; // Adjust path as needed

// const AllCompanyIntro = () => {
//   const companyData = data["2"]; // Get id 2

//   if (!companyData) return <p>No data found.</p>;

//   const {
//     established,
//     title,
//     companyName,
//     description,
//     image,
//     buttonText,
//   } = companyData;

//   return (
//     <div className="company-intro">
//       <div className="company-left-side">
//         <div>{established}</div>
//         <div>
//           <span>{title.split(' ')[0]}</span>
//           <span> {title.split(' ').slice(1).join(' ')}</span>
//         </div>
//         <div>{companyName}</div>
//         <p>{description}</p>
//         <button>{buttonText}</button>
//       </div>
//       <div className="company-right-side">
//         <img src={image} alt="company-img" />
//       </div>
//     </div>
//   );
// };

// export default AllCompanyIntro;



import React from 'react';
import './AllCompanyIntro.css';
import Button from '../Button/Button';
 import {Link} from "react-router-dom" ;
const AllCompanyIntro = ({ established, title, companyName, description, image, buttonText }) => {
  if (!established || !title || !companyName || !description || !image || !buttonText) {
    return <p>No data found.</p>;
  }

  return (
    <div className="company-intro">
      <div className="company-left-side">
        <div>{established}</div>
        <div>
          <span>{title.split(' ')[0]}</span>
          <span> {title.split(' ').slice(1).join(' ')}</span>
        </div>
        <div>{companyName}</div>
        <p>{description}</p>
        {/* <button>{buttonText}</button> ✅ Button added here */}
     <Link to="/about"> <Button text="READ OUR STORY" /></Link>
      </div>

      <div className="company-right-side">
        <img src={image} alt="company" /> {/* ✅ Image added here */}
      </div>
    </div>
  );
};

export default AllCompanyIntro;
