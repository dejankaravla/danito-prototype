import React, { useState, useEffect } from "react";
import "./LandingPage.css";

import NavFirst from "./NavBar/NavFirst/NavFirst";
import NavSecond from "./NavBar/NavSecond/NavSecond";
import NavProduct from "./NavBar/NavProducts/NavProducts";
import Slider from "./Slider/Slider";
import LineAnimation from "../../Komponente/LineAnimation/LineAnimation";
import ProductWindow from "./ProductWindow/ProductWindow";
import Inspiration from "./Inspiration/Inspiration";
import CompanyPresentation from "./CompanyPresentation/CompanyPresentation";
import Footer from "./Footer/Footer";

function LandingPage() {
  const [scroll, setScroll] = useState(0);
  const [navRightOpen, setNavRightOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, [scroll]);

  return (
    <div className="LandingPage">
      <NavFirst />
      <div className="LandingPage__containerFirst">
        <NavProduct navRightOpen={navRightOpen} />
        <div className="LandingPage__right">
          <NavSecond navRightOpen={navRightOpen} setNavRightOpen={setNavRightOpen} />
          <Slider />
          <LineAnimation header1={"Select your windows"} scroll={scroll} scrollY={200} />
          <ProductWindow />
          <LineAnimation header1={"Inspiration"} scroll={scroll} scrollY={800} />
          <Inspiration />
          <CompanyPresentation scroll={scroll} scrollY={2000} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
