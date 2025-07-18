
import React, { useEffect, useState, lazy, Suspense } from "react";
import { getStoredData } from "../../json/fetchData";
import HeroSection from "../../components/Herosection";
import Loader from "../../components/Loader/Loader";

// Lazy load non-critical components
const AllCompanyIntro = lazy(() => import("../../components/AllCompanyIntro/AllCompanyIntro"));
const AllCompanyProject = lazy(() => import("../../components/AllCompanyProject/AllCompanyProject"));
const AllCompanyClient = lazy(() => import("../../components/AllCompanyClient/AllCompanyclient")); // ✅ Capitalize C in 'Client'
const Contact = lazy(() => import("../../components/Contact/Contact"));
const AllcompanyCarousel = lazy(() => import("../../components/AllCompanyCarousel/AllcompanyCarousel")); const AllSectionAbout = lazy(() => import("../../components/AllSectionAbout/AllSectionAbout"));


const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = getStoredData();
    setData(stored);
  }, []);

  if (!data) return <Loader />;

  const Data = data["1"];

  return (
    <div>
      
      <HeroSection />
      <Suspense fallback={<Loader />}>
        <AllCompanyIntro
          title={Data.CompanyIntroTitle}
          established={Data.CompanyIntroEstablished}
          description={Data.CompanyIntroDescription}
          image={Data.CompanyIntroImage}
          buttonText={Data.CompanyIntroButtonText}
          link={Data.CompanyIntroLink}
          iconButton={Data.CompanyIntroIconButton}
        />
        <AllCompanyProject
          title={Data.Projecttitle}
          heading={Data.Projectheading}
          image={Data.Projectimage}
          services={Data.Projectservices}
          button={Data.ProjectbuttonText}
        />
        <AllSectionAbout
          reverse={true}
          subtitle={Data.Projecttitle}
          title={Data.Projectheading}
          image={Data.Projectimage}
          services={Data.Projectservices}
          buttonText={Data.ProjectbuttonText}
          link={Data.ProjectButtonLink}
        />
       
        <AllCompanyClient clients={Data.Client} title={Data.ClientTitle} />
        <Contact
          title={Data.Formtitle}
          fields={Data.Formfields}
          button={Data.FormbuttonText}
          image={Data.ContactImage}
        />
        <AllcompanyCarousel slides={Data.Testimonialslides} />
      </Suspense>
    </div>
  );
};

export default Home; // ✅ Use default export
