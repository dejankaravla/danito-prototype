import React from "react";
import { Link } from "react-router-dom";
import "./ButtonNavLeft.css";
import WindowSvg from "../../Img/WindowSvg.png";

function ButtonNavLeft({ buttonName, setSelected }) {
  return (
    <div onClick={(e) => setSelected(buttonName)} className="ButtonNavLeft">
      <img src={WindowSvg} alt="window img icon" />
      <Link to="/">{buttonName}</Link>
    </div>
  );
}

export default ButtonNavLeft;
