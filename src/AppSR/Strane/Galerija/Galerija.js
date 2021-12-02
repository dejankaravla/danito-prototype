import React from "react";
import "../../../Styles/Galerija/Galerija.css";
import LineAnimation from "../../Komponente/LineAnimation/LineAnimation";
import GalerijaFunc from "./GalerijaFunc";
import ImgObjekti from "../../../ImgObjekti";
import ImgCover from "../../../Img/ImgProduct/ImgPageProduct/DoorImg1.jpg";

function Galerija({ scroll }) {
  return (
    <div className="Galerija">
      <div className="Galerija__container">
        <img src={ImgCover} alt="some img" />
        <LineAnimation header1={"Galerija"} scroll={scroll} scrollY={400} />
        <div className="Galerija__objekti">
          <div className="Galerija__objekat">
            <div className="Galerija__objekatInformacije">
              <h2>Objekat1</h2>
              <p>Lokacija: Lokacija</p>
            </div>
            <GalerijaFunc ImgObjekti={ImgObjekti.objekat1} />
          </div>
          <div className="Galerija__objekat">
            <div className="Galerija__objekatInformacije">
              <h2>Objekat2</h2>
              <p>Lokacija: Lokacija</p>
            </div>
            <GalerijaFunc ImgObjekti={ImgObjekti.objekat2} />
          </div>
          <div className="Galerija__objekat">
            <div className="Galerija__objekatInformacije">
              <h2>Objekat3</h2>
              <p>Lokacija: Lokacija</p>
            </div>
            <GalerijaFunc ImgObjekti={ImgObjekti.objekat3} />
          </div>
          <div className="Galerija__objekat">
            <div className="Galerija__objekatInformacije">
              <h2>Objekat4</h2>
              <p>Lokacija: Lokacija</p>
            </div>
            <GalerijaFunc ImgObjekti={ImgObjekti.objekat4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galerija;
