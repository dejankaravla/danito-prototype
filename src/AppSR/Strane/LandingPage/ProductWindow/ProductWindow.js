import React, { useState } from "react";
import "../../../../Styles/ProductWindow/ProductWindow.css";

function ProductWindow() {
  const [windowsPvc, setWindowsPvc] = useState(true);
  const [windowsWoodAluminium, setWindowsWoodAluminium] = useState(true);
  const [windowsAluminium, setWindowsAluminium] = useState(true);

  const selectProduct = (product) => {
    if (product === "windowsPvc") {
      setWindowsPvc(false);
      setWindowsWoodAluminium(true);
      setWindowsAluminium(true);
    }
    if (product === "windowsWoodAluminium") {
      setWindowsWoodAluminium(false);
      setWindowsPvc(true);
      setWindowsAluminium(true);
    }
    if (product === "windowsAluminium") {
      setWindowsWoodAluminium(true);
      setWindowsPvc(true);
      setWindowsAluminium(false);
    }
  };

  return (
    <div className="ProductWindow">
      <div className="ProductWindow__container">
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-pvc.jpg" alt="window img" />
          <div className="ProductWindow__ButtonsContainer">
            <div className="ProductWindow__Buttons">
              <button className={windowsPvc ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("windowsPvc")}>
                Pvc Prozori
              </button>
              {windowsPvc ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsPvc(true)}>Back</button> */}
                  <button>Veka 70</button>
                  <button>Veka 82</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={windowsWoodAluminium ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("windowsWoodAluminium")}
              >
                Aluminium Drvo Prozori
              </button>

              {windowsWoodAluminium ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsWoodAluminium(true)}>Back</button> */}
                  <button>Aluminium Drvo Prozori 1</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={windowsAluminium ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("windowsAluminium")}
              >
                Aluminium Prozori
              </button>

              {windowsAluminium ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsAluminium(true)}>Back</button> */}
                  <button>Aluminium Prozor 1</button>
                  <button>Aluminium Prozor 2</button>
                  <button>Aluminium Prozor 2</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-pvc.jpg" alt="window img" />
          <div className="ProductWindow__ButtonsContainer">
            <div className="ProductWindow__Buttons">
              <button className={windowsPvc ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("windowsPvc")}>
                Pvc Prozori
              </button>
              {windowsPvc ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsPvc(true)}>Back</button> */}
                  <button>Veka 70</button>
                  <button>Veka 82</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={windowsWoodAluminium ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("windowsWoodAluminium")}
              >
                Aluminium Drvo Prozori
              </button>

              {windowsWoodAluminium ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsWoodAluminium(true)}>Back</button> */}
                  <button>Aluminium Drvo Prozori 1</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={windowsAluminium ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("windowsAluminium")}
              >
                Aluminium Prozori
              </button>

              {windowsAluminium ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsAluminium(true)}>Back</button> */}
                  <button>Aluminium Prozor 1</button>
                  <button>Aluminium Prozor 2</button>
                  <button>Aluminium Prozor 2</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-pvc.jpg" alt="window img" />
          <div className="ProductWindow__ButtonsContainer">
            <div className="ProductWindow__Buttons">
              <button className={windowsPvc ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("windowsPvc")}>
                Pvc Prozori
              </button>
              {windowsPvc ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsPvc(true)}>Back</button> */}
                  <button>Veka 70</button>
                  <button>Veka 82</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={windowsWoodAluminium ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("windowsWoodAluminium")}
              >
                Aluminium Drvo Prozori
              </button>

              {windowsWoodAluminium ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsWoodAluminium(true)}>Back</button> */}
                  <button>Aluminium Drvo Prozori 1</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={windowsAluminium ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("windowsAluminium")}
              >
                Aluminium Prozori
              </button>

              {windowsAluminium ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsAluminium(true)}>Back</button> */}
                  <button>Aluminium Prozor 1</button>
                  <button>Aluminium Prozor 2</button>
                  <button>Aluminium Prozor 2</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-pvc.jpg" alt="window img" />
          <div className="ProductWindow__ButtonsContainer">
            <div className="ProductWindow__Buttons">
              <button className={windowsPvc ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("windowsPvc")}>
                Pvc Prozori
              </button>
              {windowsPvc ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsPvc(true)}>Back</button> */}
                  <button>Veka 70</button>
                  <button>Veka 82</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={windowsWoodAluminium ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("windowsWoodAluminium")}
              >
                Aluminium Drvo Prozori
              </button>

              {windowsWoodAluminium ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsWoodAluminium(true)}>Back</button> */}
                  <button>Aluminium Drvo Prozori 1</button>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={windowsAluminium ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("windowsAluminium")}
              >
                Aluminium Prozori
              </button>

              {windowsAluminium ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  {/* <button onClick={() => setWindowsAluminium(true)}>Back</button> */}
                  <button>Aluminium Prozor 1</button>
                  <button>Aluminium Prozor 2</button>
                  <button>Aluminium Prozor 2</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="ProductWindow__productHeaders">
        <p>Prozori</p>
        <p>Vrata</p>
        <p>Terasni Sistemi</p>
        <p>Fasade</p>
      </div>
    </div>
  );
}

export default ProductWindow;
