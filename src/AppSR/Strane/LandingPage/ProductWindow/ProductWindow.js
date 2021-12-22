import React, { useState } from "react";
import "../../../../Styles/ProductWindow/ProductWindow.css";

function ProductWindow() {
  const [windows, setWindows] = useState(true);

  const selectProduct = (product) => {
    if (product === "windows") {
      setWindows(false);
    }
  };

  return (
    <div className="ProductWindow">
      <div className="ProductWindow__container">
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-pvc.jpg" alt="window img" />
          <div className="ProductWindow__productButton">
            {windows ? <button onClick={() => selectProduct("windows")}>Pvc Prozori</button> : null}
            {windows ? null : (
              <div>
                <button>Back</button>
                <button>Pvc Prozor 1</button>
                <button>Pvc Prozor 2</button>
              </div>
            )}
          </div>
        </div>
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-drewniane.jpg" alt="window img" />
          <div className="ProductWindow__productButton">
            <button>Button 1</button>
          </div>
        </div>
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/okna-aluminiowe.jpg" alt="window img" />
          <div className="ProductWindow__productButton">
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
            <button>Button 4</button>
          </div>
        </div>
        <div className="ProductWindow__product">
          <img src="https://www.drutex.eu/static/layout2017/img/grupy-produktow/systemy-hs.jpg" alt="window img" />
          <div className="ProductWindow__productButton">
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
            <button>Button 4</button>
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
