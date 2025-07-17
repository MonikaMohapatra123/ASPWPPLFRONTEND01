import React, { useEffect, useState } from 'react';
import "./Service.css";
import AllIntroTemplate from '../../components/AllIntroTemplate/AllIntroTemplate';
import AllServices from '../../components/AllServices/AllServices';
import Loader from "../../components/Loader/Loader";
import { getStoredData } from "../../json/fetchData";

const Services = () => {
  const [introData, setIntroData] = useState(null);
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const stored = getStoredData();
        setIntroData(stored?.["4"]); // Use your actual key for intro

        const response = await fetch("https://aspwppl-backend.vercel.app/activities");
        const result = await response.json();
        setServiceData(result);
      } catch (error) {
        console.error("Error loading services data:", error);
      }
    };

    loadData();
  }, []);

  if (!introData || !serviceData) {
    return <Loader />;
  }

  return (
    <div className='services'>
      <AllIntroTemplate 
        title={introData.Introsubtitle} 
        image={introData.Introimage} 
      />
      <AllServices service={serviceData} />
    </div>
  );
};

export default Services;





