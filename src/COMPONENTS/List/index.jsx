import React from "react";
import { useState } from "react";
import style from "./List.module.css";
const List = (props) => {
  const [list, setList] = useState("hello");
  return (
    <div className={style.listComponent}>
      <p>{props.data}</p>
    </div>
  );
};

export default List;
