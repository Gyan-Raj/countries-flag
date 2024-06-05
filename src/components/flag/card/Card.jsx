import React from "react";
import style from "./Card.module.css";

function Card(prop) {
  // console.log(prop);
  let { name, flag, alt } = prop.data;
  //   console.log(name);
  //   console.log(flag);
  //   console.log(alt);
  return (
    <div className={style.container}>
      <div className={style.imageWrapper}>
        <img src={flag} alt={alt} className={style.image} />
      </div>
      <div className={style.nameWrapper}>
        <p className={style.name}>{name}</p>
      </div>
    </div>
  );
}

export default Card;
