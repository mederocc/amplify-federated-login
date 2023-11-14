import React from "react";
import classes from "./Herramientas.module.css";
import AlternativeCardsContainer from "../components/AlternativeCardsContainer";

function Herramientas({ data }) {
  return (
    <div id="Herramientas" className={classes["outer-herramientas-container"]}>
      <div className={classes["herramientas-container"]}>
        <div className={classes["title-container"]}>
          {/* <hr className={classes.line} /> */}
          <div className={classes.title}>Herramientas</div>
          {/* <hr className={classes.line} /> */}
        </div>

        {data.map((category) => (
          <div
            className={classes["herramientas-category"]}
            id={category.id}
            key={category.id}
          >
            <div className={classes["section-container"]}>{category.title}</div>
            <div className={classes["card-container"]}>
              <AlternativeCardsContainer links={category.links} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Herramientas;
