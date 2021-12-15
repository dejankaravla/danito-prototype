import React from "react";

function GalerijaFunc({ ImgObjekti }) {
  return (
    <div className="Images">
      {ImgObjekti.map((item) => {
        return <img alt="objekti images" src={item.original}></img>;
      })}
    </div>
  );
}

export default GalerijaFunc;
