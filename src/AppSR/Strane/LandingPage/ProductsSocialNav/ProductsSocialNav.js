import React from "react";
import "./ProductsSocialNav.css";

import { YouTube, Instagram, Facebook } from "@mui/icons-material";

function ProductsSocialNav() {
  return (
    <div className="ProductsSocialNav">
      <div className="ProductsSocialNav__container">
        <div className="ProductsSocialNav__navProducts">
          <button>WINDOW</button>
          <button>DOORS</button>
          <button>SHUTTERS</button>
          <button>FACADES/WINTER GARDERNS</button>
          <button>TERRACE SYSTEMS</button>
          <button>SMART HOME</button>
        </div>
        <div className="ProductsSocialNav__social">
          <YouTube sx={{ fontSize: 40 }} />
          <Instagram sx={{ fontSize: 40 }} />
          <Facebook sx={{ fontSize: 40 }} />
        </div>
      </div>
    </div>
  );
}

export default ProductsSocialNav;
