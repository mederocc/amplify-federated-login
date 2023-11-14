import React from "react";
import classes from "./AlternativeCard.module.css";

function AlternativeCard({ data }) {
  return (
    <div className={classes["card-container"]}>
      <div className={classes["image-container"]}>
        <img
          src={`/images/herramientas/${
            data.title === "HydroBio" ? "NotHydroBio" : data.title
          }.png`}
          alt={data.title}
        />
      </div>
      <div className={classes["bottom-container"]}>
        <div className={classes.title}>{data.title}</div>
        <div className={classes["text-container"]}>{data.description}</div>
      </div>
    </div>
  );
}

export default AlternativeCard;
