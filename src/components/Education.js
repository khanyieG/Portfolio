import React from "react";

import RightAlign from "./UI/RightAlign";
import LeftAlign from "./UI/LeftAlign";

const Education = () => {
  return (
    <RightAlign>
      <h3 className="Education" id="Education">Education</h3>
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
