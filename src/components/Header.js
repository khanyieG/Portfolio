import React from "react";
import picture from "../My_pic.png";

const Header = () => {
  return (
    <div id="header" className="container">
      <div className="header-wrapper">
        <div className="left">
            <div className="Home">
                <h2>Welcometh To Mine Own Portfolio</h2>
            </div>
            <div className="main">
                <img src={picture} alt="Myself" />
                <div className="intro">
                    <h2>Hi there!</h2>
                    <p><h3>I am Khanyisile Gama.This is my online portfolio.</h3></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
