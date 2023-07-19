import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import React from "react";

// Ações para atualizar a cor do Componente 1 e do Componente 2
const toggleColor1 = () => ({
  type: "TOGGLE_COLOR1",
});

const toggleColor2 = () => ({
  type: "TOGGLE_COLOR2",
});

// Reducer para manipular as ações
const reducer = (state = { color1: "green", color2: "red" }, action) => {
  switch (action.type) {
    case "TOGGLE_COLOR1":
      return {
        ...state,
        color1: state.color1 === "green" ? "red" : "green",
      };
    case "TOGGLE_COLOR2":
      return {
        ...state,
        color2: state.color2 === "red" ? "green" : "red",
      };
    default:
      return state;
  }
};

const Component2 = () => {
  // eslint-disable-next-line no-unused-vars
  const { color1, color2 } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: color2, padding: "10px" }}>
      <h2 style={{ color: "white" }}>Componente 2</h2>
      <div className="button-container">
        <Button variant="contained" onClick={() => dispatch(toggleColor1())}>
          Componente 1
        </Button>
        <Button variant="contained" onClick={() => dispatch(toggleColor2())}>
          Componente 2
        </Button>
      </div>
    </div>
  );
};

const ReduxComponent = () => {
  return (
    <div>
      <h2>Método com Redux</h2>
      <Provider store={createStore(reducer)}>
        <ConnectedComponent1 />
      </Provider>
    </div>
  );
};

// Componente 1 conectado ao Reduxx
const ConnectedComponent1 = () => {
  // eslint-disable-next-line no-unused-vars
  const { color1, color2 } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: color1,
        padding: "20px",
        minHeight: "200px",
      }}
    >
      <h1 style={{ color: "white" }}>Componente 1</h1>
      <div className="button-container">
        <Button variant="contained" onClick={() => dispatch(toggleColor1())}>
          Componente 1
        </Button>
        <Button variant="contained" onClick={() => dispatch(toggleColor2())}>
          Componente 2
        </Button>
      </div>
      <Component2 />
    </div>
  );
};

export default ReduxComponent;
