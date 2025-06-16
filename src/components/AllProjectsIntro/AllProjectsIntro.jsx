import {Link} from "react-router-dom";
import React from 'react'
import "./AllProjectsIntro.css";
const AllProjectsIntro = () => {
  return (
 
         <div className='AllProjectsIntro'> 
        <img src='project-1.jpg' alt='AllProjectsIntro'/>
        <div className='AllProjectsIntro-para'>
            <p>Company Projects</p>
        </div>
        <div className='AllProjectsIntro-home'>
           
        </div>
         <div className='about-intro-home'> <Link to="/">HOME</Link></div>
    </div>
  )
}

export default AllProjectsIntro