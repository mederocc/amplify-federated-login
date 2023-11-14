import React, { useState } from "react";
import classes from "./LanguageSwitch.module.css";

function LanguageSwitch(props) {
  const [selectedLanguage, setSelectedLanguage] = useState("ES");

  const handleLanguageChange = () => {
    setSelectedLanguage(selectedLanguage === "EN" ? "ES" : "EN");
  };

  const labelClasses = `${classes.ball} ${
    selectedLanguage === "ES" ? classes.checked : ""
  }`;

  return (
    <section className={classes["model-2"]}>
      <div className={classes.checkbox} onClick={handleLanguageChange}>
        <label>
          <div className={classes["text-container"]}>
            <div>ES</div>
            <div>EN</div>
          </div>
        </label>
        <div className={labelClasses}></div>
      </div>
    </section>
  );
}

export default LanguageSwitch;
