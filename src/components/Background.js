import React from "react";

function Background({ children }) {
  return (
    <div className="bg-container">
      <div className="blue-gradient"></div>
      <div className="pink-gradient"></div>
      <div>{children}</div>
    </div>
  );
}

export default Background;
