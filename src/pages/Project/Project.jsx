import React, { useEffect, useState } from "react";
import AllIntroTemplate from '../../components/AllIntroTemplate/AllIntroTemplate';
import AllProjects from '../../components/AllProjects/AllProjects';
import Loader from "../../components/Loader/Loader";
import { getStoredData } from "../../json/fetchData";
import OurPresence from "../../components/OurPresence/OurPresence";
const Project = () => {
  const [data, setData] = useState(null);
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Load local static data
        const stored = getStoredData();
        setData(stored);

        // Fetch dynamic project data
        const response = await fetch("https://aspwppl-backend.vercel.app/projects");
        const result = await response.json();
        setProjectData(result);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  if (!data || !projectData) return <Loader />;

  const Data = data["3"]; // Assuming this is the key for intro content

  return (
    <div>
      <AllIntroTemplate title={Data.Introsubtitle} image={Data.Introimage} />
      <AllProjects project={projectData} />
      <OurPresence/>
    </div>
  );
};

export default Project;




