import React, { useEffect, useState, lazy, Suspense } from "react";
import { getStoredData } from "../../json/fetchData";
import Loader from "../../components/Loader/Loader";

// Lazy load all non-critical components
const AllIntroTemplate = lazy(() => import("../../components/AllIntroTemplate/AllIntroTemplate"));
const AllAboutUs = lazy(() => import("../../components/AllAboutUs/AllAboutUs"));
const AllHighlights = lazy(() => import("../../components/AllHightlights/AllHighlights"));
const AllSectionAbout = lazy(() => import("../../components/AllSectionAbout/AllSectionAbout"));
const AllCompanyProduct = lazy(() => import("../../components/AllCompanyProduct/AllCompanyProduct"));
// const Leadership = lazy(() => import("../../components/Leadership/Leadership")); // only if used
const AllSectionHome =lazy(()=> import("../../components/AllSectionHome/AllSectionHome") );
const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = getStoredData();
    setData(stored);
  }, []);

  if (!data) return <Loader />;

  const Data = data["2"];

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <AllIntroTemplate title={Data.Introsubtitle} image={Data.Introimage} />

        <AllAboutUs
          subtitle={Data.AboutUssubtitle}
          title={Data.AboutUstitle}
          description={Data.AboutUsdescription}
          image={Data.AboutUsimage}
        />

        <AllHighlights sampleData={Data.HighlightsData} />

        {/* <AllSectionAbout
          reverse={true}
          subtitle={Data.AboutUssubtitle}
          title={Data.AboutUstitle}
          highlight={Data.AboutUshighlight}
          description={Data.AboutUsdescription}
          image={Data.AboutUsimage}
        />

        <AllSectionAbout
          subtitle={Data.Highlightssubtitle}
          title={Data.Highlightstitle}
          highlight={Data.Highlightshighlight}
          description={Data.Highlightsdescription}
          image={Data.Highlightsimage}
          reverse={false}
        /> */}
         <AllSectionHome
          reverse={true}
          subtitle={Data.AboutUssubtitle}
          title={Data.AboutUstitle}
          highlight={Data.AboutUshighlight}
          description={Data.AboutUsdescription}
          image={Data.AboutUsimage}
        />

        <AllSectionHome
          subtitle={Data.Highlightssubtitle}
          title={Data.Highlightstitle}
          highlight={Data.Highlightshighlight}
          description={Data.Highlightsdescription}
          image={Data.Highlightsimage}
          reverse={false}
        />

        <AllCompanyProduct
          image={Data.productImage}
          topLabel={Data.productTopLabel}
          highlight={Data.productHighlight}
          description={Data.productDescription}
          buttonText={Data.productButtonText}
          imagesSlider={Data.imagesSlider}
        />

        {/* Uncomment if needed */}
        {/* <Leadership directors={Data.team} /> */}
      </Suspense>
    </div>
  );
};

export default About;
