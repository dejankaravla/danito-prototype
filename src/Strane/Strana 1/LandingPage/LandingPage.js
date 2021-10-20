import React from "react";

import Slider from "./Slider/Slider";
import LineAnimation from "../../../Komponente/LineAnimation/LineAnimation";
import ProductWindow from "./ProductWindow/ProductWindow";
import Inspiration from "./Inspiration/Inspiration";
import CompanyPresentation from "./CompanyPresentation/CompanyPresentation";
import Footer from "./Footer/Footer";

function LandingPage({ scroll }) {
  return (
    <div>
      <Slider />
      <LineAnimation header1={"Select your windows"} scroll={scroll} scrollY={200} />
      <ProductWindow />
      <LineAnimation header1={"Inspiration"} scroll={scroll} scrollY={800} />
      <Inspiration />
      <CompanyPresentation scroll={scroll} scrollY={2000} />
      <Footer />
    </div>
  );
}

export default LandingPage;
