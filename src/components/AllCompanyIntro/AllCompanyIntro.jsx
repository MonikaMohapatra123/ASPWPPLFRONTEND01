<<<<<<< HEAD

// // // import React from 'react';
// // // import './AllCompanyIntro.css';
// // // import data from '../../json/data.json'; // Adjust path as needed

// // // const AllCompanyIntro = () => {
// // //   const companyData = data["2"]; // Get id 2

// // //   if (!companyData) return <p>No data found.</p>;

// // //   const {
// // //     established,
// // //     title,
// // //     companyName,
// // //     description,
// // //     image,
// // //     buttonText,
// // //   } = companyData;

// // //   return (
// // //     <div className="company-intro">
// // //       <div className="company-left-side">
// // //         <div>{established}</div>
// // //         <div>
// // //           <span>{title.split(' ')[0]}</span>
// // //           <span> {title.split(' ').slice(1).join(' ')}</span>
// // //         </div>
// // //         <div>{companyName}</div>
// // //         <p>{description}</p>
// // //         <button>{buttonText}</button>
// // //       </div>
// // //       <div className="company-right-side">
// // //         <img src={image} alt="company-img" />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AllCompanyIntro;



// // import React from 'react';
// // import './AllCompanyIntro.css';
// // import Button from '../Button/Button';
// //  import {Link} from "react-router-dom" ;
// // const AllCompanyIntro = ({ established, title, companyName, description, image, buttonText }) => {
// //   if (!established || !title || !companyName || !description || !image || !buttonText) {
// //     return <p>No data found.</p>;
// //   }

// //   return (
// //     <div className="company-intro">
// //       <div className="company-left-side">
// //         <div>{established}</div>
// //         <div>
// //           <span>{title.split(' ')[0]}</span>
// //           <span> {title.split(' ').slice(1).join(' ')}</span>
// //         </div>
// //         <div>{companyName}</div>
// //         <p>{description}</p>
// //         {/* <button>{buttonText}</button> ✅ Button added here */}
// //      <Link to="/about"> <Button text="READ OUR STORY" /></Link>
// //       </div>

// //       <div className="company-right-side">
// //         <img src={image} alt="company" /> {/* ✅ Image added here */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AllCompanyIntro;


import React, { useEffect } from 'react';
import './AllCompanyIntro.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { motion, useAnimate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AllCompanyIntro = ({ established, title, companyName, description, image, buttonText }) => {
  // Hooks must be at the top
  const [scope, animate] = useAnimate();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animate(scope.current, { opacity: 1, x: 0 }, { duration: 1 });
    }
  }, [inView, animate, scope]);

  // Early return for missing props
  if (!established || !title || !companyName || !description || !image || !buttonText) {
    return <p>No data found.</p>;
  }

  return (
    <div className="company-intro">
      <div className="company-left-side">
        <div className="company-established">{established}</div>
        <div className="company-title">
          <span>{title.split(' ')[0]}</span>
          <span> {title.split(' ').slice(1).join(' ')}</span>
        </div>
        <div className="company-name">{companyName}</div>
        <p className="company-description">{description}</p>
        <Link to="/about">
          <Button text="READ OUR STORY" />
        </Link>
      </div>

      <motion.div
        ref={(node) => {
          scope.current = node;
          ref(node);
        }}
        className="company-right-side"
        initial={{ opacity: 0, x: 100 }} // 👈 animate from right to left
      >
        <img src={image} alt="company" />
      </motion.div>
    </div>
  );
};

export default AllCompanyIntro;
=======
import React from "react";
import "./AllCompanyIntro.css";
import Button from "../Button/Button";

const AllCompanyIntro = ({
  established,
  title,
  companyName,
  description,
  image,
  buttonText,
  link,
}) => {
  const [titleFirstWord, ...titleRest] = title.split(" ");

  return (
    <section className="company-intro">
      <div className="company-left-side">
        <div className="company-established">{established}</div>

        <h2 className="company-title">
          <span>{titleFirstWord}</span>
          <span> {titleRest.join(" ")}</span>
        </h2>

        <hr className="company-divider" />

        <p className="company-description">{description}</p>

        <Button text={buttonText} link={link} />
      </div>

      <div className="company-right-side">
        <img src={image} alt={`${companyName} office`} loading="lazy" />
      </div>
    </section>
  );
};

export default AllCompanyIntro;
>>>>>>> 103ce2c (WIP: Save progress before rebase)
