import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Sovtec from "./components/Sovtech";



function App() {

  return (
    <>
      <Navbar />
      <Header />
      <About/>
      <Education/>
      <Skills/>
      <Sovtec/>
     
    </>

  );
}

export default App;
