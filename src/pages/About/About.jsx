import React, { useEffect, useState } from "react";
import AllIntroTemplate from "../../components/AllIntroTemplate/AllIntroTemplate";
import AllAboutUs from "../../components/AllAboutUs/AllAboutUs";
import AllAboutVision from "../../components/AllAboutVision/AllAboutVision";
import AllAboutMission from "../../components/AllAboutMission/AllAboutMission";
import { getStoredData } from "../../json/fetchData";
import AllHighlights from "../../components/AllHightlights/AllHighlights";
import Leadership from "../../components/Leadership/Leadership";
import Loader from "../../components/Loader/Loader";
import AllSectionAbout from "../../components/AllSectionAbout/AllSectionAbout";
import AllCompanyProduct from "../../components/AllCompanyProduct/AllCompanyProduct";

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
      <AllIntroTemplate title={Data.Introsubtitle} image={Data.Introimage} />
      <AllAboutUs
        subtitle={Data.AboutUssubtitle}
        title={Data.AboutUstitle}
        description={Data.AboutUsdescription}
        image={Data.AboutUsimage}
      />
      <AllHighlights sampleData={Data.HighlightsData} />

      <AllSectionAbout
        reverse={true} // image on left
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
        reverse={false} // image on right
      />

      <AllCompanyProduct
        image={Data.productImage}
        topLabel={Data.productTopLabel}
        highlight={Data.productHighlight}
        description={Data.productDescription}
        buttonText={Data.productButtonText}
        imagesSlider={Data.imagesSlider}
      />
{/* 
      <Leadership directors={Data.team} /> */}
    </div>
  );
};

export default About;
