
import React from 'react';
import AboutIntro from '../../components/AboutIntro/AboutIntro';
import AllAboutUs from '../../components/AllAboutUs/AllAboutUs';
import AllAboutVision from '../../components/AllAboutVision/AllAboutVision';
import AllAboutMission from '../../components/AllAboutMission/AllAboutMission';
import AllCompanyPPT from"../../components/AllCompanyPPT/AllCompanyPPT";
import data from '../../json/data.json';
import AllHighlights from '../../components/AllHightlights/AllHighlights';
import Leadership from '../../components/Leadership/Leadership';

const About = () => {
  const aboutUsData = data["8"];
  const aboutVisionData = data["9"];
  const aboutMissionData = data["10"];
  const pdfData = data["11"];

  return (
    <div>
      <AboutIntro />
      <AllAboutUs
        subtitle={aboutUsData.subtitle}
        title={aboutUsData.title}
        description={aboutUsData.description}
        image={aboutUsData.image}
      />
        <AllHighlights/>
      <AllAboutVision
        subtitle={aboutVisionData.subtitle}
        title={aboutVisionData.title}
        highlight={aboutVisionData.highlight}
        description={aboutVisionData.description}
        image={aboutVisionData.image}
      />
      <AllAboutMission
        subtitle={aboutMissionData.subtitle}
        title={aboutMissionData.title}
        highlight={aboutMissionData.highlight}
        description={aboutMissionData.description}
        image={aboutMissionData.image}
      />
    
    <Leadership/>
<AllCompanyPPT data={pdfData} />
    </div>
  );
};

export default About;

