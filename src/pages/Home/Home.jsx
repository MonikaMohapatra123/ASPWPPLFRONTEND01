import React, { useEffect, useState } from "react";
import { getStoredData } from "../../json/fetchData";
import AllCompanyIntro from "../../components/AllCompanyIntro/AllCompanyIntro";
import AllCompanyProject from "../../components/AllCompanyProject/AllCompanyProject";
import AllCompanyClient from "../../components/AllCompanyClient/AllCompanyclient";
import Contact from "../../components/Contact/Contact";
import AllcompanyCarousel from "../../components/AllCompanyCarousel/AllcompanyCarousel";
import HeroSection from "../../components/Herosection";
import Loader from "../../components/Loader/Loader"; // ✅ import loader

import AllSectionAbout from "../../components/AllSectionAbout/AllSectionAbout";

export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = getStoredData();
    setData(stored);
  }, []);

  if (!data) return <Loader />; // ✅ show loader until data loads

  const Data = data["1"];

  return (
    <div>
      <HeroSection />
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
        reverse={true} // image on left
        subtitle={Data.Projecttitle}
        title={Data.Projectheading}
        image={Data.Projectimage}
        services={Data.Projectservices}
        buttonText={Data.ProjectbuttonText}
        link={Data.ProjectButtonLink}
      />

      {/* <AllCompanyNuclear
        title={Data.Pipingtitle}
        highlight={Data.Pipinghighlight}
        heading={Data.Pipingheading}
        description={Data.Pipingdescription}
        image={Data.Pipingimage}
      /> */}
      <AllCompanyClient clients={Data.Client} title={Data.ClientTitle} />
      <Contact
        title={Data.Formtitle}
        fields={Data.Formfields}
        button={Data.FormbuttonText}
        image={Data.ContactImage}
      />
      <AllcompanyCarousel slides={Data.Testimonialslides} />
    </div>
  );
};
