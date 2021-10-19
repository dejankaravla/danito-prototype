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

import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function NavProducts({ navRightOpen }) {
  const initialButtonsState = ["PROZORI", "VRATA", "ROLETNE", "FASADE", "TERASNI SISTEMI"];
  const initialImgState = [windowImg, doorsImg, roletneImg, fasadeImg, teraseImg, dodatnoImg];

  const [selected, setSelected] = useState("");
  const [buttons, setButtons] = useState(["PROZORI", "VRATA", "ROLETNE", "FASADE", "TERASNI SISTEMI"]);
  const [img, setImg] = useState([windowImg, doorsImg, roletneImg, fasadeImg, teraseImg, dodatnoImg]);

  const prozori = "PROZORI";
  const vrata = "VRATA";
  const roletne = "ROLETNE";
  const fasade = "FASADE";
  const terasniSistemi = "TERASNI SISTEMI";

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
    }

    // Vrata
    if (selected === vrata) {
      setButtons(["PVC VRATA", "DRVENA VRATA", "ALUMINIUM VRATA"]);
      setImg([doorPvcImg, doorWoodImg, doorAluminiumImg]);
    }
    // Roletne
    if (selected === roletne) {
      setButtons(["PVC ROLETNE", "ALUMINIUM ROLETNE"]);
    }
    // Komarnici
    if (selected === fasade) {
      setButtons(["PVC FASADE", "ALUMINIUM FASADE"]);
    }
    // Paneli
    if (selected === terasniSistemi) {
      setButtons(["PVC TERASNI SISTEMI", "ALUMINIUM TERASNI SISTEMI"]);
    }

    // -----------> 3. Stepenik

    // Prozori
    if (selected === pvcProzori) {
      setButtons(["PVC PROZOR 1", "PVC PROZOR 2", "PVC PROZOR 3", "PVC PROZOR 4", "PVC PROZOR 5"]);
    }

    if (selected === drveniProzori) {
      setButtons(["DRVENI PROZOR 1", "DRVENI PROZOR 2", "DRVENI PROZOR 3"]);
    }

    if (selected === drvoAluminiumProzori) {
      setButtons(["DRVO ALUMINIUM PROZOR 1", "DRVO ALUMINIUM PROZOR 2", "DRVO ALUMINIUM PROZOR 3"]);
    }
    if (selected === aluminiumProzori) {
      setButtons(["ALUMINIUM PROZOR 1", "ALUMINIUM PROZOR 2", "ALUMINIUM PROZOR 3", "ALUMINIUM PROZOR 4"]);
    }

    // Vrata
    if (selected === pvcVrata) {
      setButtons(["PVC VRATA 1", "PVC VRATA 2"]);
    }
    if (selected === drvoVrata) {
      setButtons(["DRVENA VRATA 1", "DRVENA VRATA 2", "DRVENA VRATA 3", "DRVENA VRATA 4"]);
    }
    if (selected === aluminiumVrata) {
      setButtons(["ALUMINIUM VRATA 1", "ALUMINIUM VRATA 2", "ALUMINIUM VRATA 3", "ALUMINIUM VRATA 4"]);
    }

    // Roletne
    if (selected === pvcRoletne) {
      setButtons(["PVC ROLETNE 1", "PVC ROLETNE 2"]);
    }
    if (selected === aluminiumRoletne) {
      setButtons(["ALUMINIUM ROLETNE 1", "ALUMINIUM ROLETNE 2", "ALUMINIUM ROLETNE 3", "ALUMINIUM ROLETNE 4"]);
    }

    // Fasade
    if (selected === pvcFasade) {
      setButtons(["PVC FASADE 1", "PVC FASADE 2"]);
    }
    if (selected === aluminiumFasade) {
      setButtons(["ALUMINIUM FASADE 1", "ALUMINIUM FASADE 2", "ALUMINIUM FASADE 3", "ALUMINIUM FASADE 4"]);
    }

    // Terasni Sistemi
    if (selected === pvcTerase) {
      setButtons(["PVC TERASNI SISTEMI 1", "PVC TERASNI SISTEMI 2"]);
    }
    if (selected === aluminiumTerase) {
      setButtons(["ALUMINIUM TERASNI SISTEMI 1", "ALUMINIUM TERASNI SISTEMI 2", "ALUMINIUM TERASNI SISTEMI 3"]);
    }
  }, [selected]);

  const backHandler = () => {
    setButtons(initialButtonsState);
    setImg(initialImgState);
    setSelected(false);
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
  ];

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
            <Link to={`/${pathButton.filter((path) => path === but)}`}>
              <ButtonNavLeft img={img[i]} selected={selected} setSelected={setSelected} buttonName={but} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavProducts;
