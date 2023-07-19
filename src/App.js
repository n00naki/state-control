import React from "react";
import Roots from "./state-down";
import ContextComponent from "./context";
import ComponentRef from "./ref";
import ReduxComponent from "./redux";

const App = () => {
  return (
    <div>
      <h1>Controles de Estado em Componentes Aninhados</h1>
      <Roots />
      <ContextComponent />
      <ReduxComponent />
      <ComponentRef />
    </div>
  );
};

export default App;
