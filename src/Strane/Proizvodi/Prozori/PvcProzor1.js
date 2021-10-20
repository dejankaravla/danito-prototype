import React from "react";
import "./PvcProzor1.css";

import LineAnimation from "../../../Komponente/LineAnimation/LineAnimation";

import windowCoverImg from "../../../Img/ImgProduct/ImgPageProduct/WindowImg1.jpg";

function ProductPage({ scroll, pageName }) {
  return (
    <div className="ProductPage">
      <div className="ProductPage__container">
        <div className="ProductPage__imgContainer">
          <img src={windowCoverImg} alt="danito window cover" />
        </div>
        <LineAnimation pageName={pageName} scroll={scroll} scrollY={200} />
      </div>
    </div>
  );
}

export default ProductPage;
