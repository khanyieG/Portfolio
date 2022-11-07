import React from "react";
// import "../styling/education.css"

const RightAlign = ({ children }) => {
  return (
    <div className="container">
      <div className="education-wrapper">
        <div className="edu-left"></div>
        <div className="edu-right">
          <div className="right-education">
            <div className="edu">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightAlign;
