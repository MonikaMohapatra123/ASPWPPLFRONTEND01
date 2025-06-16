import React from 'react'
import "./CompanyIntro.css";
import { Link } from 'react-router-dom';

const CompanyIntro = () => {
  return (
    <div className='company-contact-intro'>
      <div className='company-contact-intro-content'>
         <p>CONTACT US</p>
          <Link>HOME</Link>
      </div>
    </div>
  )
}

export default CompanyIntro