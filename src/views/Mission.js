import React from "react";
import classes from "./Mission.module.css";

function Mission() {
  return (
    <div id="mission" style={{ paddingTop: "6.8rem" }}>
      <div className={classes["mission-container"]}>
        <div className={classes["text"]}>
          <div className={classes.title}>Nuestra misión</div>
          <div className={classes.subtitle}>
            Potenciar la mejora continua y la transformación digital promoviendo
            una cultura data-driven sustentada en datos integrados de alta
            calidad, decisiones soportadas por modelos analíticos complejos y la
            implementación de soluciones tecnológicas innovadoras.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
