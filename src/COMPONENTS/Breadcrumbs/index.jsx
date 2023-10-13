import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Breadcrums.module.css";
const BreadCrumbs = () => {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +`/ ${crumb}`;
      return (
        <div className={style.crumbLink} key={crumb}>
          <Link to={currentLink}>{crumb}/</Link>
        </div>
      );
    });

  return <div className={style.breadcrumbs}>{crumbs}</div>;
};

export default BreadCrumbs;
