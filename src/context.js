import { Button } from "@mui/material";
import React, { useState, createContext, useContext } from "react";

// Criação do contexto
const ColorContext = createContext();

const Component2 = () => {
  const { color1, color2, setColor1, setColor2 } = useContext(ColorContext);

  return (
    <div style={{ backgroundColor: color2, padding: "10px" }}>
      <h2 style={{ color: "white" }}>Componente 2</h2>
      <div class="button-container">
        <Button
          variant="contained"
          onClick={() => setColor1(color1 === "green" ? "red" : "green")}
        >
          Componente 1
        </Button>
        <Button
          variant="contained"
          onClick={() => setColor2(color2 === "red" ? "green" : "red")}
        >
          Componente 2
        </Button>
      </div>
    </div>
  );
};

const ContextComponent = () => {
  const [color1, setColor1] = useState("green");
  const [color2, setColor2] = useState("red");

  return (
    <ColorContext.Provider value={{ color1, color2, setColor1, setColor2 }}>
      <div>
        <h2>Metodo Com Context</h2>
        <div
          style={{
            backgroundColor: color1,
            padding: "20px",
            minHeight: "200px",
          }}
        >
          <h1 style={{ color: "white" }}>Componente 1</h1>
          <div class="button-container">
            <Button
              variant="contained"
              onClick={() => setColor1(color1 === "green" ? "red" : "green")}
            >
              Componente 1
            </Button>
            <Button
              variant="contained"
              onClick={() => setColor2(color2 === "red" ? "green" : "red")}
            >
              Componente 2
            </Button>
          </div>
          <Component2 />
        </div>
      </div>
    </ColorContext.Provider>
  );
};

export default ContextComponent;
