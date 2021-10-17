import React from "react";
import "./NavSecond.css";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function NavSecond({ setNavRightOpen, navRightOpen }) {
  return (
    <div className="NavSecond">
      <div className="Nav__body">
        <div className="Nav__bodyMenu">
          {navRightOpen ? (
            <ArrowBackIosIcon onClick={() => setNavRightOpen(!navRightOpen)} sx={{ fontSize: 35 }} />
          ) : (
            <MenuIcon onClick={() => setNavRightOpen(!navRightOpen)} sx={{ fontSize: 35 }} />
          )}

          <button onClick={() => setNavRightOpen(!navRightOpen)}>PRODUCTS</button>
          <a href="/#">WHERE TO BUY</a>
          <a href="/#">ABOUT US</a>
          <a href="/#"> COOPERATION</a>
        </div>
        <SearchIcon onClick={() => setNavRightOpen(!navRightOpen)} sx={{ fontSize: 35 }} />
      </div>
    </div>
  );
}

export default NavSecond;
