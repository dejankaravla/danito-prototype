import React from "react";
import "./NavFirst.css";
import Logo from "../../../Img/logo-43x42.png";
import { Link } from "react-router-dom";

function NavFirst() {
  return (
    <div className="NavFirst">
      <div className="Nav__header">
        <div className="Nav__headerLogo">
          <img src={Logo} alt="datito logo" />
          <a href="/" className="Nav__headerText">
            <h3>DANITO</h3>
            <p>ENGINEERED FOR YOU</p>
          </a>
        </div>
        <a href="/SR">SR</a>
      </div>
    </div>
  );
}

export default NavFirst;
