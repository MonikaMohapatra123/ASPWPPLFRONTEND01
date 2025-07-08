<<<<<<< HEAD



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
=======
import React, { useEffect, useState } from 'react';
import "./Service.css";
import AllIntroTemplate from '../../components/AllIntroTemplate/AllIntroTemplate';
import AllServices from '../../components/AllServices/AllServices';
import AllServiceDetails from '../../components/AllServiceDetails/AllServiceDetails';
import Loader from "../../components/Loader/Loader";
import { getStoredData } from "../../json/fetchData";

const Services = () => {
  const [introData, setIntroData] = useState(null);
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const stored = getStoredData();
        setIntroData(stored?.["4"]); // Assuming "4" is the services intro section

        const response = await fetch("https://aspwppl-backend.vercel.app/activities");
        const result = await response.json();
        setServiceData(result);
      } catch (error) {
        console.error("Error loading services data:", error);
      }
    };

    loadData();
  }, []);

  if (!introData || !serviceData) return <Loader />;

  return (
    <div className='services'>
      <AllIntroTemplate title={introData.Introsubtitle} image={introData.Introimage} />
      <AllServices service={serviceData} />
      <AllServiceDetails service={serviceData} />
    </div>
  );
};

export default Services;
>>>>>>> 103ce2c (WIP: Save progress before rebase)
