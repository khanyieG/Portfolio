import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {

  return (
    <>
      <Particles
        params={{
          particles:{
            number:{
              value: 40,
              density: {
                enable: true,
                value_area: 900
              }
            }
          }

        }}>
      </Particles>
      <Navbar />
      <Header />  
    </>
  );
}

export default App;
