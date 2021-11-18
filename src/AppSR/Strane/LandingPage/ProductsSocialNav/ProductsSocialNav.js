import React from "react";
import "./ProductsSocialNav.css";

import { YouTube, Instagram, Facebook } from "@mui/icons-material";

function ProductsSocialNav() {
  return (
    <div className="ProductsSocialNav">
      <div className="ProductsSocialNav__container">
        <div className="ProductsSocialNav__navProducts">
          <button>PROZORI</button>
          <button>VRATA</button>
          <button>ROLETNE</button>
          <button>FASADE</button>
          <button>TERASNI SISTEMI</button>
          <button>DODATNO</button>
        </div>
        <div className="ProductsSocialNav__social">
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com/danito_pvc/">
            <Instagram sx={{ fontSize: 40 }} />
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.facebook.com/Danito.PVC.ALU.stolarija/">
            <Facebook sx={{ fontSize: 40 }} />
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.youtube.com/">
            <YouTube sx={{ fontSize: 40 }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductsSocialNav;
