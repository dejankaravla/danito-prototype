import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PvcProzori1 from "../Proizvodi/Prozori/PvcProzor1";
import "./AppSrpski.css";

import NavFirst from "./NavBar/NavFirst/NavFirst";
import NavSecond from "./NavBar/NavSecond/NavSecond";
import NavProduct from "./NavBar/NavProducts/NavProducts";

import LandingPage from "./LandingPage/LandingPage";

// import Slider from "./Slider/Slider";
// import LineAnimation from "../../Komponente/LineAnimation/LineAnimation";
// import ProductWindow from "./ProductWindow/ProductWindow";
// import Inspiration from "./Inspiration/Inspiration";
// import CompanyPresentation from "./LandingPage/CompanyPresentation/CompanyPresentation";
// import Footer from "./Footer/Footer";

function AppSrpski() {
  const [scroll, setScroll] = useState(0);
  const [navRightOpen, setNavRightOpen] = useState(false);

  const [pathTo, setPathTo] = useState("false");
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, [scroll]);

  return (
    <div className="AppSrpski">
      <Router>
        <NavFirst />
        <div className="AppSrpski__containerFirst">
          <NavProduct setPageName={setPageName} pathTo={pathTo} setPathTo={setPathTo} navRightOpen={navRightOpen} />
          <div className="AppSrpski__right">
            <NavSecond navRightOpen={navRightOpen} setNavRightOpen={setNavRightOpen} />
            <Switch>
              <Route path={pathTo}>
                <PvcProzori1 pageName={pageName} scroll={scroll} />
              </Route>
              <Route path="/">
                <LandingPage scroll={scroll} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default AppSrpski;
