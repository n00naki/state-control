import { Button } from "@mui/material";
import React, { useState } from "react";

const Component2 = ({ changeColor1, changeColor2, color }) => {
  return (
    <div style={{ backgroundColor: color, padding: "10px" }}>
      <h2 style={{ color: "white" }}>Componente 2</h2>
      <div class="button-container">
        <Button variant="contained" onClick={changeColor1}>
          Componente 1
        </Button>
        <Button variant="contained" onClick={changeColor2}>
          Componente 2
        </Button>
      </div>
    </div>
  );
};

const Roots = () => {
  const [color1, setColor1] = useState("green");
  const [color2, setColor2] = useState("red");

  const handleChangeColor1 = () => {
    setColor1((prevColor) => (prevColor === "green" ? "red" : "green"));
  };

  const handleChangeColor2 = () => {
    setColor2((prevColor) => (prevColor === "red" ? "green" : "red"));
  };

  return (
    <div>
      <h2>Metodo Simples</h2>
      <div
        style={{ backgroundColor: color1, padding: "20px", minHeight: "200px" }}
      >
        <h1 style={{ color: "white" }}>Componente 1</h1>
        <div class="button-container">
          <Button variant="contained" onClick={handleChangeColor1}>
            Componente 1
          </Button>
          <Button variant="contained" onClick={handleChangeColor2}>
            Componente 2
          </Button>
        </div>
        <Component2
          changeColor1={handleChangeColor1}
          changeColor2={handleChangeColor2}
          color={color2}
        />
      </div>
    </div>
  );
};

export default Roots;
