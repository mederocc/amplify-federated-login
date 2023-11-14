import React from "react";
import classes from "./Card.module.css";
import { svgIcons } from "../svg-icons";

function Card({ title, subtitle, link, index, show, icon }) {
  const directions = ["top", "right", "left", "bottom"];

  const handleVisitClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className={`${classes.card} ${
        !show ? classes[`hidden-${directions[index]}`] : classes.visible
      }`}
    >
      <div className={classes["text-area"]}>
        <div className={classes["icon-container"]}>
          <div dangerouslySetInnerHTML={{ __html: svgIcons[icon] }} />
        </div>

        <div className={classes["card-title"]}>{title}</div>
        <div className={classes["card-subtitle"]}>{subtitle}</div>
      </div>
      <div className={classes["card-link"]} onClick={handleVisitClick}>
        Visitar sitio
      </div>
    </div>
  );
}

export default Card;
