import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./GaleriFunc.css";

function GalerijaFunc({ ImgObjekti }) {
  return (
    <ReactImageGallery
      slideDuration={1000}
      lazyLoad={false}
      items={ImgObjekti}
      thumbnailPosition="left"
      thumbnailWidth={200}
      additionalClass="ImageGalery"
      showThumbnails={false}
      size={200}
    />
  );
}

export default GalerijaFunc;
