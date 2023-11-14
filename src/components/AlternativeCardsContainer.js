import React from "react";
import classes from "./AlternativeCardsContainer.module.css";
import AlternativeCard from "./AlternativeCard";

function AlternativeCardsContainer({ links }) {
  return (
    <div className={classes["cards-container"]}>
      {links.map((link) => (
        <AlternativeCard key={link.title} id={link.title} data={link} />
      ))}
    </div>
  );
}

export default AlternativeCardsContainer;
