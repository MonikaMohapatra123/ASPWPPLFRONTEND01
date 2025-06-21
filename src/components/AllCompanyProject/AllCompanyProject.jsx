
// import React from 'react';
// import data from '../../json/data.json';
// import { FaChevronRight } from 'react-icons/fa';
// import './AllCompanyProject.css';
// import Button from '../Button/Button';
// import { Link } from 'react-router-dom';
// const AllCompanyProject = () => {
//   const projectData = data["3"];
//   return (
//     <div className="allcompanyproject-container">
//       <div className="allcompanyproject-left">
//         <h4>{projectData.title}</h4>
//         <h1><span className="allcompanyproject-bold">EPCC</span> {projectData.heading}</h1>
//         <div className="allcompanyproject-underline" />
//         <ul className="allcompanyproject-services-list">
//           {projectData.services.map((item, index) => (
//             <li key={index}>▣ {item}</li>
//           ))}
           
//         </ul>
//         <Link to="/projects"><Button text="CHECK ALL PROJECTS" /></Link>
           
//              {/* <FaChevronRight /> */}
       
//       </div>
//       <div className="allcompanyproject-right">
//         <img alt="project-img" src={projectData.image} />
//       </div>
//     </div>
//   );
// };

// export default AllCompanyProject;


import React, { useEffect } from 'react';
import data from '../../json/data.json';
import { Link } from 'react-router-dom';
import './AllCompanyProject.css';
import Button from '../Button/Button';
import { motion, useAnimate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AllCompanyProject = () => {
  const projectData = data["3"];

  // Setup animation hooks
  const [scope, animate] = useAnimate();
  const [ref, inView] = useInView();

  // Trigger animation when in view
  useEffect(() => {
    if (inView) {
      animate(scope.current, { opacity: 1, x: 0 }, { duration: 1 });
    }
  }, [inView, animate, scope]);

  return (
    <div className="allcompanyproject-container">
      <div className="allcompanyproject-left">
        <h4>{projectData.title}</h4>
        <h1>
          <span className="allcompanyproject-bold">EPCC</span> {projectData.heading}
        </h1>
        <div className="allcompanyproject-underline" />
        <ul className="allcompanyproject-services-list">
          {projectData.services.map((item, index) => (
            <li key={index}>▣ {item}</li>
          ))}
        </ul>
        <Link to="/projects">
          <Button text="CHECK ALL PROJECTS" />
        </Link>
      </div>

      {/* Animate image from right to left */}
      <motion.div
        ref={(node) => {
          scope.current = node;
          ref(node);
        }}
        className="allcompanyproject-right"
        initial={{ opacity: 0, x: 100 }} // 👈 image comes from right
      >
        <img alt="project-img" src={projectData.image} />
      </motion.div>
    </div>
  );
};

export default AllCompanyProject;



