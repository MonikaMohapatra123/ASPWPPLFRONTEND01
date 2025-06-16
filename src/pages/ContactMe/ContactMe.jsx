import React from 'react'
import Contact from '../../components/Contact/Contact'
import CompanyIntro from '../../AllCompanyContactIntro/CompanyIntro'
import ContactSection from '../../AllComapanyContact/AllCompanyContact'


const ContactMe = () => {
  return (
    <div>
         <CompanyIntro/>
         <ContactSection/>
         <Contact/>
    </div>
  )
}

export default ContactMe