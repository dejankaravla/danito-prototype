import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./GaleriFunc.css";

function GalerijaFunc({ ImgObjekti }) {
  return (
    <ReactImageGallery
      //   showBullets={true}
      //   showIndex={true}
      //   showThumbnails={false}
      //   showPlayButton={false}
      //   originalHeight="50"
      slideDuration={1000}
      lazyLoad={false}
      items={ImgObjekti}
      thumbnailPosition="left"
      thumbnailWidth={200}
      originalClass="alo"
      //   thumbnailHeight="100px"
      //   thumbnailHeight="1000px"
      //   thumbnailWidth={"2000px"}
      //   originalHeight="2000px"
      additionalClass="alo"
      showThumbnails={false}
      size={200}
    />
  );
}

export default GalerijaFunc;
