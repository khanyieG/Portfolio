import React from "react";
// import "../styling/about.css"

const LeftAlign = ({ children }) => {
  return (
    <div className="container">
      <div className="about-wrapper">
        <div className="left-about">
          <div className="i-about">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LeftAlign;
