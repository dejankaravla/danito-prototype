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

          <button onClick={() => setNavRightOpen(!navRightOpen)}>PROIZVODI</button>

          <a href="/#">O NAMA</a>
          <a href="/#"> GALERIJA</a>
        </div>
        <SearchIcon onClick={() => setNavRightOpen(!navRightOpen)} sx={{ fontSize: 35 }} />
      </div>
    </div>
  );
}

export default NavSecond;
