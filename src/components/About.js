import React from "react";

import LeftAlign from "./UI/LeftAlign";

const About = () => {
  return (
    <LeftAlign >
      <div className="About" id="About">
        <h3>About me</h3>
        <div className="card" id="card">
          <div className="card-body">
            I am currently a second-year student at WeThinkCode. I like working in
            teams to solve challenging issues. I am a tenacious and adaptable
            individual that is constantly eager to learn, develop, and improve my
            coding abilities.
          </div>
        </div>
      </div>
    </LeftAlign>
  );
};

export default About;
