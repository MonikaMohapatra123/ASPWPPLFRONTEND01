import React, { useEffect, useState, lazy, Suspense } from "react";
import Loader from "../../components/Loader/Loader";
import { getStoredData } from "../../json/fetchData";
import "./Service.css";

// Lazy loaded components
const AllIntroTemplate = lazy(() => import('../../components/AllIntroTemplate/AllIntroTemplate'));
const AllServices = lazy(() => import('../../components/AllServices/AllServices'));

const Services = () => {
  const [introData, setIntroData] = useState(null);
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    // Load static intro data
    const stored = getStoredData();
    setIntroData(stored?.["4"]);

    // Fetch dynamic service data
    const fetchServiceData = async () => {
      try {
        const response = await fetch("https://aspwppl-backend.vercel.app/activities");
        const result = await response.json();
        setServiceData(result);
      } catch (error) {
        console.error("Error loading service data:", error);
      }
    };

    fetchServiceData();
  }, []);

  if (!introData || !serviceData) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <div className="services">
        <AllIntroTemplate 
          title={introData.Introsubtitle} 
          image={introData.Introimage} 
        />
        <AllServices service={serviceData} />
      </div>
    </Suspense>
  );
};

export default Services;
