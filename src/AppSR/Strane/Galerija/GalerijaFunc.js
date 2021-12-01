import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function GalerijaFunc({ ImgObjekti, className }) {
  return <ReactImageGallery items={ImgObjekti} additionalClass={className} showThumbnails={false} />;
}

export default GalerijaFunc;
