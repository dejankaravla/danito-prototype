import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PvcProzori1 from "../Strane/Proizvodi/Proizvodi";
import "./AppENG.css";

import NavFirst from "../Komponente/NavBar/NavFirst/NavFirst";
import NavSecond from "../Komponente/NavBar/NavSecond/NavSecond";
import NavProduct from "../Komponente/NavBar/NavProducts/NavProducts";

import LandingPage from "../Strane/LandingPage/LandingPage";
import NewsAndTips from "../Strane/NewsAndTips/NewsAndTips";
import Kontakt from "../Strane/Kontakt/Kontakt";

function AppENG() {
  const [scroll, setScroll] = useState(0);
  const [navRightOpen, setNavRightOpen] = useState(false);

  const [pathTo, setPathTo] = useState("false");
  const [pageName, setPageName] = useState("");

  const [pathToNewsAndTips, setPathToNewsAndTips] = useState("");
  const [NewsAndTipsData, setNewsAndTipsData] = useState("");

  const [data, setData] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, [scroll]);

  return (
    <div className="AppENG">
      <Router>
        <NavFirst />
        <div className="AppENG__containerFirst">
          <NavProduct
            setData={setData}
            setPageName={setPageName}
            pathTo={pathTo}
            setPathTo={setPathTo}
            navRightOpen={navRightOpen}
          />
          <div className="AppENG__right">
            <NavSecond navRightOpen={navRightOpen} setNavRightOpen={setNavRightOpen} />
            <Switch>
              <Route path={pathTo}>
                <PvcProzori1 data={data} pageName={pageName} scroll={scroll} />
              </Route>
              <Route path="/NewsAndTips">
                <NewsAndTips scroll={scroll} NewsAndTipsData={NewsAndTipsData} />
              </Route>
              <Route path="/kontakt">
                <Kontakt scroll={scroll} />
              </Route>
              <Route path="/">
                <LandingPage
                  setNewsAndTipsData={setNewsAndTipsData}
                  setPathToNewsAndTips={setPathToNewsAndTips}
                  scroll={scroll}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default AppENG;
