import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavProducts.css";
import ButtonNavLeft from "../../../../Komponente/ButtonNavLeft/ButtonNavLeft";

import windowImg from "../../../../Img/ImgProduct/window.png";
import doorsImg from "../../../../Img/ImgProduct/door.png";
import roletneImg from "../../../../Img/ImgProduct/roletne.png";
import fasadeImg from "../../../../Img/ImgProduct/fasade.png";
import teraseImg from "../../../../Img/ImgProduct/terasniSistemi.png";
import dodatnoImg from "../../../../Img/ImgProduct/dodatno.png";

import windowPvcImg from "../../../../Img/ImgProduct/windowPVC.png";
import windowWoodImg from "../../../../Img/ImgProduct/windowWOOD.png";
import windowWoodAluminiumImg from "../../../../Img/ImgProduct/windowWOODALUMINIUM.png";
import windowAluminiumImg from "../../../../Img/ImgProduct/windowALUMINIUM.png";

import doorPvcImg from "../../../../Img/ImgProduct/doorPVC.png";
import doorWoodImg from "../../../../Img/ImgProduct/doorWOOD.png";
import doorAluminiumImg from "../../../../Img/ImgProduct/doorALUMINIUM.png";

import roletnePVCImg from "../../../../Img/ImgProduct/roletnePvc.png";
import roletneAluminiumImg from "../../../../Img/ImgProduct/roletneAluminium.png";

import fasadePVC from "../../../../Img/ImgProduct/fasadaPVC.png";
import fasadeALUMINIUM from "../../../../Img/ImgProduct/fasadaAluminium.png";

import terasePVC from "../../../../Img/ImgProduct/terasePvc.png";
import teraseDRVO from "../../../../Img/ImgProduct/teraseDrvo.png";
import teraseALUMINIUM from "../../../../Img/ImgProduct/teraseAluminium.png";

import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function NavProducts({ navRightOpen, setPathTo, setPageName }) {
  const initialButtonsState = ["PROZORI", "VRATA", "ROLETNE", "FASADE", "TERASNI SISTEMI"];
  const initialImgState = [windowImg, doorsImg, roletneImg, fasadeImg, teraseImg, dodatnoImg];

  const [selected, setSelected] = useState("");
  const [buttons, setButtons] = useState(["PROZORI", "VRATA", "ROLETNE", "FASADE", "TERASNI SISTEMI", "DODATNO"]);
  const [img, setImg] = useState([windowImg, doorsImg, roletneImg, fasadeImg, teraseImg, dodatnoImg]);
  const [imgClass, setImgClass] = useState("");

  const prozori = "PROZORI";
  const vrata = "VRATA";
  const roletne = "ROLETNE";
  const fasade = "FASADE";
  const terasniSistemi = "TERASNI SISTEMI";
  const dodatno = "DODATNO";

  const pvcProzori = "PVC PROZORI";
  const drveniProzori = "DRVENI PROZORI";
  const drvoAluminiumProzori = "DRVO-ALUMINIUM PROZORI";
  const aluminiumProzori = "ALUMINIUM PROZORI";

  const pvcVrata = "PVC VRATA";
  const drvoVrata = "DRVENA VRATA";
  const aluminiumVrata = "ALUMINIUM VRATA";

  const pvcRoletne = "PVC ROLETNE";
  const aluminiumRoletne = "ALUMINIUM ROLETNE";

  const pvcFasade = "PVC FASADE";
  const aluminiumFasade = "ALUMINIUM FASADE";

  const pvcTerase = "PVC TERASNI SISTEMI";
  const aluminiumTerase = "ALUMINIUM TERASNI SISTEMI";

  useEffect(() => {
    // -----------> 2. Stepenik

    // Prozori
    if (selected === prozori) {
      setButtons(["PVC PROZORI", "DRVENI PROZORI", "DRVO-ALUMINIUM PROZORI", "ALUMINIUM PROZORI"]);
      setImg([windowPvcImg, windowWoodImg, windowWoodAluminiumImg, windowAluminiumImg]);
      setImgClass("ButtonNavLeftTopImg");
    }

    // Vrata
    if (selected === vrata) {
      setButtons(["PVC VRATA", "DRVENA VRATA", "ALUMINIUM VRATA"]);
      setImg([doorPvcImg, doorWoodImg, doorAluminiumImg]);
      setImgClass("ButtonNavLeftTopImg");
    }
    // Roletne
    if (selected === roletne) {
      setButtons(["PVC ROLETNE", "ALUMINIUM ROLETNE"]);
      setImg([roletnePVCImg, roletneAluminiumImg]);
      setImgClass("ButtonNavLeftTopImg");
    }
    // Fasade
    if (selected === fasade) {
      setButtons(["PVC FASADE", "ALUMINIUM FASADE"]);
      setImg([fasadePVC, fasadeALUMINIUM]);
      setImgClass("ButtonNavLeftTopImg");
    }
    // Terasni Sistemi
    if (selected === terasniSistemi) {
      setButtons(["PVC TERASNI SISTEMI", "DRVENI TERASNI SISTEMI", "ALUMINIUM TERASNI SISTEMI"]);
      setImg([terasePVC, teraseDRVO, teraseALUMINIUM]);
      setImgClass("ButtonNavLeftTopImg");
    }

    // Dodatno
    if (selected === dodatno) {
      setButtons(["DODATNO"]);
      setImg([dodatnoImg]);
      setImgClass("ButtonNavLeftTopImg");
    }

    // -----------> 3. Stepenik

    // Prozori
    if (selected === pvcProzori) {
      setButtons(["PVC PROZOR 1", "PVC PROZOR 2", "PVC PROZOR 3", "PVC PROZOR 4", "PVC PROZOR 5"]);
      setImg("");
    }

    if (selected === drveniProzori) {
      setButtons(["DRVENI PROZOR 1", "DRVENI PROZOR 2", "DRVENI PROZOR 3"]);
      setImg("");
    }

    if (selected === drvoAluminiumProzori) {
      setButtons(["DRVO ALUMINIUM PROZOR 1", "DRVO ALUMINIUM PROZOR 2", "DRVO ALUMINIUM PROZOR 3"]);
      setImg("");
    }
    if (selected === aluminiumProzori) {
      setButtons(["ALUMINIUM PROZOR 1", "ALUMINIUM PROZOR 2", "ALUMINIUM PROZOR 3", "ALUMINIUM PROZOR 4"]);
      setImg("");
    }

    // Vrata
    if (selected === pvcVrata) {
      setButtons(["PVC VRATA 1", "PVC VRATA 2"]);
      setImg("");
    }
    if (selected === drvoVrata) {
      setButtons(["DRVENA VRATA 1", "DRVENA VRATA 2", "DRVENA VRATA 3", "DRVENA VRATA 4"]);
      setImg("");
    }
    if (selected === aluminiumVrata) {
      setButtons(["ALUMINIUM VRATA 1", "ALUMINIUM VRATA 2", "ALUMINIUM VRATA 3", "ALUMINIUM VRATA 4"]);
      setImg("");
    }

    // Roletne
    if (selected === pvcRoletne) {
      setButtons(["PVC ROLETNE 1", "PVC ROLETNE 2"]);
      setImg("");
    }
    if (selected === aluminiumRoletne) {
      setButtons(["ALUMINIUM ROLETNE 1", "ALUMINIUM ROLETNE 2", "ALUMINIUM ROLETNE 3", "ALUMINIUM ROLETNE 4"]);
      setImg("");
    }

    // Fasade
    if (selected === pvcFasade) {
      setButtons(["PVC FASADE 1", "PVC FASADE 2"]);
      setImg("");
    }
    if (selected === aluminiumFasade) {
      setButtons(["ALUMINIUM FASADE 1", "ALUMINIUM FASADE 2", "ALUMINIUM FASADE 3", "ALUMINIUM FASADE 4"]);
      setImg("");
    }

    // Terasni Sistemi
    if (selected === pvcTerase) {
      setButtons(["PVC TERASNI SISTEMI 1", "PVC TERASNI SISTEMI 2"]);
      setImg("");
    }
    if (selected === aluminiumTerase) {
      setButtons(["ALUMINIUM TERASNI SISTEMI 1", "ALUMINIUM TERASNI SISTEMI 2", "ALUMINIUM TERASNI SISTEMI 3"]);
      setImg("");
    }
  }, [selected]);

  const backHandler = () => {
    setButtons(initialButtonsState);
    setImg(initialImgState);
    setSelected(false);
    setImgClass("");
  };

  const pathButton = [
    "PVC PROZOR 1",
    "PVC PROZOR 2",
    "PVC PROZOR 3",
    "PVC PROZOR 4",
    "PVC PROZOR 5",
    "DRVENI PROZOR 1",
    "DRVENI PROZOR 2",
    "DRVENI PROZOR 3",
    "DRVO ALUMINIUM PROZOR 1",
    "DRVO ALUMINIUM PROZOR 2",
    "DRVO ALUMINIUM PROZOR 3",
    "ALUMINIUM PROZOR 1",
    "ALUMINIUM PROZOR 2",
    "ALUMINIUM PROZOR 3",
    "ALUMINIUM PROZOR 4",
    "PVC VRATA 1",
    "PVC VRATA 2",
    "DRVENA VRATA 1",
    "DRVENA VRATA 2",
    "DRVENA VRATA 3",
    "DRVENA VRATA 4",
    "ALUMINIUM VRATA 1",
    "ALUMINIUM VRATA 2",
    "ALUMINIUM VRATA 3",
    "ALUMINIUM VRATA 4",
    "PVC ROLETNE 1",
    "PVC ROLETNE 2",
    "ALUMINIUM ROLETNE 1",
    "ALUMINIUM ROLETNE 2",
    "ALUMINIUM ROLETNE 3",
    "ALUMINIUM ROLETNE 4",
    "PVC FASADE 1",
    "PVC FASADE 2",
    "ALUMINIUM FASADE 1",
    "ALUMINIUM FASADE 2",
    "ALUMINIUM FASADE 3",
    "ALUMINIUM FASADE 4",
    "PVC TERASNI SISTEMI 1",
    "PVC TERASNI SISTEMI 2",
    "ALUMINIUM TERASNI SISTEMI 1",
    "ALUMINIUM TERASNI SISTEMI 2",
    "ALUMINIUM TERASNI SISTEMI 3",
    "DODATNO",
  ];

  const setProductPath = (value) => {
    pathButton.filter((path) => {
      if (path === value) {
        setPathTo(`/${path}`);
        setPageName(value);
      } else return "";
    });
  };

  console.log(selected);

  return (
    <div className={navRightOpen ? "Nav__productsVisible" : "Nav__productsHiden"}>
      {selected ? (
        <div className="Nav__productsSelected">
          <ArrowBackIosIcon onClick={backHandler} sx={{ fontSize: 35 }} />
          <p>{selected}</p>
        </div>
      ) : (
        <div className="Nav__searchContainer">
          <div className="Nav__search">
            <SearchIcon sx={{ fontSize: 35 }} />
            <input autoFocus placeholder="Search" />
          </div>
        </div>
      )}
      <div className="Nav__productsContainer">
        {buttons.map((but, i) => {
          return (
            <Link to={`/${pathButton.filter((path) => path === but)}`} onClick={() => setProductPath(but)}>
              <ButtonNavLeft
                imgClass={imgClass}
                img={img[i]}
                selected={selected}
                setSelected={setSelected}
                buttonName={but}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavProducts;
