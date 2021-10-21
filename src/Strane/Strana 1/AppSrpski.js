import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PvcProzori1 from "../Proizvodi/Prozori/PvcProzor1";
import "./AppSrpski.css";

import NavFirst from "./NavBar/NavFirst/NavFirst";
import NavSecond from "./NavBar/NavSecond/NavSecond";
import NavProduct from "./NavBar/NavProducts/NavProducts";

import LandingPage from "./LandingPage/LandingPage";

function AppSrpski() {
  const [scroll, setScroll] = useState(0);
  const [navRightOpen, setNavRightOpen] = useState(false);

  const [pathTo, setPathTo] = useState("false");
  const [pageName, setPageName] = useState("");

  const [data, setData] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, [scroll]);

  // console.log(data);

  return (
    <div className="AppSrpski">
      <Router>
        <NavFirst />
        <div className="AppSrpski__containerFirst">
          <NavProduct
            setData={setData}
            setPageName={setPageName}
            pathTo={pathTo}
            setPathTo={setPathTo}
            navRightOpen={navRightOpen}
          />
          <div className="AppSrpski__right">
            <NavSecond navRightOpen={navRightOpen} setNavRightOpen={setNavRightOpen} />
            <Switch>
              <Route path={pathTo}>
                <PvcProzori1 data={data} pageName={pageName} scroll={scroll} />
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
