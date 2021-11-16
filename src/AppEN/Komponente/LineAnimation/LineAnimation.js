import React from "react";
import "./LineAnimation.css";

function LineAnimation(props) {
  return (
    <div className="LineAnimation">
      <div className="LineAnimation__container">
        <h2 className={props.scroll >= props.scrollY ? "LineAnimation__headingVidible" : "LineAnimation__headingHiden"}>
          {props.header1}
        </h2>
        <div
          className={props.scroll >= props.scrollY ? "LineAnimation__lineVisible" : "LineAnimation__lineHiden"}
        ></div>
      </div>
    </div>
  );
}

export default LineAnimation;
