import React from "react";
import "./Galerija.css";
import GalerijaFunc from "./GalerijaFunc/GalerijaFunc";
import ImgObjekti from "../../../ImgObjekti";
import ImgCover from "../../../Img/ImgProduct/ImgPageProduct/DoorImg1.jpg";

function Galerija() {
  return (
    <div className="Galerija">
      <div className="Galerija__container">
        <img src={ImgCover} alt="some img" />
        <div className="Galerija__objekti">
          <div className="Galerija__objekat">
            <div className="Galerija__objekatInformacije">
              <h1>Ime Objekta: Objekat1</h1>
              <p>Lokacija: Lokacija</p>
            </div>
            <GalerijaFunc ImgObjekti={ImgObjekti.objekat1} />
          </div>
          <div className="Galerija__objekat">
            <div className="Galerija__objekatInformacije">
              <h1>Ime Objekta: Objekat2</h1>
              <p>Lokacija: Lokacija</p>
            </div>
            <GalerijaFunc ImgObjekti={ImgObjekti.objekat2} />
          </div>
          <div className="Galerija__objekat">
            <div className="Galerija__objekatInformacije">
              <h1>Ime Objekta: Objekat3</h1>
              <p>Lokacija: Lokacija</p>
            </div>
            <GalerijaFunc ImgObjekti={ImgObjekti.objekat3} />
          </div>
          <div className="Galerija__objekat">
            <div className="Galerija__objekatInformacije">
              <h1>Ime Objekta: Objekat4</h1>
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
