import React from "react";

import "./NavBar.css";
import Logo from "../../../Img/logo-43x42.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav__header">
        <div className="Nav__headerLogo">
          <img src={Logo} alt="datito logo" />
          <div className="Nav__headerText">
            <h3>DANITO</h3>
            <p>ENGINEERED FOR YOU</p>
          </div>
        </div>
        <button>EN</button>
      </div>
      <div className="Nav__body">
        <div className="Nav__bodyMenu">
          <MenuIcon sx={{ fontSize: 40 }} />

          <a href="/#">PRODUCTS</a>
          <a href="/#">WHERE TO BUY</a>
          <a href="/#">ABOUT US</a>
          <a href="/#"> COOPERATION</a>
        </div>
        <SearchIcon sx={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default Nav;
