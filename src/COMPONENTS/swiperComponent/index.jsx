import React from "react";
import style from "./Swipercomponent.module.css";
import { Link } from "react-router-dom";
const swiperComponent = (props) => {
  return (
    
    <div className={style.full}>
      <div className={style.swiperParent}>
        <img src={props?.data?.image} />
      </div>
      
      <Link to={props?.data?.href} style={{textDecoration:"none"}}>{props?.data?.title}</Link>

      <div className={style.square}></div>
    </div>
  );
};

export default swiperComponent;
