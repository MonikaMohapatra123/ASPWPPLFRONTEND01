// import React from 'react'
// import "./Project1.css";
// import { Link } from 'react-router-dom';

// const Project1 = () => {
//   return (
//     <div className='company-project-intro'>
//       <div className='company-project-intro-content'>
//          <p>CONTACT US</p>
//           <Link>HOME</Link>
//       </div>
//     </div>
//   )
// }

// export default  Project1 


import React from 'react';
import "./ProjectIntro.css";
import { Link } from 'react-router-dom';

const ProjectIntro = ({ paragraph, linkText, linkTo }) => {
  return (
    <div className='company-project-intro'>
      <div className='company-project-intro-content'>
        <p>{paragraph}</p>
        <Link to={linkTo || '/'}>{linkText}</Link>
        <Link to="/projects">PROJECTS</Link>
      </div>
    </div>
  );
};

export default ProjectIntro;
