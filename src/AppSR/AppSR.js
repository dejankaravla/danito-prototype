import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PvcProzori1 from "./Strane/Proizvodi/Proizvodi";
import "./AppSR.css";

import NavFirst from "./Komponente/NavBar/NavFirst/NavFirst";
import NavSecond from "./Komponente/NavBar/NavSecond/NavSecond";
import NavProduct from "./Komponente/NavBar/NavProducts/NavProducts";

import LandingPage from "./Strane/LandingPage/LandingPage";
import TipsPage from "./Strane/TipsPage/TipsPage";
import Kontakt from "./Strane/Kontakt/Kontakt";

function AppSR() {
  const [scroll, setScroll] = useState(0);
  const [navRightOpen, setNavRightOpen] = useState(false);

  const [pathTo, setPathTo] = useState("false");
  const [pageName, setPageName] = useState("");

  const [pathToTipsPage, setPathToTipsPage] = useState("");
  const [tipsData, setTipsData] = useState("");

  const [data, setData] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, [scroll]);

  return (
    <div className="AppSR">
      <Router>
        <NavFirst />
        <div className="AppSR__containerFirst">
          <NavProduct
            setData={setData}
            setPageName={setPageName}
            pathTo={pathTo}
            setPathTo={setPathTo}
            navRightOpen={navRightOpen}
          />
          <div className="AppSR__right">
            <NavSecond navRightOpen={navRightOpen} setNavRightOpen={setNavRightOpen} />
            <Switch>
              <Route path={pathTo}>
                <PvcProzori1 data={data} pageName={pageName} scroll={scroll} />
              </Route>
              <Route path="/TipsPage">
                <TipsPage scroll={scroll} tipsData={tipsData} />
              </Route>
              <Route path="/kontakt">
                <Kontakt scroll={scroll} />
              </Route>
              <Route path="/">
                <LandingPage setTipsData={setTipsData} setPathToTipsPage={setPathToTipsPage} scroll={scroll} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default AppSR;
