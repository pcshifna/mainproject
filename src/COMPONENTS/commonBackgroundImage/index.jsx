import React from "react";
import BreadCrumbs from "../Breadcrumbs/index";
import style from "./commonBackgroundImage.module.css";

const commonBackgroundImage = (props) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${props.backImage})`,
  };
  return (
    <div className={style.reuse}>
      <div className={style.pathDisplay}>
        <BreadCrumbs />
      </div>
      <div className={style.allBackground} style={backgroundImageStyle}>
        <p>{props.data}</p>
      </div>
    </div>
  );
};

export default commonBackgroundImage;
