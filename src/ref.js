import { Button } from "@mui/material";
import React, { useState, useRef } from "react";

const Component2 = ({ updateColor }) => {
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);

  const handleButtonClick = (buttonRef) => {
    const newColor = buttonRef.current.dataset.color;
    updateColor(newColor);
  };

  return (
    <div>
      <h2 style={{ color: "white" }}>Componente 2</h2>
      <div class="button-container">
        <Button
          variant="contained"
          ref={button1Ref}
          data-color="red"
          onClick={() => handleButtonClick(button1Ref)}
        >
          Cor Vermelha
        </Button>
        <Button
          variant="contained"
          ref={button2Ref}
          data-color="green"
          onClick={() => handleButtonClick(button2Ref)}
        >
          Cor Verde
        </Button>
      </div>
    </div>
  );
};

const ComponentRef = () => {
  const [color, setColor] = useState("green");

  const handleUpdateColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <h2>Método com useRef</h2>
      <div
        style={{ backgroundColor: color, padding: "20px", minHeight: "200px" }}
      >
        <h1 style={{ color: "white" }}>Componente 1</h1>
        <Component2 updateColor={handleUpdateColor} />
      </div>
    </div>
  );
};

export default ComponentRef;
