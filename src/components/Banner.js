import React from "react";
import classes from "./Banner.module.css";

function Banner({ section, id, topSpacing }) {
  console.log(topSpacing);
  return (
    <div
      id={id}
      className={`${classes["banner-container"]} ${
        topSpacing && classes["top-spacing"]
      }`}
    >
      <hr className={classes.line} />
      <div className={classes.title}>{section}</div>
      <hr className={classes.line} />
    </div>
  );
}

export default Banner;
