import React, { useState, useEffect } from 'react';
import ContactSection from '../../components/AllComapanyContact/AllCompanyContact';
import AllIntroTemplate from '../../components/AllIntroTemplate/AllIntroTemplate';
import { getStoredData } from '../../json/fetchData';
import Loader from '../../components/Loader/Loader';
import OurPresence from '../../components/OurPresence/OurPresence';

const ContactMe = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = getStoredData();
    setData(stored["5"]);
  }, []);

  if (!data) return <Loader />;

  // console.log(data);

  

  return (
    <div>
      <AllIntroTemplate title={data.Introsubtitle} image={data.Introimage} />
      <ContactSection office={data.offices} fields={data.contactFormFields} Api={"https://aspwppl-backend.vercel.app/form"}/>
      <OurPresence/>
    </div>
  );
};

export default ContactMe;
