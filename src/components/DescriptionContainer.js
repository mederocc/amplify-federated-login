import React from "react";
import classes from "./DescriptionContainer.module.css";

function DescriptionContainer({ title, message, description, show, image }) {
  return (
    <div
      className={`${classes["description-container"]} ${
        show ? "" : classes["description-hidden"]
      }`}
    >
      <div className={classes["title-container"]}>{title}</div>
      <div className={classes["message"]}>{message}</div>
      <div className={classes["description"]}>{description}</div>
      <div className={classes["image-container"]}>
        <img src={image} alt={image} />
      </div>
    </div>
  );
}

export default DescriptionContainer;
