import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./ActionButton.module.css";

function ActionButton({ children, style, href, onClick }) {
  return (
    <a
      style={{ textDecoration: "none", color: "inherit" }}
      href={href ? `#${href.replace(" ", "_")}` : null}
    >
      <Button
        onClick={onClick}
        style={style}
        className={classes.button}
        variant="success"
      >
        {children}
      </Button>
    </a>
  );
}

export default ActionButton;
