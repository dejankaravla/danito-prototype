import React from "react";
import "./NewsAndTips.css";
import LineAnimation from "../../Komponente/LineAnimation/LineAnimation";

function NewsAndTips({ NewsAndTipsData, scroll }) {
  return (
    <div className="NewsAndTips">
      <div className="NewsAndTips__container">
        <div className="NewsAndTips__imgContainer">
          <img src={NewsAndTipsData.coverImg} alt="some img" />
        </div>
        <LineAnimation header1={NewsAndTipsData.name} scroll={scroll} scrollY={200} />
        <div className="NewsAndTips__articleText">
          <h3>{NewsAndTipsData.header}</h3>
          <div className="NewsAndTips__text">
            {NewsAndTipsData.text.map((data) => {
              return <p>{data}</p>;
            })}
          </div>
          <p className="NewsAndTips__datePosted">{NewsAndTipsData.date}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsAndTips;
