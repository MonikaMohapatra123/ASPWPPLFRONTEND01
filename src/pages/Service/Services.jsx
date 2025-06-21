


import React from 'react';
import "./Service.css";
import data from "../../json/data.json";
import AllServiceDetails from '../../components/AllServiceDetails/AllServiceDetails';

import AllServiceInfo from '../../components/AllServiceInfo/AllServiceInfo';
import AllServicesIntro from '../../components/AllServicesIntro/AllServicesIntro';
import AllServices from '../../components/AllServices/AllServices';

const Services = () => {
  // const serviceData = data["12"]?.cards;
    const serviceData = data["12"].cards;
    // const serviceDataInfo = data["13"];
  return (
    <div className='services'>
      <AllServicesIntro paragraphText="Our Services"/>
      <AllServices/>
      <AllServiceDetails cards={serviceData} />
    </div>
  );
};

export default Services;
