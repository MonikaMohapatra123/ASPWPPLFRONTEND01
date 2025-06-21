
import React from 'react';
import "./AllServicesIntro.css";
import { Link } from 'react-router-dom';

const AllServicesIntro = ({ paragraphText }) => {
  return (
    <div className='AllServices'> 
        <img src='project-3.jpg' alt='AllServices'/>
        <div className='AllServices-para'>
            <p>{paragraphText}</p>
        </div>
         <div className='AllServices-home'>
            
      
                 <Link to="/">HOME</Link><Link to='/projects'>PROJECT</Link></div>
    </div>
  );
};

export default AllServicesIntro;

