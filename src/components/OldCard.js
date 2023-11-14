import React from "react";
import classes from "./OldCard.module.css";

function OldCard({ img, alt, text }) {
  return (
    <div className={classes["card-container"]}>
      <div className={classes["image-container"]}>
        <img src={img} alt={alt}></img>
      </div>
      <div className={classes.text}>{text}</div>
    </div>
  );
}

export default OldCard;
