import React, { useEffect, useState, lazy, Suspense } from "react";
import Loader from "../../components/Loader/Loader";
import { getStoredData } from "../../json/fetchData";

// ✅ Lazy imports
const AllIntroTemplate = lazy(() => import("../../components/AllIntroTemplate/AllIntroTemplate"));
const AllProjects = lazy(() => import("../../components/AllProjects/AllProjects"));
const OurPresence = lazy(() => import("../../components/OurPresence/OurPresence"));

const Project = () => {
  const [data, setData] = useState(null);
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const stored = getStoredData();
        setData(stored);

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

  const Data = data["3"];

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <AllIntroTemplate title={Data.Introsubtitle} image={Data.Introimage} />
        <AllProjects project={projectData} />
        <OurPresence />
      </div>
    </Suspense>
  );
};

export default Project;
