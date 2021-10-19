import React from "react";
// import { Link } from "react-router-dom";
import "./ButtonNavLeft.css";
import WindowSvg from "../../Img/WindowSvg.png";
import { Link } from "react-router-dom";

function ButtonNavLeft({ buttonName, setSelected, selected, img }) {
  return (
    <div onClick={(e) => setSelected(buttonName)} className="ButtonNavLeft">
      <img src={img} alt="window img icon" />
      <button>{buttonName}</button>
    </div>
  );
}

export default ButtonNavLeft;
