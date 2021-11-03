import React from "react";
import "./ButtonNavLeft.css";

function ButtonNavLeft({ buttonName, setSelected, selected, img, imgClass }) {
  return (
    <div onClick={(e) => setSelected(buttonName)} className={imgClass || "ButtonNavLeft"}>
      {img ? <img src={img} alt=" img icon" /> : null}
      <button className="ButtonNavLeft__button">{buttonName}</button>
    </div>
  );
}

export default ButtonNavLeft;
