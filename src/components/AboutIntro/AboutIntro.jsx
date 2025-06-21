
import React from 'react'
import"./AboutIntro.css";
import { Link } from 'react-router-dom';
const AboutIntro = () => {
  return (
    <div className='AboutIntro'> 
        <img src='road-1.jpg' alt='AboutIntro'/>
        <div className='AboutIntro-para'>
                <p>Company Introduction</p>
               
             
        </div>
        <div className='about-intro-home'> <Link to="/">HOME</Link><Link to='/projects'>PROJECT</Link></div>
    </div>
  )
}

export default AboutIntro