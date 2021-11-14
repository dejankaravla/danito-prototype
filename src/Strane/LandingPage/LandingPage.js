import React from "react";
import { NewsData } from "../../NewsData";
import { TipsData } from "../../TipsData";
import Slider from "./Slider/Slider";
import LineAnimation from "../../Komponente/LineAnimation/LineAnimation";
import ProductWindow from "./ProductWindow/ProductWindow";
import Inspiration from "./Inspiration/Inspiration";
import CompanyPresentation from "./CompanyPresentation/CompanyPresentation";
import News from "./News/News";
import Footer from "./Footer/Footer";

function LandingPage({ scroll, setNewsAndTipsData, setPathToNewsAndTips }) {
  return (
    <div>
      <Slider />
      <LineAnimation header1={"Select your windows"} scroll={scroll} scrollY={200} />
      <ProductWindow />
      <LineAnimation header1={"Inspiration"} scroll={scroll} scrollY={800} />
      <Inspiration />
      <CompanyPresentation scroll={scroll} scrollY={2000} />
      <LineAnimation header1={"News"} scroll={scroll} scrollY={2300} />
      <News
        setNewsAndTipsData={setNewsAndTipsData}
        setPathToNewsAndTips={setPathToNewsAndTips}
        NewsData={NewsData}
        buttonType={"More"}
      />
      <LineAnimation header1={"Tips"} scroll={scroll} scrollY={3000} />
      <News
        setNewsAndTipsData={setNewsAndTipsData}
        setPathToNewsAndTips={setPathToNewsAndTips}
        NewsData={TipsData}
        buttonType={"Read"}
      />
      <Footer />
    </div>
  );
}

export default LandingPage;
