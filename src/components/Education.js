import React from "react";

import RightAlign from "./UI/RightAlign";

const Education = () => {
  return (
    <RightAlign>
      <h3>Education</h3>
      <div className="card">
        <div className="card-body">
          <span className="avuxen" href="http://avuxeni.co.za/">
            Avuxeni computer Academy
          </span>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <span className="wtc" href="https://www.wethinkcode.co.za/">
            WeThinkCode_
          </span>
        </div>
      </div>
    </RightAlign>
  );
};

export default Education;
