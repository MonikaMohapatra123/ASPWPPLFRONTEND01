
// import React from 'react'
// import data from '../../json/data.json';

// import AllCompanyIntro from '../../components/AllCompanyIntro/AllCompanyIntro'
// import AllCompanyProject from '../../components/AllCompanyProject/AllCompanyProject'
// import AllCompanyProduct from '../../components/AllCompanyProduct/AllCompanyProduct'
// import AllCompanyNuclear from '../../components/AllCompanyNuclear/AllCompanyNuclear'
// import AllCompanyClient from '../../components/AllCompanyClient/AllCompanyclient'
// import Contact from '../../components/Contact/Contact'
// import AllcompanyCarousel from '../../components/AllCompanyCarousel/AllcompanyCarousel'
// import HeroSection from '../../components/Herosection';

// export const Home = () => {
//   return (
//     <div>
//          <HeroSection/>
//         <AllCompanyIntro/>
//         <AllCompanyProject/>
//         <AllCompanyProduct/>
//         <AllCompanyNuclear/>
//         <AllCompanyClient/>
//         <Contact/>
     
//          <AllcompanyCarousel carouselData={data["6"]} />
//     </div>
//   )
// }


import React from 'react';
import data from '../../json/data.json';

import AllCompanyIntro from '../../components/AllCompanyIntro/AllCompanyIntro';
import AllCompanyProject from '../../components/AllCompanyProject/AllCompanyProject';
import AllCompanyProduct from '../../components/AllCompanyProduct/AllCompanyProduct';
import AllCompanyNuclear from '../../components/AllCompanyNuclear/AllCompanyNuclear';
import AllCompanyClient from '../../components/AllCompanyClient/AllCompanyclient';
import Contact from '../../components/Contact/Contact';
import AllcompanyCarousel from '../../components/AllCompanyCarousel/AllcompanyCarousel';
import HeroSection from '../../components/Herosection';

export const Home = () => {
  const companyIntroData = data["2"]; // your JSON object with intro details

  return (
    <div>
      <HeroSection />
      <AllCompanyIntro
        established={companyIntroData.established}
        title={companyIntroData.title}
        companyName={companyIntroData.companyName}
        description={companyIntroData.description}

        image={companyIntroData.image}
        buttonText={companyIntroData.buttonText}


      />
      <AllCompanyProject />
      <AllCompanyProduct />
      <AllCompanyNuclear />
      <AllCompanyClient />
      <Contact />
      <AllcompanyCarousel carouselData={data["6"]} />
    </div>
  );
};
