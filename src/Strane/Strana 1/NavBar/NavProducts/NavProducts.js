import React, { useState, useEffect, useRef } from "react";
import "./NavProducts.css";
import ButtonNavLeft from "../../../../Komponente/ButtonNavLeft/ButtonNavLeft";

import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function NavProducts({ navRightOpen }) {
  const [selected, setSelected] = useState("");
  const [buttons, setButtons] = useState([
    "WINDOWS",
    "DOORS",
    "SHUTTERS",
    "EXTERIOR VENETIAN BLEND",
    "FACADES/WINTER GARDENS",
    "TERRACE SYSTEMS",
    "SMART HOME",
    "ADDITIONS",
  ]);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const prevButtons = usePrevious(buttons);

  const back = () => {
    setButtons(prevButtons);
  };

  console.log(prevButtons);

  const windows = "WINDOWS";
  const doors = "DOORS";
  const shutters = "SHUTTERS";
  const exterior = "EXTERIOR VENETIAN BLEND";
  const facades = "FACADES/WINTER GARDENS";
  const terrace = "TERRACE SYSTEMS";
  const smartHome = "SMART HOME";
  const additions = "ADDITIONS";

  const pvcWindows = "PVC WINDOWS";
  const woodenWindows = "WOODEN WINDOWS";
  const woodAluminiumWindows = "WOOD-ALUMINIUM WINDOWS";
  const aluminiumWindows = "ALUMINIUM WINDOWS";

  const pvcDoors = "DOORS PVC";
  const woodenDoors = "WOODEN DOORS";
  const aluminiumDoors = "ALUMINIUM DOORS";

  const shuttersAdaptive = "ADAPTIVE";
  const shuttersTopMounted = "TOP-MOUNTED";

  const fasades = "FASADES";
  const winterGardens = "WINTER GARDENS";

  const liftAndSlideHs = "LIFT AND SLIDE HS";
  const tiltAndSlidePsk = "TILT AND SLIDE PSK";
  const foldingDoors = "FOLDING DOORS";

  useEffect(() => {
    if (selected === windows) {
      setButtons(["PVC WINDOWS", "WOODEN WINDOWS", "WOOD-ALUMINIUM WINDOWS", "ALUMINIUM WINDOWS"]);
    }
    if (selected === pvcWindows) {
      setButtons(["IGLO LIGHT", "IGLO ENERGY", "IGLO ENERGY CLASSC", "IGLO 5", "IGLO 5 CLASSIC"]);
    }
    if (selected === doors) {
      setButtons(["DOORS PVC", "WOODEN DOORS", "ALUMINIUM DOORS"]);
    }
    if (selected === shutters) {
      setButtons(["ADAPTIVE", "TOP-MOUNTED"]);
    }
    if (selected === exterior) {
      setButtons(["PVC WINDOWS", "WOODEN WINDOWS", "WOOD-ALUMINIUM WINDOWS", "ALUMINIUM WINDOWS"]);
    }
    if (selected === facades) {
      setButtons(["FACADES", "WINTER GARDENS"]);
    }
    if (selected === terrace) {
      setButtons(["LIFT AND SLIDE HS", "TILT AND SLIDE PSK", "FOLDING DOORS"]);
    }
    if (selected === smartHome) {
      setButtons(["PVC WINDOWS", "WOODEN WINDOWS", "WOOD-ALUMINIUM WINDOWS", "ALUMINIUM WINDOWS"]);
    }
    if (selected === additions) {
      setButtons(["PVC WINDOWS", "WOODEN WINDOWS", "WOOD-ALUMINIUM WINDOWS", "ALUMINIUM WINDOWS"]);
    }
  }, [selected]);
  console.log(selected);

  return (
    <div className={navRightOpen ? "Nav__productsVisible" : "Nav__productsHiden"}>
      {selected ? (
        <div className="Nav__productsSelected">
          <ArrowBackIosIcon
            onClick={() => {
              back();
            }}
            sx={{ fontSize: 35 }}
          />
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
        {buttons.map((but) => {
          return <ButtonNavLeft setSelected={setSelected} buttonName={but} />;
        })}
      </div>
    </div>
  );
}

export default NavProducts;
